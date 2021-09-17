import { Vector3 } from "three";
import { Octant } from "./Octant";
import { OctantWrapper } from "./OctantWrapper";
import { Octree } from "./Octree";

/**
 * An octree iterator.
 *
 * @param T - The type of the octant data.
 */

export class OctreeIterator<T> implements Iterator<OctantWrapper<T>>,
	Iterable<OctantWrapper<T>> {

	/**
	 * The octree.
	 */

	private octree: Octree<T>;

	/**
	 * The size of the cells in the specified grid.
	 */

	private cellSize: Vector3;

	/**
	 * The level.
	 */

	private level: number;

	/**
	 * An internal octant grid entry iterator.
	 */

	private iterator: Iterator<[number, Octant<T>]>;

	/**
	 * An iterator result.
	 */

	private result: IteratorResult<OctantWrapper<T>>;

	/**
	 * Constructs a new octant iterator.
	 *
	 * @param octree - An octree.
	 * @param level - The level.
	 */

	constructor(octree: Octree<T>, level = 0) {

		this.octree = octree;
		this.cellSize = new Vector3();
		this.level = level;
		this.iterator = null;

		this.reset();

	}

	/**
	 * Resets this iterator.
	 *
	 * @return This iterator.
	 */

	reset(): OctreeIterator<T> {

		const level = this.level;
		const grid = this.octree.getGrid(level);

		if(grid !== undefined) {

			this.octree.getCellSize(level, this.cellSize);
			this.iterator = grid.entries();

		} else {

			throw new Error("Level out of bounds");

		}

		this.result = {
			done: false,
			value: null
		};

		return this;

	}

	/**
	 * Iterates over the octants.
	 *
	 * @return The next key.
	 */

	next(): IteratorResult<OctantWrapper<T>> {

		const result = this.result;
		const internalResult = this.iterator.next();
		const value = internalResult.value as [number, Octant<T>];

		if(!internalResult.done) {

			const octantWrapper = new OctantWrapper<T>();
			this.octree.getKeyDesign().unpackKey(value[0], octantWrapper.min);
			octantWrapper.min.multiply(this.cellSize).add(this.octree.min);
			octantWrapper.max.copy(octantWrapper.min).add(this.cellSize);
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
	 * @param value - An interator result value.
	 * @return A premature completion result.
	 */

	return(value: OctantWrapper<T>): IteratorResult<OctantWrapper<T>> {

		this.result.value = value;
		this.result.done = true;

		return this.result;

	}

	/**
	 * Returns this iterator.
	 *
	 * @return This iterator.
	 */

	[Symbol.iterator](): Iterator<OctantWrapper<T>> {

		return this;

	}

}
