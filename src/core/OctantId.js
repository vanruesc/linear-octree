/**
 * An octant identifier.
 *
 * Each octant can be identified by a level and a positional key.
 */

export class OctantId {

	/**
	 * Constructs a new world octant identifier.
	 *
	 * @param {Number} [level=0] - The level that this key applies to.
	 * @param {Number} [key=0] - The key.
	 */

	constructor(level = 0, key = 0) {

		/**
		 * The level that this key applies to.
		 *
		 * @type {Number}
		 */

		this.level = level;

		/**
		 * The unique key of the world octant.
		 *
		 * @type {Number}
		 */

		this.key = key;

	}

	/**
	 * Sets the level and key.
	 *
	 * @param {Number} level - The level.
	 * @param {Number} key - The key.
	 * @return {OctantId} This octant identifier.
	 */

	set(level, key) {

		this.level = level;
		this.key = key;

	}

	/**
	 * Copies the given octant identifier.
	 *
	 * @param {OctantId} id - An octant identifier.
	 * @return {OctantId} This octant identifier.
	 */

	copy(id) {

		this.level = id.level;
		this.key = id.key;

		return this;

	}

	/**
	 * Clones this octant identifier.
	 *
	 * @return {OctantId} The cloned octant identifier.
	 */

	clone() {

		return new this.constructor().copy(this);

	}

}
