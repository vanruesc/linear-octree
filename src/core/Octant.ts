import { DataContainer } from "sparse-octree";

/**
 * An octant.
 *
 * @param T - The type of the octant data.
 */

export class Octant<T> implements DataContainer<T> {

	data: T;

	/**
	 * Constructs a new octant.
	 */

	constructor() {

		this.data = null;

	}

}
