import IteratorResult from "iterator-result";
import { OctantWrapper } from "./OctantWrapper.js";

/**
 * An octree iterator.
 *
 * @implements {Iterator}
 * @implements {Iterable}
 */

export class OctreeIterator {

	/**
	 * Constructs a new octant iterator.
	 *
	 * @param {Octree} octree - An octree.
	 * @param {Number} [level=0] - The grid level.
	 */

	constructor(octree, level = 0) {

		/**
		 * The octree.
		 *
		 * @type {Octree}
		 * @private
		 */

		this.octree = octree;

		/**
		 * The size of the cells in the specified grid.
		 *
		 * @type {Number}
		 * @private
		 */

		this.cellSize = 0;

		/**
		 * The internal octant iterator.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.iterator = null;

		/**
		 * A octant wrapper.
		 *
		 * @type {OctantWrapper}
		 * @private
		 */

		this.octantWrapper = new OctantWrapper();
		this.octantWrapper.id.level = level;

		/**
		 * An iterator result.
		 *
		 * @type {IteratorResult}
		 * @private
		 */

		this.result = new IteratorResult();

		this.reset();

	}

	/**
	 * Resets this iterator.
	 *
	 * @return {KeyIterator} This iterator.
	 */

	reset() {

		const level = this.octantWrapper.id.level;
		const octree = this.octree;
		const grid = octree.getGrid(level);

		if(grid !== undefined) {

			this.cellSize = octree.getCellSize(level);
			this.iterator = grid.entries();
			this.result.reset();

		} else {

			console.error("Invalid level", level);

		}

		return this;

	}

	/**
	 * Iterates over the octants.
	 *
	 * @return {IteratorResult} The next key.
	 */

	next() {

		const result = this.result;
		const octantWrapper = this.octantWrapper;
		const internalResult = this.iterator.next();
		const value = internalResult.value;

		if(!internalResult.done) {

			this.keyDesign.unpackKey(value[0], octantWrapper.min);
			octantWrapper.min.multiplyScalar(this.cellSize).add(this.octree.min);
			octantWrapper.max.copy(octantWrapper.min).addScalar(this.cellSize);
			octantWrapper.id.key = value[0];
			octantWrapper.octant = value[1];

			result.value = octantWrapper;

		} else {

			result.value = null;
			result.done = true;

		}

		return result;

	}

	/**
	 * Called when this iterator will no longer be run to completion.
	 *
	 * @param {Object} value - An interator result value.
	 * @return {IteratorResult} - A premature completion result.
	 */

	return(value) {

		this.result.value = value;
		this.result.done = true;

		return this.result;

	}

	/**
	 * Returns this iterator.
	 *
	 * @return {OctantIterator} An iterator.
	 */

	[Symbol.iterator]() {

		return this;

	}

}
