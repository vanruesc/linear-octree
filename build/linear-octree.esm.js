/**
 * linear-octree v0.0.0 build Sat Jan 18 2020
 * https://github.com/vanruesc/linear-octree
 * Copyright 2020 Raoul van Rüschen
 * @license Zlib
 */
import { Vector3, Box3, Ray, Line3 } from 'math-ds';
import IteratorResult from 'iterator-result';

/**
 * An octant.
 *
 * This octant serves as a data container. Its position is implicitly defined
 * by its key and its size is defined by the level in which it resides.
 *
 * @implements {Node}
 */

class Octant {

	/**
	 * Constructs a new octant.
	 */

	constructor() {

		/**
		 * The data.
		 *
		 * @type {Object}
		 */

		this.data = null;

	}

}

/**
 * An octant that doesn't reside in level zero.
 *
 * This octant stores information about the existence of its potential children.
 */

class IntermediateOctant extends Octant {

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

/**
 * A collection of binary number utilities.
 */

class BinaryUtils {

	/**
	 * Interpretes the given string as a binary number.
	 *
	 * @param {String} s - A string that represents a binary number.
	 * @return {Number} The parsed number.
	 */

	static parseBin(s) {

		return parseInt(s, 2);

	}

	/**
	 * Creates a binary string representation of the given number.
	 *
	 * @param {Number} n - A number.
	 * @param {Number} [minBits=64] - The minimum length of the string.
	 * @return {String} The binary representation.
	 */

	static createBinaryString(n, minBits = 64) {

		const sign = (n < 0) ? "-" : "";

		let result = Math.abs(n).toString(2);

		while(result.length < minBits) {

			result = "0" + result;

		}

		return sign + result;

	}

}

/**
 * A key range iterator.
 *
 * @implements {Iterator}
 * @implements {Iterable}
 */

class KeyIterator {

	/**
	 * Constructs a new key iterator.
	 *
	 * This iterator returns all keys in the specified coordinate range, including
	 * those at min and max.
	 *
	 * @param {KeyDesign} keyDesign - A key design.
	 * @param {Vector3} min - The lower index bounds (zero-based unsigned integer coordinates).
	 * @param {Vector3} max - The upper index bounds (zero-based unsigned integer coordinates).
	 */

	constructor(keyDesign, min, max) {

		/**
		 * The key design.
		 *
		 * @type {KeyDesign}
		 * @private
		 */

		this.keyDesign = keyDesign;

		/**
		 * The lower index bounds.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.min = min;

		/**
		 * The upper index bounds.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.max = max;

		/**
		 * The base key coordinates.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.keyBase = new Vector3();

		/**
		 * The current key iteration coordinates.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.key = new Vector3();

		/**
		 * The iteration limits.
		 *
		 * @type {Vector3}
		 * @private
		 */

		this.limit = new Vector3();

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

		const keyDesign = this.keyDesign;
		const min = this.min, max = this.max;

		if(min.x <= max.x && min.y <= max.y && min.z <= max.z) {

			this.keyBase.set(min.x, min.y * keyDesign.rangeX, min.z * keyDesign.rangeXY);
			this.limit.set(max.x, max.y * keyDesign.rangeX, max.z * keyDesign.rangeXY);
			this.key.copy(this.keyBase);

		} else {

			// The range is invalid. Return no keys.
			this.keyBase.set(1, 1, 1);
			this.limit.set(0, 0, 0);
			this.key.copy(this.keyBase);

			console.error("Invalid key range", min, max);

		}

		this.result.reset();

		return this;

	}

	/**
	 * Iterates over the key range.
	 *
	 * @return {IteratorResult} The next key.
	 */

	next() {

		const result = this.result;
		const keyDesign = this.keyDesign;
		const keyBase = this.keyBase;
		const limit = this.limit;
		const key = this.key;

		if(key.z <= limit.z) {

			// Put the key pieces together.
			result.value = key.z + key.y + key.x;

			// Advance the key coordinates.
			++key.x;

			if(key.x > limit.x) {

				key.x = keyBase.x;
				key.y += keyDesign.rangeX;

				if(key.y > limit.y) {

					key.y = keyBase.y;
					key.z += keyDesign.rangeXY;

				}

			}

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
	 * @return {Iterator} An iterator.
	 */

	[Symbol.iterator]() {

		return this;

	}

}

/**
 * The amount of bits of a DWord.
 *
 * @type {Number}
 * @private
 */

const DWORD_BITS = 32;

/**
 * The amount of different values that can be represented with a DWord.
 *
 * @type {Number}
 * @private
 */

const RANGE_DWORD = Math.pow(2, DWORD_BITS);

/**
 * The total amount of available bits for safe integers.
 *
 * @type {Number}
 * @private
 */

const BITS = 53;

/**
 * The amount of available high bits.
 *
 * In JavaScript, bit operations can only be applied to DWords (32-bit).
 * All 53-bit keys must be split into a high and a low part for processing.
 *
 * @type {Number}
 * @private
 */

const HI_BITS = 21;

/**
 * The amount of available low bits.
 *
 * In JavaScript, bit operations can only be applied to DWords (32-bit).
 * All 53-bit keys must be split into a high and a low part for processing.
 *
 * @type {Number}
 * @private
 */

const LO_BITS = 32;

/**
 * A design for octant keys.
 *
 * 3D coordinates are packed into a single integer to obtain a unique key. This
 * class describes the bit allotment for each coordinate and provides methods
 * for key packing and unpacking.
 *
 * See {@link KeyDesign.BITS} for the total amount of available bits.
 */

class KeyDesign {

	/**
	 * Constructs a new key design.
	 *
	 * @param {Number} [x=Math.round(BITS * 0.4)] - The amount of bits used for the X-coordinate.
	 * @param {Number} [y=Math.round(BITS * 0.2)] - The amount of bits used for the Y-coordinate.
	 * @param {Number} [z=x] - The amount of bits used for the Z-coordinate.
	 */

	constructor(x = Math.round(BITS * 0.4), y = Math.round(BITS * 0.2), z = x) {

		/**
		 * The amount of bits reserved for the X-coordinate.
		 *
		 * @type {Number}
		 */

		this.x = 0;

		/**
		 * The amount of bits reserved for the Y-coordinate.
		 *
		 * @type {Number}
		 */

		this.y = 0;

		/**
		 * The amount of bits reserved for the Z-coordinate.
		 *
		 * @type {Number}
		 */

		this.z = 0;

		/**
		 * The amount of distinct integers that can be represented with X bits.
		 *
		 * @type {Number}
		 */

		this.rangeX = 0;

		/**
		 * The amount of distinct integers that can be represented with Y bits.
		 *
		 * @type {Number}
		 */

		this.rangeY = 0;

		/**
		 * The amount of distinct integers that can be represented with Z bits.
		 *
		 * @type {Number}
		 */

		this.rangeZ = 0;

		/**
		 * The amount of distinct integers that can be represented with X + Y bits.
		 *
		 * @type {Number}
		 */

		this.rangeXY = 0;

		/**
		 * The key range divided by two.
		 *
		 * @type {Vector3}
		 */

		this.halfRange = null;

		/**
		 * A bit mask for the X-coordinate. The first item holds the low bits while
		 * the second item holds the high bits.
		 *
		 * @type {Number}
		 * @private
		 */

		this.maskX = [0, 0];

		/**
		 * A bit mask for the Y-coordinate. The first item holds the low bits while
		 * the second item holds the high bits.
		 *
		 * @type {Number}
		 * @private
		 */

		this.maskY = [0, 0];

		/**
		 * A bit mask for the Z-coordinate. The first item holds the low bits while
		 * the second item holds the high bits.
		 *
		 * @type {Number}
		 * @private
		 */

		this.maskZ = [0, 0];

		this.set(x, y, z);

	}

	/**
	 * Sets the bit distribution.
	 *
	 * Make sure to clear your octree after changing the key design!
	 *
	 * @param {Number} [x] - The amount of bits used for the X-coordinate.
	 * @param {Number} [y] - The amount of bits used for the Y-coordinate.
	 * @param {Number} [z] - The amount of bits used for the Z-coordinate.
	 */

	set(x, y, z) {

		// Bit operations only work on DWord Numbers.
		if(x + y + z > BITS || x > DWORD_BITS || y > DWORD_BITS || z > DWORD_BITS) {

			console.warn("Invalid bit allotment");

			x = Math.round(BITS * 0.4);
			y = Math.round(BITS * 0.2);
			z = x;

		}

		this.x = x;
		this.y = y;
		this.z = z;

		this.rangeX = Math.pow(2, x);
		this.rangeY = Math.pow(2, y);
		this.rangeZ = Math.pow(2, z);

		this.rangeXY = Math.pow(2, x + y);

		this.halfRange = new Vector3(
			this.rangeX / 2,
			this.rangeY / 2,
			this.rangeZ / 2
		);

		this.updateBitMasks();

	}

	/**
	 * Creates bit masks for the extraction of coordinates from keys.
	 *
	 * @private
	 */

	updateBitMasks() {

		const xBits = this.x;
		const yBits = this.y;
		const zBits = this.z;

		const maskX = this.maskX;
		const maskY = this.maskY;
		const maskZ = this.maskZ;

		const hiShiftX = DWORD_BITS - Math.max(0, xBits - LO_BITS);
		const hiShiftY = DWORD_BITS - Math.max(0, yBits + xBits - LO_BITS);
		const hiShiftZ = DWORD_BITS - Math.max(0, zBits + yBits + xBits - LO_BITS);

		maskX[1] = (hiShiftX < DWORD_BITS) ? ~0 >>> hiShiftX : 0;
		maskX[0] = ~0 >>> Math.max(0, LO_BITS - xBits);

		maskY[1] = (((hiShiftY < DWORD_BITS) ? ~0 >>> hiShiftY : 0) & ~maskX[1]) >>> 0;
		maskY[0] = ((~0 >>> Math.max(0, LO_BITS - (xBits + yBits))) & ~maskX[0]) >>> 0;

		maskZ[1] = (((hiShiftZ < DWORD_BITS) ? ~0 >>> hiShiftZ : 0) & ~maskY[1] & ~maskX[1]) >>> 0;
		maskZ[0] = ((~0 >>> Math.max(0, LO_BITS - (xBits + yBits + zBits))) & ~maskY[0] & ~maskX[0]) >>> 0;

	}

	/**
	 * Extracts the 3D coordinates from a given key.
	 *
	 * @param {Number} key - The key.
	 * @param {Vector3} [target] - A target for the extracted coordinates. If none is provided, a new vector will be created.
	 * @return {Vector3} The extracted coordinates.
	 */

	unpackKey(key, target = new Vector3()) {

		const maskX = this.maskX;
		const maskY = this.maskY;
		const maskZ = this.maskZ;

		// Split the QWord key in a high and a low DWord.
		const hi = Math.trunc(key / RANGE_DWORD);
		const lo = key % RANGE_DWORD;

		return target.set(

			((hi & maskX[1]) * RANGE_DWORD) + ((lo & maskX[0]) >>> 0),
			(((hi & maskY[1]) * RANGE_DWORD) + ((lo & maskY[0]) >>> 0)) / this.rangeX,
			(((hi & maskZ[1]) * RANGE_DWORD) + ((lo & maskZ[0]) >>> 0)) / this.rangeXY

		);

	}

	/**
	 * Packs a 3D position into a unique key.
	 *
	 * @param {Vector3} position - A position.
	 * @return {Number} The octant key.
	 */

	packKey(position) {

		return position.z * this.rangeXY + position.y * this.rangeX + position.x;

	}

	/**
	 * Returns a new key range iterator.
	 *
	 * The key iterator will return all keys in the specified coordinate range,
	 * including those at min and max.
	 *
	 * @param {Vector3} min - The lower key index bounds (zero-based unsigned integer coordinates).
	 * @param {Vector3} max - The upper key index bounds (zero-based unsigned integer coordinates).
	 * @return {KeyIterator} An iterator.
	 */

	keyRange(min, max) {

		return new KeyIterator(this, min, max);

	}

	/**
	 * Converts the information of this key design into a string.
	 *
	 * @return {String} The key design as a string.
	 */

	toString() {

		const maskX = this.maskX;
		const maskY = this.maskY;
		const maskZ = this.maskZ;

		return (

			"Key Design\n\n" +

			"X-Bits: " + this.x + "\n" +
			"Y-Bits: " + this.y + "\n" +
			"Z-Bits: " + this.z + "\n\n" +

			BinaryUtils.createBinaryString(maskX[1], DWORD_BITS) + " " + maskX[1] + " (HI-Mask X)\n" +
			BinaryUtils.createBinaryString(maskX[0], DWORD_BITS) + " " + maskX[0] + " (LO-Mask X)\n\n" +

			BinaryUtils.createBinaryString(maskY[1], DWORD_BITS) + " " + maskY[1] + " (HI-Mask Y)\n" +
			BinaryUtils.createBinaryString(maskY[0], DWORD_BITS) + " " + maskY[0] + " (LO-Mask Y)\n\n" +

			BinaryUtils.createBinaryString(maskZ[1], DWORD_BITS) + " " + maskZ[1] + " (HI-Mask Z)\n" +
			BinaryUtils.createBinaryString(maskZ[0], DWORD_BITS) + " " + maskZ[0] + " (LO-Mask Z)\n"

		);

	}

	/**
	 * The total amount of available bits for safe integers.
	 *
	 * JavaScript uses IEEE 754 binary64 Doubles for Numbers and, as a result,
	 * only supports 53-bit integers as of ES2015.
	 *
	 * For more information see: http://2ality.com/2012/04/number-encoding.html
	 *
	 * @type {Number}
	 */

	static get BITS() {

		return BITS;

	}

	/**
	 * The amount of available bits in the high DWord.
	 *
	 * In JavaScript, bit operations can only be applied to DWords (32-bit).
	 * All 53-bit keys must be split into a high and a low part for processing.
	 *
	 * @type {Number}
	 */

	static get HI_BITS() {

		return HI_BITS;

	}

	/**
	 * The amount of available bits in the low DWord.
	 *
	 * In JavaScript, bit operations can only be applied to DWords (32-bit).
	 * All 53-bit keys must be split into a high and a low part for processing.
	 *
	 * @type {Number}
	 */

	static get LO_BITS() {

		return LO_BITS;

	}

}

/**
 * An octant identifier.
 *
 * Each octant can be identified by a level and a positional key.
 */

class OctantId {

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

/**
 * An octant wrapper that stores positional information.
 */

class OctantWrapper {

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

/**
 * sparse-octree v6.0.2 build Sat Jan 18 2020
 * https://github.com/vanruesc/sparse-octree
 * Copyright 2020 Raoul van Rüschen
 * @license Zlib
 */

/**
 * A binary pattern that describes the standard octant layout:
 *
 * ```text
 *    3____7
 *  2/___6/|
 *  | 1__|_5
 *  0/___4/
 * ```
 *
 * This common layout is crucial for positional assumptions.
 *
 * @type {Uint8Array[]}
 */

const layout = [

	new Uint8Array([0, 0, 0]),
	new Uint8Array([0, 0, 1]),
	new Uint8Array([0, 1, 0]),
	new Uint8Array([0, 1, 1]),

	new Uint8Array([1, 0, 0]),
	new Uint8Array([1, 0, 1]),
	new Uint8Array([1, 1, 0]),
	new Uint8Array([1, 1, 1])

];

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const c = new Vector3();

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const c$1 = new Vector3();

/**
 * A container for raycasting flags.
 */

class Flags {

	/**
	 * Creates a new container for raycasting flags.
	 */

	constructor() {

		/**
		 * The current flags.
		 *
		 * @type {Number}
		 */

		this.value = 0;

	}

}

/**
 * Finds the entry plane of the first octant that a ray travels through.
 *
 * Determining the first octant requires knowing which of the t0s is the
 * largest. The tms of the other axes must also be compared against that
 * largest t0.
 *
 * @param {Number} tx0 - Ray projection parameter.
 * @param {Number} ty0 - Ray projection parameter.
 * @param {Number} tz0 - Ray projection parameter.
 * @param {Number} txm - Ray projection parameter mean.
 * @param {Number} tym - Ray projection parameter mean.
 * @param {Number} tzm - Ray projection parameter mean.
 * @return {Number} The index of the first octant that the ray travels through.
 */

function findEntryOctant(tx0, ty0, tz0, txm, tym, tzm) {

	let entry = 0;

	// Find the entry plane.
	if(tx0 > ty0 && tx0 > tz0) {

		// YZ-plane.
		if(tym < tx0) {

			entry |= 2;

		}

		if(tzm < tx0) {

			entry |= 1;

		}

	} else if(ty0 > tz0) {

		// XZ-plane.
		if(txm < ty0) {

			entry |= 4;

		}

		if(tzm < ty0) {

			entry |= 1;

		}

	} else {

		// XY-plane.
		if(txm < tz0) {

			entry |= 4;

		}

		if(tym < tz0) {

			entry |= 2;

		}

	}

	return entry;

}

/**
 * A lookup-table containing octant ids. Used to determine the exit plane from
 * an octant.
 *
 * @type {Uint8Array[]}
 * @private
 */

const octantTable = [

	new Uint8Array([4, 2, 1]),
	new Uint8Array([5, 3, 8]),
	new Uint8Array([6, 8, 3]),
	new Uint8Array([7, 8, 8]),
	new Uint8Array([8, 6, 5]),
	new Uint8Array([8, 7, 8]),
	new Uint8Array([8, 8, 7]),
	new Uint8Array([8, 8, 8])

];

/**
 * Finds the next octant that intersects with the ray based on the exit plane of
 * the current one.
 *
 * @param {Number} currentOctant - The index of the current octant.
 * @param {Number} tx1 - Ray projection parameter.
 * @param {Number} ty1 - Ray projection parameter.
 * @param {Number} tz1 - Ray projection parameter.
 * @return {Number} The index of the next octant that the ray travels through.
 */

function findNextOctant(currentOctant, tx1, ty1, tz1) {

	let min;
	let exit = 0;

	// Find the exit plane.
	if(tx1 < ty1) {

		min = tx1;
		exit = 0; // YZ-plane.

	} else {

		min = ty1;
		exit = 1; // XZ-plane.

	}

	if(tz1 < min) {

		exit = 2; // XY-plane.

	}

	return octantTable[currentOctant][exit];

}

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v = new Vector3();

/**
 * A box.
 *
 * @type {Box3}
 * @private
 */

const b = new Box3();

/**
 * A box.
 *
 * @type {Box3}
 * @private
 */

const d = new Box3();

/**
 * A ray.
 *
 * @type {Ray}
 * @private
 */

const r = new Ray();

/**
 * Calculates ray projection parameters for the given octree and ray setup.
 *
 * @param {Octree} octree - The octree.
 * @param {Ray} ray - A ray.
 * @param {Flags} flags - Raycasting flags.
 * @return {Number[]} The ray parameters tx0, ty0, tz0, tx1, ty1 and tz1, in that order, or null if the ray doesn't hit the octree.
 */

function intersectOctree(octree, ray, flags) {

	// Translate the octant extents to the scene origin.
	const min = b.min.set(0, 0, 0);
	const max = b.max.subVectors(octree.max, octree.min);

	const dimensions = octree.getDimensions(d.min);
	const halfDimensions = d.max.copy(dimensions).multiplyScalar(0.5);

	const origin = r.origin.copy(ray.origin);
	const direction = r.direction.copy(ray.direction);

	let invDirX, invDirY, invDirZ;
	let tx0, tx1, ty0, ty1, tz0, tz1;

	// Translate the ray to the center of the octant.
	origin.sub(octree.getCenter(v)).add(halfDimensions);

	// Reset all flags.
	flags.value = 0;

	// Handle rays with negative directions.
	if(direction.x < 0.0) {

		origin.x = dimensions.x - origin.x;
		direction.x = -direction.x;
		flags.value |= 4;

	}

	if(direction.y < 0.0) {

		origin.y = dimensions.y - origin.y;
		direction.y = -direction.y;
		flags.value |= 2;

	}

	if(direction.z < 0.0) {

		origin.z = dimensions.z - origin.z;
		direction.z = -direction.z;
		flags.value |= 1;

	}

	// Improve IEEE double stability.
	invDirX = 1.0 / direction.x;
	invDirY = 1.0 / direction.y;
	invDirZ = 1.0 / direction.z;

	// Project the ray to the octant's boundaries.
	tx0 = (min.x - origin.x) * invDirX;
	tx1 = (max.x - origin.x) * invDirX;
	ty0 = (min.y - origin.y) * invDirY;
	ty1 = (max.y - origin.y) * invDirY;
	tz0 = (min.z - origin.z) * invDirZ;
	tz1 = (max.z - origin.z) * invDirZ;

	// Check if the ray hits the octree.
	return (Math.max(Math.max(tx0, ty0), tz0) < Math.min(Math.min(tx1, ty1), tz1)) ?
		[tx0, ty0, tz0, tx1, ty1, tz1] : null;

}

/**
 * A 3D box.
 *
 * @type {Box3}
 * @private
 */

const b$1 = new Box3();

/**
 * A 3D box.
 *
 * @type {Box3}
 * @private
 */

const b$2 = new Box3();

/**
 * A point.
 *
 * @type {Vector3}
 * @private
 */

const p = new Vector3();

/**
 * An octree iterator.
 *
 * @implements {Iterator}
 * @implements {Iterable}
 */

class OctreeIterator {

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

/**
 * Raycasting flags.
 *
 * @type {Flags}
 */

const flags = new Flags();

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v$1 = new Vector3();

/**
 * A line.
 *
 * @type {Line3}
 * @private
 */

const l = new Line3();

/**
 * A ray.
 *
 * @type {Ray}
 * @private
 */

const r$1 = new Ray();

/**
 * Recursively traverses the given octant to find (pseudo) leaf octants that
 * intersect with the given ray.
 *
 * @private
 * @param {Octree} octree - The octree.
 * @param {Octant} octant - The current octant.
 * @param {Number} keyX - The X-coordinate of the current octant key.
 * @param {Number} keyY - The Y-coordinate of the current octant key.
 * @param {Number} keyZ - The Z-coordinate of the current octant key.
 * @param {Number} level - The current depth.
 * @param {Number} tx0 - Ray projection parameter.
 * @param {Number} ty0 - Ray projection parameter.
 * @param {Number} tz0 - Ray projection parameter.
 * @param {Number} tx1 - Ray projection parameter.
 * @param {Number} ty1 - Ray projection parameter.
 * @param {Number} tz1 - Ray projection parameter.
 * @param {Octant[]} intersects - An array to be filled with the intersecting octants.
 */

function raycastOctant(octree, octant, keyX, keyY, keyZ, level, tx0, ty0, tz0, tx1, ty1, tz1, intersects) {

	if(tx1 >= 0.0 && ty1 >= 0.0 && tz1 >= 0.0) {

		const keyDesign = octree.getKeyDesign();

		if(level === 0 || octant.data !== null) {

			const cellSize = octree.getCellSize(level);
			const octantWrapper = new OctantWrapper(octant);
			octantWrapper.id.set(level, keyDesign.packKey(v$1.set(keyX, keyY, keyZ)));
			octantWrapper.min.copy(v$1).multiplyScalar(cellSize).add(octree.min);
			octantWrapper.max.copy(octantWrapper.min).addScalar(cellSize);

			intersects.push(octantWrapper);

		} else if(octant.children > 0) {

			// Look at the next lower LOD.
			const grid = octree.getGrid(--level);
			const children = octant.children;

			// Compute means.
			const txm = 0.5 * (tx0 + tx1);
			const tym = 0.5 * (ty0 + ty1);
			const tzm = 0.5 * (tz0 + tz1);

			let currentOctant = findEntryOctant(tx0, ty0, tz0, txm, tym, tzm);
			let offset, childExists, i;

			// Translate the key coordinates to the next lower LOD.
			keyX <<= 1; keyY <<= 1; keyZ <<= 1;

			do {

				i = flags.value ^ currentOctant;
				childExists = ((children & (1 << i)) !== 0);
				offset = layout[i];

				switch(currentOctant) {

					case 0: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, ty0, tz0, txm, tym, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, tym, tzm);
						break;

					}

					case 1: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, ty0, tzm, txm, tym, tz1, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, tym, tz1);
						break;

					}

					case 2: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, tym, tz0, txm, ty1, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, ty1, tzm);
						break;

					}

					case 3: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, tx0, tym, tzm, txm, ty1, tz1, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, ty1, tz1);
						break;

					}

					case 4: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, ty0, tz0, tx1, tym, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, tx1, tym, tzm);
						break;

					}

					case 5: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, ty0, tzm, tx1, tym, tz1, intersects);

						}

						currentOctant = findNextOctant(currentOctant, tx1, tym, tz1);
						break;

					}

					case 6: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, tym, tz0, tx1, ty1, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, tx1, ty1, tzm);
						break;

					}

					case 7: {

						if(childExists) {

							v$1.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v$1)), v$1.x, v$1.y, v$1.z, level, txm, tym, tzm, tx1, ty1, tz1, intersects);

						}

						// Far top right octant. No other octants can be reached from here.
						currentOctant = 8;
						break;

					}

				}

			} while(currentOctant < 8);

		}

	}

}

/**
 * A raycaster for linear octrees.
 *
 * This raycaster is a specialized hybrid that uses a voxel traversal algorithm
 * to iterate over the octants of the highest LOD grid and an octree traversal
 * algorithm to raycast the identified subtrees.
 *
 * The voxel traversal implementation is a 3D supercover variant of the Digital
 * Differential Analyzer (DDA) line algorithm and is similar to the Bresenham
 * algorithm. The octree traversal algorithm uses octant child existence
 * information to skip empty space and avoids hash table lookup misses.
 *
 * References:
 *  "Voxel Traversal along a 3D Line"
 *  by D. Cohen (1994)
 *  "An Efficient Parametric Algorithm for Octree Traversal"
 *  by J. Revelles et al. (2000)
 */

class OctreeRaycaster {

	/**
	 * Finds (pseudo) leaf octants that intersect with the given ray.
	 *
	 * @param {LinearOctree} octree - An octree.
	 * @param {Ray} ray - A ray.
	 * @param {Octant[]} [intersects] - An optional target list to be filled with the intersecting octants.
	 * @return {Octant[]} The intersecting octants. Sorted by distance, closest first.
	 */

	static intersectOctree(octree, ray, intersects = []) {

		const level = octree.getDepth();
		const grid = octree.getGrid(level);
		const cellSize = octree.getCellSize(level);
		const keyDesign = octree.getKeyDesign();
		const subtree = new OctantWrapper();

		const keyCoordinates0 = l.start;
		const keyCoordinates1 = l.end;

		// Find the point at which the ray enters the grid.
		const a = !octree.containsPoint(r$1.copy(ray).origin) ?
			r$1.intersectBox(octree, r$1.origin) :
			r$1.origin;

		let parameters;
		let key, octant;
		let t, b, n;

		let dx, dy, dz;
		let ax, ay, az, bx, by, bz;
		let sx, sy, sz, exy, exz, ezy;

		subtree.id.level = level;

		// Check if the ray hits the octree.
		if(a !== null) {

			// Phase 1: Initialization.

			// Find the ending point.
			t = cellSize << 1;
			b = r$1.at(t, v$1);

			// Calculate the starting and ending cell coordinates.
			octree.calculateKeyCoordinates(a, level, keyCoordinates0);
			octree.calculateKeyCoordinates(b, level, keyCoordinates1);

			// Calculate the key coordinate vector from start to end.
			dx = keyCoordinates1.x - keyCoordinates0.x;
			dy = keyCoordinates1.y - keyCoordinates0.y;
			dz = keyCoordinates1.z - keyCoordinates0.z;

			// Prepare step sizes and project the line onto the XY-, XZ- and ZY-plane.
			sx = Math.sign(dx); sy = Math.sign(dy); sz = Math.sign(dz);
			ax = Math.abs(dx); ay = Math.abs(dy); az = Math.abs(dz);
			bx = 2 * ax; by = 2 * ay; bz = 2 * az;
			exy = ay - ax; exz = az - ax; ezy = ay - az;

			// Phase 2: Incremental Traversal.
			for(n = ax + ay + az; n > 0; --n) {

				key = keyDesign.packKey(keyCoordinates0);

				// Check if this cell is populated.
				if(grid.has(key)) {

					octant = grid.get(key);

					// Setup a pseudo octree.
					subtree.id.key = key;
					subtree.octant = octant;
					subtree.min.copy(keyCoordinates0);
					subtree.min.multiplyScalar(cellSize);
					subtree.min.add(octree.min);
					subtree.max.copy(subtree.min).addScalar(cellSize);

					if(octant.data === null) {

						// Raycast the subtree and calculate the initial parameters.
						parameters = intersectOctree(subtree, ray, flags);

						// Find the intersecting children.
						raycastOctant(
							octree, subtree.octant,
							keyCoordinates0.x, keyCoordinates0.y, keyCoordinates0.z,
							octree.getDepth(), ...parameters, intersects
						);

					} else {

						// The octant contains data. No need to look deeper.
						intersects.push(subtree.clone());

					}

				}

				if(exy < 0) {

					if(exz < 0) {

						keyCoordinates0.x += sx;
						exy += by; exz += bz;

					} else {

						keyCoordinates0.z += sz;
						exz -= bx; ezy += by;

					}

				} else if(ezy < 0) {

					keyCoordinates0.z += sz;
					exz -= bx; ezy += by;

				} else {

					keyCoordinates0.y += sy;
					exy -= bx; ezy -= bz;

				}

			}

		}

		return intersects;

	}

}

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v$2 = new Vector3();

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

				v$2.set(
					keyX + offset[0],
					keyY + offset[1],
					keyZ + offset[2]
				);

				key = keyDesign.packKey(v$2);

				// Fetch the child and remove it from the grid.
				child = grid.get(key);
				grid.delete(key);

				removeChildren(octree, child, v$2.x, v$2.y, v$2.z, level);

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
		v$2.set(keyX >>> 1, keyY >>> 1, keyZ >>> 1);

		// The resulting coordinates identify the parent octant.
		key = octree.getKeyDesign().packKey(v$2);
		parent = grid.get(key);

		// Unset the existence flag of the deleted child.
		parent.children &= ~(1 << i);

		// Check if there are any children left.
		if(parent.children === 0) {

			// Remove the empty parent and recur.
			grid.delete(key);
			prune(octree, v$2.x, v$2.y, v$2.z, level);

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

class Octree {

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
		v$2.subVectors(position, this.min);

		target.set(
			Math.trunc(v$2.x / cellSize),
			Math.trunc(v$2.y / cellSize),
			Math.trunc(v$2.z / cellSize)
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

				this.calculateKeyCoordinates(point, level, v$2);
				result = grid.get(keyDesign.packKey(v$2));

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
				keyDesign.unpackKey(key, v$2);
				keyX = v$2.x; keyY = v$2.y; keyZ = v$2.z;

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

export { BinaryUtils, IntermediateOctant, KeyDesign, KeyIterator, Octant, OctantId, OctantWrapper, Octree, OctreeIterator, OctreeRaycaster };
