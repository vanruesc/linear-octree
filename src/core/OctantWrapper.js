import { Vector3 } from "math-ds";
import { OctantId } from "./OctantId.js";

/**
 * An octant wrapper that stores positional information.
 */

export class OctantWrapper {

	/**
	 * Constructs a new octant wrapper.
	 *
	 * @param {Octant} [octant=null] - An octant.
	 * @param {OctantId} [id] - The identifier of the octant.
	 */

	constructor(octant = null, id = new OctantId()) {

		/**
		 * An octant.
		 *
		 * @type {Octant}
		 */

		this.octant = octant;

		/**
		 * An octant identifier.
		 *
		 * @type {OctantId}
		 */

		this.id = id;

		/**
		 * The lower bounds.
		 *
		 * @type {Vector3}
		 */

		this.min = new Vector3();

		/**
		 * The upper bounds.
		 *
		 * @type {Vector3}
		 */

		this.max = new Vector3();

	}

	/**
	 * Copies the given octant wrapper.
	 *
	 * @param {OctantWrapper} octantWrapper - An octant wrapper.
	 * @return {OctantWrapper} This octant wrapper.
	 */

	copy(octantWrapper) {

		this.octant = octantWrapper.octant;
		this.id.copy(octantWrapper.id);
		this.min.copy(octantWrapper.min);
		this.max.copy(octantWrapper.max);

		return this;

	}

	/**
	 * Clones this octant wrapper.
	 *
	 * @return {OctantWrapper} The cloned octant wrapper.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

	/**
	 * Computes the center of the wrapped octant.
	 *
	 * @param {Vector3} target - A target vector.
	 * @return {Vector3} A vector that describes the center of the octant.
	 */

	getCenter(target) {

		return target.addVectors(this.min, this.max).multiplyScalar(0.5);

	}

	/**
	 * Computes the size of the wrapped octant.
	 *
	 * @param {Vector3} target - A target vector.
	 * @return {Vector3} A vector that describes the size of the octant.
	 */

	getDimensions(target) {

		return target.subVectors(this.max, this.min);

	}

	/**
	 * Checks if the given point lies inside the boundaries of this wrapper.
	 *
	 * @param {Vector3} point - A point.
	 * @return {Boolean} Whether the given point lies inside the boundaries.
	 */

	containsPoint(point) {

		const min = this.min;
		const max = this.max;

		return (
			point.x >= min.x &&
			point.y >= min.y &&
			point.z >= min.z &&
			point.x <= max.x &&
			point.y <= max.y &&
			point.z <= max.z
		);

	}

}
