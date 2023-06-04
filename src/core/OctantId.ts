/**
 * An octant identifier.
 *
 * Each octant can be identified by a level and a positional key.
 */

export class OctantId {

	/**
	 * The key.
	 */

	key: number;

	/**
	 * The level.
	 */

	level: number;

	/**
	 * Constructs a new octant ID.
	 *
	 * @param key - The key.
	 * @param level - The level.
	 */

	constructor(key = 0, level = 0) {

		this.key = key;
		this.level = level;

	}

	/**
	 * Sets the key and level.
	 *
	 * @param key - The key.
	 * @param level - The level.
	 * @return This ID.
	 */

	set(key: number, level: number): OctantId {

		this.key = key;
		this.level = level;

		return this;

	}

	/**
	 * Copies the given octant identifier.
	 *
	 * @param id - An octant ID.
	 * @return This octant ID.
	 */

	copy(id: OctantId): OctantId {

		this.key = id.key;
		this.level = id.level;

		return this;

	}

	/**
	 * Clones this octant identifier.
	 *
	 * @return The cloned octant ID.
	 */

	clone(): OctantId {

		const clone = new (<typeof OctantId> this.constructor)();
		return clone.copy(this);

	}

}
