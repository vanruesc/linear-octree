import { Vector3 } from "math-ds";
import { layout } from "sparse-octree";
import { KeyDesign } from "./KeyDesign.js";
import { OctantWrapper } from "./OctantWrapper.js";
import { OctreeIterator } from "./OctreeIterator.js";
import { OctreeRaycaster } from "./OctreeRaycaster.js";

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v = new Vector3();

/**
 * Recursively deletes octant children.
 *
 * @param {Octree} octree - An octree.
 * @param {Octant} octant - The current octant.
 * @param {Number} keyX - The X-coordinate of the current octant key.
 * @param {Number} keyY - The Y-coordinate of the current octant key.
 * @param {Number} keyZ - The Z-coordinate of the current octant key.
 * @param {Number} level - The current depth.
 */

function removeChildren(octree, octant, keyX, keyY, keyZ, level) {

	let grid, keyDesign;
	let children, child;
	let offset, key, i;

	// The octants from level zero have no children.
	if(level > 0) {

		// Look at the next lower level.
		--level;

		grid = octree.getGrid(level);
		keyDesign = octree.getKeyDesign();
		children = octant.children;

		// Translate the key coordinates to the next lower level.
		keyX <<= 1; keyY <<= 1; keyZ <<= 1;

		for(i = 0; i < 8; ++i) {

			// Check if the child exists.
			if((children & (1 << i)) !== 0) {

				offset = layout[i];

				v.set(
					keyX + offset[0],
					keyY + offset[1],
					keyZ + offset[2]
				);

				key = keyDesign.packKey(v);

				// Fetch the child and remove it from the grid.
				child = grid.get(key);
				grid.delete(key);

				removeChildren(octree, child, v.x, v.y, v.z, level);

			}

		}

		octant.children = 0;

	}

}

/**
 * Recursively removes empty parent nodes.
 *
 * @param {Octree} octree - An octree.
 * @param {Number} keyX - The X-coordinate of the deleted octant's key.
 * @param {Number} keyY - The Y-coordinate of the deleted octant's key.
 * @param {Number} keyZ - The Z-coordinate of the deleted octant's key.
 * @param {Number} level - The current level value.
 */

function prune(octree, keyX, keyY, keyZ, level) {

	let grid, i, key, parent;

	if(++level < octree.levels) {

		// Look at the next higher level grid.
		grid = octree.getGrid(level);

		// Determine the position of the deleted octant relative to its parent.
		i = Octree.calculateOffsetIndex(keyX, keyY, keyZ);

		// Translate the key coordinates to the next higher level.
		v.set(keyX >>> 1, keyY >>> 1, keyZ >>> 1);

		// The resulting coordinates identify the parent octant.
		key = octree.getKeyDesign().packKey(v);
		parent = grid.get(key);

		// Unset the existence flag of the deleted child.
		parent.children &= ~(1 << i);

		// Check if there are any children left.
		if(parent.children === 0) {

			// Remove the empty parent and recur.
			grid.delete(key);
			prune(octree, v.x, v.y, v.z, level);

		}

	}

}

/**
 * An octree that subdivides space for fast spatial searches.
 *
 * This linear implementation offers constant time access to octants at any
 * depth level as well as octant neighbours and parents.
 *
 * @implements {Iterable}
 * @implements {Node}
 * @implements {Tree}
 */

export class Octree {

	/**
	 * Constructs a new octree.
	 *
	 * Each octant can be uniquely identified by a 3D coordinate and a level.
	 * The individual values for X, Y and Z are packed into a numeric key.
	 *
	 * @param {Number} [cellSize=20] - The size of the smallest octants in level zero. Must be an integer i such that 0 < i < 2 ** (33 - levels).
	 * @param {Number} [levels=8] - The amount of detail levels. Must be an integer i such that 0 < i < 33.
	 * @param {KeyDesign} [keyDesign] - The bit allotments for the octant coordinates.
	 */

	constructor(cellSize = 20, levels = 8, keyDesign = new KeyDesign()) {

		levels = Math.max(Math.min(Math.trunc(levels), 32), 1);

		/**
		 * The level zero cell size.
		 *
		 * @type {Number}
		 * @private
		 */

		this.cellSize = Math.max(Math.min(Math.trunc(cellSize), Math.pow(2, 33 - levels) - 1), 1);

		/**
		 * The octant key design.
		 *
		 * @type {KeyDesign}
		 * @private
		 */

		this.keyDesign = keyDesign;

		/**
		 * The octant level grids.
		 *
		 * @type {Map[]}
		 * @private
		 */

		this.grids = [];

		while(this.grids.length < levels) {

			this.grids.push(new Map());

		}

		/**
		 * An empty octant wrapper that holds the bounds of this octree.
		 *
		 * @type {OctantWrapper}
		 * @private
		 */

		this.bounds = new OctantWrapper();

		this.bounds.min.copy(this.keyDesign.halfRange).multiplyScalar(-this.cellSize);
		this.bounds.max.copy(this.keyDesign.halfRange).multiplyScalar(this.cellSize);

	}

	/**
	 * The lower bounds of this octree.
	 *
	 * @type {Vector3}
	 */

	get min() {

		return this.bounds.min;

	}

	/**
	 * The upper bounds of this octree.
	 *
	 * @type {Vector3}
	 */

	get max() {

		return this.bounds.max;

	}

	/**
	 * The amount of depth levels. This value can not be changed.
	 *
	 * @type {Number}
	 */

	get levels() {

		return this.grids.length;

	}

	/**
	 * The level zero octant grid.
	 *
	 * @type {Number}
	 */

	get levelZero() {

		return this.grids[0];

	}

	/**
	 * Returns the key design.
	 *
	 * @return {KeyDesign} The key design.
	 */

	getKeyDesign() {

		return this.keyDesign;

	}

	/**
	 * Returns the size of the cells in the specified grid.
	 *
	 * @param {Number} [level=0] - The level. Must be a positive integer.
	 * @return {Number} The cell size.
	 */

	getCellSize(level = 0) {

		return (this.cellSize << level) >>> 0;

	}

	/**
	 * Calculates the center of this octree.
	 *
	 * @param {Vector3} [target] - A target vector. If none is provided, a new one will be created.
	 * @return {Vector3} A vector that describes the center of this octree.
	 */

	getCenter(target) {

		return this.bounds.getCenter(target);

	}

	/**
	 * Sets the center of this octree.
	 *
	 * @param {Vector3} center - The new center.
	 */

	setCenter(center) {

		this.min.copy(this.keyDesign.halfRange).multiplyScalar(-this.cellSize).add(center);
		this.max.copy(this.keyDesign.halfRange).multiplyScalar(this.cellSize).add(center);

	}

	/**
	 * Computes the size of this octree.
	 *
	 * @param {Vector3} [target] - A target vector. If none is provided, a new one will be created.
	 * @return {Vector3} A vector that describes the size of this octree.
	 */

	getDimensions(target) {

		return this.bounds.getDimensions(target);

	}

	/**
	 * Returns the grid of the specified level.
	 *
	 * @param {Number} level - The level of the grid.
	 * @return {Map} The requested grid or undefined if the given level is out of bounds.
	 */

	getGrid(level) {

		return (level >= 0 && level < this.grids.length) ? this.grids[level] : undefined;

	}

	/**
	 * Removes all octants.
	 */

	clear() {

		for(const grid of this.grids) {

			grid.clear();

		}

	}

	/**
	 * Checks if the given point lies inside this octree's boundaries.
	 *
	 * @param {Vector3} point - A point.
	 * @return {Boolean} Whether the given point lies inside this octree.
	 */

	containsPoint(point) {

		return this.bounds.containsPoint(point);

	}

	/**
	 * Returns the octree depth.
	 *
	 * @return {Number} The octree depth. This value is constant.
	 */

	getDepth() {

		return this.grids.length - 1;

	}

	/**
	 * Fetches all nodes of the specified level.
	 *
	 * @param {Number} level - The level.
	 * @return {Iterable} A collection that contains the nodes of the specified level.
	 */

	findNodesByLevel(level) {

		return this.octants(level);

	}

	/**
	 * Calculates key coordinates based on a given position and level.
	 *
	 * @param {Vector3} position - A position.
	 * @param {Number} level - The target level.
	 * @param {Vector3} [target] - A vector to store the result in. If none is provided, a new one will be created.
	 * @return {Vector3} The key coordinates.
	 */

	calculateKeyCoordinates(position, level, target = new Vector3()) {

		const cellSize = this.cellSize << level;

		// Translate to the origin (zero-based unsigned coordinates).
		v.subVectors(position, this.min);

		target.set(
			Math.trunc(v.x / cellSize),
			Math.trunc(v.y / cellSize),
			Math.trunc(v.z / cellSize)
		);

		return target;

	}

	/**
	 * Retrieves the node of a specific level that contains the given point.
	 *
	 * @param {Vector3} point - A point.
	 * @param {Number} [level=0] - A level value.
	 * @return {Octant} The node that contains the point or undefined if it doesn't exist.
	 */

	getNodeByPoint(point, level = 0) {

		const keyDesign = this.keyDesign;
		const grid = this.getGrid(level);

		let result;

		if(grid !== undefined) {

			if(this.containsPoint(point)) {

				this.calculateKeyCoordinates(point, level, v);
				result = grid.get(keyDesign.packKey(v));

			} else {

				console.error("Position out of range", point);

			}

		} else {

			console.error("Invalid level", level);

		}

		return result;

	}

	/**
	 * Removes a specific node by a given key.
	 *
	 * Children and empty parent nodes will be removed as well.
	 *
	 * @param {Number} key - The key of the octant that should be removed.
	 * @param {Number} [level=0] - The level of the octant.
	 */

	remove(key, level = 0) {

		const keyDesign = this.keyDesign;
		const grid = this.getGrid(level);

		let keyX, keyY, keyZ;

		if(grid !== undefined) {

			if(grid.has(key)) {

				// Note: v will be modified by removeChildren and prune.
				keyDesign.unpackKey(key, v);
				keyX = v.x; keyY = v.y; keyZ = v.z;

				// Recursively delete all children in the lower level grids.
				removeChildren(this, grid.get(key), keyX, keyY, keyZ, level);

				// Remove the octant.
				grid.delete(key);

				// Recursively delete empty parent nodes.
				prune(this, keyX, keyY, keyZ, level);

			} else {

				console.error("No octant found", key);

			}

		} else {

			console.error("Invalid level", level);

		}

	}

	/**
	 * Finds the nodes that intersect with the given ray. The intersecting
	 * nodes are sorted by distance, closest first. Empty nodes will not be
	 * included in the result.
	 *
	 * @param {Raycaster} raycaster - A raycaster.
	 * @param {Array} [intersects] - An optional target list to be filled with the intersecting nodes.
	 * @return {Node[]} The intersecting nodes.
	 */

	raycast(raycaster, intersects = []) {

		return OctreeRaycaster.intersectOctree(this, raycaster.ray, intersects);

	}

	/**
	 * Returns a new octree octant iterator.
	 *
	 * The octants returned by this iterator are augmented with explicit
	 * positional information. See {@link OctantWrapper} for more details.
	 *
	 * @param {Number} [level=0] - The depth.
	 * @return {Iterator<OctantWrapper>} An iterator.
	 */

	octants(level = 0) {

		return new OctreeIterator(this, level);

	}

	/**
	 * Calculates an offset index from octant key coordinates.
	 *
	 * The index identifies the octant's positional offset relative to its parent:
	 *
	 * ```text
	 *  0: [0, 0, 0]
	 *  1: [0, 0, 1]
	 *  2: [0, 1, 0]
	 *  3: [0, 1, 1]
	 *  4: [1, 0, 0]
	 *  5: [1, 0, 1]
	 *  6: [1, 1, 0]
	 *  7: [1, 1, 1]
	 * ```
	 *
	 * Note: This binary layout is defined in the external module `sparse-octree`.
	 *
	 * For more information on fast bitwise modulo with power of two divisors see:
	 *  https://graphics.stanford.edu/~seander/bithacks.html#ModulusDivisionEasy
	 *
	 * @param {Number} x - The X-coordinate of the octant key.
	 * @param {Number} y - The Y-coordinate of the octant key.
	 * @param {Number} z - The Z-coordinate of the octant key.
	 * @return {Number} The index of the relative positional offset. Range: [0, 7].
	 */

	static calculateOffsetIndex(x, y, z) {

		// Bitwise modulo: n % (1 << s) = n & ((1 << s) - 1) for positive integers.
		const offsetX = x & 1;
		const offsetY = y & 1;
		const offsetZ = z & 1;

		// Use a reversed packing order for correct indexing (X * 4 + Y * 2 + Z).
		return (offsetX << 2) + (offsetY << 1) + offsetZ;

	}

}
