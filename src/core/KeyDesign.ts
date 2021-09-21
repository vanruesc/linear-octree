import { Box3, Vector3, Vector4 } from "three";
import { Binary } from "../utils/Binary";
import { KeyIterator } from "./KeyIterator";

const DWORD_BITS = 32;
const RANGE_DWORD = Math.pow(2, DWORD_BITS);

const BITS = 53;
const HI_BITS = 21;
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

export class KeyDesign {

	/**
	 * The bit allotments.
	 */

	private bits: Vector3;

	/**
	 * The key range.
	 */

	private range: Vector4;

	/**
	 * A bit mask for the X-coordinate. The first item holds the low bits and the
	 * second item holds the high bits.
	 */

	private maskX: number[];

	/**
	 * A bit mask for the Y-coordinate. The first item holds the low bits and the
	 * second item holds the high bits.
	 */

	private maskY: number[];

	/**
	 * A bit mask for the Z-coordinate. The first item holds the low bits and the
	 * second item holds the high bits.
	 */

	private maskZ: number[];

	/**
	 * Constructs a new key design.
	 *
	 * @param x - The amount of bits used for the X-coordinate. Cannot be zero.
	 * @param y - The amount of bits used for the Y-coordinate.
	 * @param z - The amount of bits used for the Z-coordinate.
	 */

	constructor(x = 8, y = x, z = x) {

		this.bits = new Vector3();
		this.range = new Vector4();

		this.maskX = [0, 0];
		this.maskY = [0, 0];
		this.maskZ = [0, 0];

		this.set(x, y, z);

	}

	/**
	 * The amount of bits reserved for the X-coordinate.
	 */

	get x(): number { return this.bits.x; }

	/**
	 * The amount of bits reserved for the Y-coordinate.
	 */

	get y(): number { return this.bits.y; }

	/**
	 * The amount of bits reserved for the Z-coordinate.
	 */

	get z(): number { return this.bits.z; }

	/**
	 * The amount of distinct integers that can be represented with X bits.
	 */

	get rangeX(): number { return this.range.x; }

	/**
	 * The amount of distinct integers that can be represented with Y bits.
	 */

	get rangeY(): number { return this.range.y; }

	/**
	 * The amount of distinct integers that can be represented with Z bits.
	 */

	get rangeZ(): number { return this.range.z; }

	/**
	 * The amount of distinct integers that can be represented with X + Y bits.
	 */

	get rangeXY(): number { return this.range.w; }

	/**
	 * Returns the lower key coordinate bounds.
	 *
	 * @return The minimum coordinates (always 0).
	 */

	getMinKeyCoordinates(target: Vector3): Vector3 {

		return target.set(0, 0, 0);

	}

	/**
	 * Returns the upper key coordinate bounds.
	 *
	 * @return The maximum coordinates.
	 */

	getMaxKeyCoordinates(target: Vector3): Vector3 {

		const range = this.range;

		return target.set(
			Math.max(range.x - 1, 0),
			Math.max(range.y - 1, 0),
			Math.max(range.z - 1, 0)
		);

	}

	/**
	 * Creates bit masks for the extraction of coordinates from keys.
	 */

	private updateBitMasks(): void {

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

		maskY[1] = (hiShiftY < DWORD_BITS) ? ~0 >>> hiShiftY : 0;
		maskY[1] = (maskY[1] & ~maskX[1]) >>> 0;
		maskY[0] = ~0 >>> Math.max(0, LO_BITS - (xBits + yBits));
		maskY[0] = (maskY[0] & ~maskX[0]) >>> 0;

		maskZ[1] = (hiShiftZ < DWORD_BITS) ? ~0 >>> hiShiftZ : 0;
		maskZ[1] = (maskZ[1] & ~maskY[1] & ~maskX[1]) >>> 0;
		maskZ[0] = ~0 >>> Math.max(0, LO_BITS - (xBits + yBits + zBits));
		maskZ[0] = (maskZ[0] & ~maskY[0] & ~maskX[0]) >>> 0;

	}

	/**
	 * Sets the bit distribution.
	 *
	 * @param x - The amount of bits used for the X-coordinate. Cannot be zero.
	 * @param y - The amount of bits used for the Y-coordinate.
	 * @param z - The amount of bits used for the Z-coordinate.
	 */

	private set(x: number, y: number, z: number): void {

		x = Math.max(x, 0);
		y = Math.max(y, 0);
		z = Math.max(z, 0);

		if(x === 0) {

			throw new Error("X must be greater than 0");

		}

		if(x + y + z > BITS) {

			throw new Error(`Cannot use more than ${BITS} bits total`);

		}

		if(x > DWORD_BITS || y > DWORD_BITS || z > DWORD_BITS) {

			// Bit operations only work on DWord Numbers.
			throw new Error(`Cannot use more than ${DWORD_BITS} bits per coordinate`);

		}

		this.bits.set(x, y, z);
		this.range.set(2 ** x, 2 ** y, 2 ** z, 2 ** (x + y));
		this.updateBitMasks();

	}

	/**
	 * Extracts the 3D coordinates from a given key.
	 *
	 * @param key - The key.
	 * @param target - A vector to store the result in.
	 * @return The extracted coordinates.
	 */

	unpackKey(key: number, target: Vector3): Vector3 {

		const maskX = this.maskX;
		const maskY = this.maskY;
		const maskZ = this.maskZ;

		// Split the QWord key in a high and a low DWord.
		const hi = Math.trunc(key / RANGE_DWORD);
		const lo = key % RANGE_DWORD;

		return target.set(
			(hi & maskX[1]) * RANGE_DWORD + ((lo & maskX[0]) >>> 0),
			((hi & maskY[1]) * RANGE_DWORD + ((lo & maskY[0]) >>> 0)) / this.rangeX,
			((hi & maskZ[1]) * RANGE_DWORD + ((lo & maskZ[0]) >>> 0)) / this.rangeXY
		);

	}

	/**
	 * Packs a 3D position into a unique key.
	 *
	 * @param position - A position.
	 * @return The key.
	 */

	packKey(position: Vector3): number {

		return position.z * this.rangeXY + position.y * this.rangeX + position.x;

	}

	/**
	 * Calculates the bounds that contain the domain of this key design.
	 *
	 * @param cellSize - The size of cells.
	 * @param target - A box to store the result in.
	 * @return The bounds.
	 */

	calculateBounds(cellSize: Vector3, target: Box3): Box3 {

		const range = this.range;
		const bounds = target;

		bounds.max.set(range.x, range.y, range.z);
		bounds.max.divideScalar(2).multiply(cellSize);
		bounds.min.copy(bounds.max).multiplyScalar(-1);

		return bounds;

	}

	/**
	 * Returns a new key range iterator.
	 *
	 * The key iterator will return all keys in the specified coordinate range,
	 * including those at min and max.
	 *
	 * @param min - The lower key index bounds (zero-based uint coordinates).
	 * @param max - The upper key index bounds (zero-based uint coordinates).
	 * @return An iterator.
	 */

	keyRange(min: Vector3, max: Vector3): KeyIterator {

		return new KeyIterator(this, min, max);

	}

	/**
	 * Converts the information of this key design into a string.
	 *
	 * @return The key design as a string.
	 */

	toString(): string {

		const maskX = this.maskX;
		const maskY = this.maskY;
		const maskZ = this.maskZ;

		return (

			"Key Design\n\n" +

			`X-Bits: ${this.x}\n` +
			`Y-Bits: ${this.y}\n` +
			`Z-Bits: ${this.z}\n\n` +

			Binary.toString(maskX[1], DWORD_BITS) + ` ${maskX[1]} (HI-Mask X)\n` +
			Binary.toString(maskX[0], DWORD_BITS) + ` ${maskX[0]} (LO-Mask X)\n\n` +

			Binary.toString(maskY[1], DWORD_BITS) + ` ${maskY[1]} (HI-Mask Y)\n` +
			Binary.toString(maskY[0], DWORD_BITS) + ` ${maskY[0]} (LO-Mask Y)\n\n` +

			Binary.toString(maskZ[1], DWORD_BITS) + ` ${maskZ[1]} (HI-Mask Z)\n` +
			Binary.toString(maskZ[0], DWORD_BITS) + ` ${maskZ[0]} (LO-Mask Z)\n`

		);

	}

	/**
	 * The total amount of available bits for safe integers.
	 *
	 * JavaScript uses IEEE 754 binary64 Doubles for Numbers and, as a result,
	 * only supports 53-bit integers natively as of ES2021.
	 *
	 * BigInt is not an option due to the following reasons:
	 *  - significant performance impact
	 *  - operations on BigInts are not constant time
	 *  - only supports signed integers
	 *  - doesn't support >>> operator
	 *
	 * For more information see: http://2ality.com/2012/04/number-encoding.html
	 */

	static get BITS(): number {

		return BITS;

	}

	/**
	 * The amount of available bits in the high DWord (21).
	 *
	 * In JavaScript, bit operations can only be applied to DWords (32-bit).
	 * All 53-bit keys must be split into a high and a low part for processing.
	 */

	static get HI_BITS(): number {

		return HI_BITS;

	}

	/**
	 * The amount of available bits in the low DWord (32).
	 *
	 * In JavaScript, bit operations can only be applied to DWords (32-bit).
	 * All 53-bit keys must be split into a high and a low part for processing.
	 */

	static get LO_BITS(): number {

		return LO_BITS;

	}

}
