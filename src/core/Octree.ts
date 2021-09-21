import { Box3, Raycaster, Vector3 } from "three";
import { layout, Node, Tree } from "sparse-octree";
import { IntermediateOctant } from "./IntermediateOctant";
import { KeyDesign } from "./KeyDesign";
import { Octant } from "./Octant";
import { OctantWrapper } from "./OctantWrapper";
import { OctreeIterator } from "./OctreeIterator";
import { OctreeRaycaster } from "../raycasting/OctreeRaycaster";
import { calculateOffsetIndex } from "../utils/calculateOffsetIndex";

const u = new Vector3();
const v = new Vector3();

/**
 * Recursively deletes octant children.
 *
 * @param octree - An octree.
 * @param octant - The current octant.
 * @param keyX - The X-coordinate of the current octant key.
 * @param keyY - The Y-coordinate of the current octant key.
 * @param keyZ - The Z-coordinate of the current octant key.
 * @param level - The level.
 */

function removeChildren<T>(octree: Octree<T>, octant: IntermediateOctant<T>,
	keyX: number, keyY: number, keyZ: number, level: number): void {

	// The octants in level zero have no children.
	if(level > 0) {

		// Go to the next lower level.
		--level;

		const grid = octree.getGrid(level);
		const keyDesign = octree.getKeyDesign();
		const children = octant.children;

		// Translate the key coordinates to the next lower level.
		keyX *= 2; keyY *= 2; keyZ *= 2;

		for(let i = 0; i < 8; ++i) {

			// Check if the child exists.
			if((children & (1 << i | 0)) !== 0) {

				const offset = layout[i];
				v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
				const key = keyDesign.packKey(v);

				// Get the child octant and remove it from the grid.
				const child = grid.get(key) as IntermediateOctant<T>;
				grid.delete(key);

				removeChildren(octree, child, v.x, v.y, v.z, level);

			}

		}

		octant.children = 0;

	}

}

/**
 * Recursively creates intermediate parent octants from the bottom up.
 *
 * @param octree - An octree.
 * @param keyX - The X-coordinate of the created octant's key.
 * @param keyY - The Y-coordinate of the created octant's key.
 * @param keyZ - The Z-coordinate of the created octant's key.
 * @param level - The current level.
 */

function createParents<T>(octree: Octree<T>, keyX: number, keyY: number,
	keyZ: number, level: number): void {

	// Go to the next higher level.
	++level;

	// Determine the position of the created octant relative to its parent.
	const i = calculateOffsetIndex(keyX, keyY, keyZ);

	if(level < octree.getLevels()) {

		const grid = octree.getGrid(level);

		// Translate the key coordinates to the next higher level.
		v.set(keyX >>> 1, keyY >>> 1, keyZ >>> 1);

		// The resulting coordinates identify the parent octant.
		const key = octree.getKeyDesign().packKey(v);
		let parent;

		if(grid.has(key)) {

			// The parent node already exists.
			parent = grid.get(key) as IntermediateOctant<T>;

			// Set the existence flag of the created child and stop.
			parent.children |= 1 << i | 0;

		} else {

			// Create a new intermediate node.
			parent = new IntermediateOctant<T>();
			grid.set(key, parent);

			// Set the existence flag of the created child and recur.
			parent.children |= 1 << i | 0;
			createParents(octree, v.x, v.y, v.z, level);

		}

	} else {

		// Set the existence flag of the created child and stop.
		const rootOctant = octree.root.octant as IntermediateOctant<T>;
		rootOctant.children |= 1 << i | 0;

	}

}

/**
 * Recursively removes empty parent nodes from the bottom up.
 *
 * @param octree - An octree.
 * @param keyX - The X-coordinate of the deleted octant's key.
 * @param keyY - The Y-coordinate of the deleted octant's key.
 * @param keyZ - The Z-coordinate of the deleted octant's key.
 * @param level - The current level.
 */

function prune<T>(octree: Octree<T>, keyX: number, keyY: number, keyZ: number,
	level: number): void {

	// Go to the next higher level.
	++level;

	// Determine the position of the deleted octant relative to its parent.
	const i = calculateOffsetIndex(keyX, keyY, keyZ);

	if(level < octree.getLevels()) {

		const grid = octree.getGrid(level);

		// Translate the key coordinates to the next higher level.
		v.set(keyX >>> 1, keyY >>> 1, keyZ >>> 1);

		// The resulting coordinates identify the parent octant.
		const key = octree.getKeyDesign().packKey(v);
		const parent = grid.get(key) as IntermediateOctant<T>;

		// Unset the existence flag of the deleted child.
		parent.children &= ~(1 << i | 0);

		// Check if there are any children left.
		if(parent.children === 0) {

			// Remove the empty parent and recur.
			grid.delete(key);
			prune(octree, v.x, v.y, v.z, level);

		}

	} else {

		// Unset the existence flag of the deleted child and stop.
		const rootOctant = octree.root.octant as IntermediateOctant<T>;
		rootOctant.children &= ~(1 << i | 0);

	}

}

/**
 * An octree that subdivides space for fast spatial searches.
 *
 * This linear implementation offers constant time access to octants at any
 * depth level as well as octant neighbours and parents.
 *
 * @param T - The type of the octant data.
 */

export class Octree<T> implements Tree, Iterable<Node> {

	/**
	 * The level zero cell size.
	 */

	private cellSize: Vector3;

	/**
	 * The octant key design.
	 */

	private keyDesign: KeyDesign;

	/**
	 * The hierarchical octant grids.
	 */

	private grids: Map<number, Octant<T>>[];

	/**
	 * The root node of this octree.
	 */

	readonly root: OctantWrapper<T>;

	/**
	 * Constructs a new octree.
	 *
	 * Each octant can be uniquely identified by a 3D coordinate and a level. The
	 * tree depth is defined by the key design.
	 *
	 * If the bounds of the octree are defined directly, the cell size will depend
	 * on the bounds and the key design. Alternatively, the bounds can be
	 * calculated from a desired cell size via {@link KeyDesign.calculateBounds}.
	 *
	 * @param bounds - The bounds of the octree.
	 * @param keyDesign - The bit allotments for the octant coordinates. The highest number of bits determines the octree depth.
	 */

	constructor(bounds: Box3, keyDesign = new KeyDesign()) {

		const levels = Math.max(keyDesign.x, keyDesign.y, keyDesign.z);

		this.keyDesign = keyDesign;
		this.grids = [];

		while(this.grids.length < levels) {

			this.grids.push(new Map<number, Octant<T>>());

		}

		const root = new OctantWrapper<T>(new IntermediateOctant<T>());
		root.min.copy(bounds.min);
		root.max.copy(bounds.max);
		Object.freeze(root.min);
		Object.freeze(root.max);
		Object.freeze(root);
		this.root = root;

		const dimensions = root.getDimensions(new Vector3());
		this.cellSize = dimensions.set(
			dimensions.x / (1 << keyDesign.x >>> 0),
			dimensions.y / (1 << keyDesign.y >>> 0),
			dimensions.z / (1 << keyDesign.z >>> 0)
		);

	}

	get min(): Vector3 {

		return this.root.min;

	}

	get max(): Vector3 {

		return this.root.max;

	}

	getCenter(target: Vector3): Vector3 {

		return this.root.getCenter(target);

	}

	getDimensions(target: Vector3): Vector3 {

		return this.root.getDimensions(target);

	}

	getDepth(): number {

		return this.grids.length - 1;

	}

	findNodesByLevel(level: number): Node[] {

		return Array.from(this.octants(level));

	}

	/**
	 * Returns the amount of depth levels.
	 *
	 * @return The levels.
	 */

	getLevels(): number {

		return this.grids.length;

	}

	/**
	 * Returns the key design.
	 *
	 * @return The key design.
	 */

	getKeyDesign(): KeyDesign {

		return this.keyDesign;

	}

	/**
	 * Returns the size of the cells in the specified grid.
	 *
	 * @param level - The level. Must be a positive integer.
	 * @param target - A vector to store the result in.
	 * @return The cell size.
	 */

	getCellSize(level: number, target: Vector3): Vector3 {

		const cellSize = this.cellSize;
		const keyDesign = this.keyDesign;

		return target.set(
			cellSize.x * (1 << Math.min(level, keyDesign.x) >>> 0),
			cellSize.y * (1 << Math.min(level, keyDesign.y) >>> 0),
			cellSize.z * (1 << Math.min(level, keyDesign.z) >>> 0)
		);

	}

	/**
	 * Returns the grid of the specified level.
	 *
	 * @param level - The level of the grid.
	 * @return The requested grid, or undefined if the level is out of bounds.
	 */

	getGrid(level: number): Map<number, Octant<T>> {

		return (level >= 0 && level < this.grids.length) ?
			this.grids[level] : undefined;

	}

	/**
	 * Removes all octants.
	 */

	clear(): void {

		for(const grid of this.grids) {

			grid.clear();

		}

	}

	/**
	 * Checks if the given point lies inside this octree's boundaries.
	 *
	 * @param point - A point.
	 * @return Whether the given point lies inside this octree.
	 */

	containsPoint(point: Vector3): boolean {

		return this.root.containsPoint(point);

	}

	/**
	 * Calculates key coordinates based on a given position and level.
	 *
	 * @param position - A position.
	 * @param level - The level.
	 * @param target - A vector to store the result in.
	 * @return The key coordinates.
	 */

	calculateKeyCoordinates(position: Vector3, level: number,
		target: Vector3): Vector3 {

		if(!this.containsPoint(position)) {

			throw new Error("Position out of bounds");

		}

		const cellSize = this.getCellSize(level, u);

		// Translate to the origin (zero-based unsigned coordinates).
		target.subVectors(position, this.min);

		target.set(
			Math.trunc(target.x / cellSize.x),
			Math.trunc(target.y / cellSize.y),
			Math.trunc(target.z / cellSize.z)
		);

		return target.min(this.keyDesign.getMaxKeyCoordinates(u));

	}

	/**
	 * Retrieves an octant of a specific level that contains the given point.
	 *
	 * @param point - A point.
	 * @param level - The level.
	 * @return The octant, or undefined if it doesn't exist.
	 */

	getOctantByPoint(point: Vector3, level = 0): Octant<T> {

		const keyDesign = this.keyDesign;
		const grid = this.getGrid(level);

		let result: Octant<T>;

		if(grid !== undefined) {

			this.calculateKeyCoordinates(point, level, v);
			result = grid.get(keyDesign.packKey(v));

		} else {

			throw new Error("Level out of bounds");

		}

		return result;

	}

	/**
	 * Removes a specific octant.
	 *
	 * Children and empty intermediate parent octants will be removed as well.
	 *
	 * @param keyCoordinates - The key coordinates of the octant that should be removed.
	 * @param level - The level of the octant.
	 */

	delete(keyCoordinates: Vector3, level = 0): void {

		const keyDesign = this.keyDesign;
		const grid = this.getGrid(level);

		if(grid !== undefined) {

			const key = keyDesign.packKey(keyCoordinates);

			if(grid.has(key)) {

				const { x, y, z } = keyCoordinates;

				// Recursively delete all children in the lower level grids.
				const octant = grid.get(key) as IntermediateOctant<T>;
				removeChildren(this, octant, x, y, z, level);

				// Remove the octant.
				grid.delete(key);

				// Recursively delete empty parent nodes.
				prune(this, x, y, z, level);

			}

		} else {

			throw new Error("Level out of bounds");

		}

	}

	/**
	 * Retrieves data from a specific octant.
	 *
	 * @param keyCoordinates - The key coordinates of the octant.
	 * @param level - The level of the octant.
	 * @return The data, or undefined if the octant doesn't exist.
	 */

	get(keyCoordinates: Vector3, level: number): T {

		const keyDesign = this.keyDesign;
		const grid = this.getGrid(level);

		let result;

		if(grid !== undefined) {

			const key = keyDesign.packKey(keyCoordinates);

			if(grid.has(key)) {

				const octant = grid.get(key);
				result = octant.data;

			}

		} else {

			throw new Error("Level out of bounds");

		}

		return result;

	}

	/**
	 * Adds data to a specific octant.
	 *
	 * Missing intermediate octants will be created automatically.
	 *
	 * @param keyCoordinates - The key coordinates of the octant.
	 * @param level - The level of the octant.
	 * @param data - The data.
	 */

	set(keyCoordinates: Vector3, level: number, data: T): void {

		const keyDesign = this.keyDesign;
		const grid = this.getGrid(level);

		if(grid !== undefined) {

			const key = keyDesign.packKey(keyCoordinates);

			if(grid.has(key)) {

				const octant = grid.get(key);
				octant.data = data;

			} else {

				const { x, y, z } = keyCoordinates;

				// Create the octant.
				const octant = (level === 0) ?
					new Octant<T>() : new IntermediateOctant<T>();

				octant.data = data;
				grid.set(key, octant);

				// Recursively create intermediate parent nodes.
				createParents(this, x, y, z, level);

			}

		} else {

			throw new Error("Level out of bounds");

		}

	}

	/**
	 * Finds nodes that intersect with the given ray. The intersecting nodes are
	 * sorted by distance, closest first.
	 *
	 * @param raycaster - A raycaster.
	 * @return The intersecting nodes.
	 */

	getIntersectingNodes(raycaster: Raycaster): Node[] {

		return OctreeRaycaster.intersectOctree(this, raycaster.ray);

	}

	/**
	 * Returns a new octree iterator.
	 *
	 * The octants returned by this iterator are augmented with explicit
	 * positional information. See {@link OctantWrapper} for more details.
	 *
	 * @param level - The depth level.
	 * @return An octree iterator.
	 */

	octants(level = 0): OctreeIterator<T> {

		return new OctreeIterator(this, level);

	}

	/**
	 * Returns an iterator that returns all leaf nodes.
	 *
	 * @return An iterator.
	 */

	[Symbol.iterator](): Iterator<Node> {

		return this.octants();

	}

}
