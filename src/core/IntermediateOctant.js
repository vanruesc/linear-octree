import { Octant } from "./Octant.js";

/**
 * An octant that doesn't reside in level zero.
 *
 * This octant stores information about the existence of its potential children.
 */

export class IntermediateOctant extends Octant {

	/**
	 * Constructs a new intermediate octant.
	 */

	constructor() {

		super();

		/**
		 * An 8-bit mask that indicates the existence of the eight potential
		 * children.
		 *
		 * The order of the children follows the common octant layout from the
		 * external module `sparse-octree`:
		 *
		 * ```text
		 *    3____7
		 *  2/___6/|
		 *  | 1__|_5
		 *  0/___4/
		 * ```
		 *
		 * @type {Number}
		 */

		this.children = 0;

	}

}
