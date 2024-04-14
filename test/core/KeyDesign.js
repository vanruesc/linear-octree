import test from "ava";
import { Binary, KeyDesign } from "linear-octree";
import { Vector3 } from "three";

// Enables verbose logging.
const DEBUG = false;

test("(experiment) concatenating 32bit integers", t => {

	const hi = 0b00000000000111111111111111111111;
	const lo = 0b11111111111111111111111111111111;

	const i = (hi * Math.pow(2, 32)) + lo;

	if(DEBUG) {

		console.log("i53, left-padded to 64:\n", Binary.toString(i), i, "\n");

	}

	t.is(hi, Math.pow(2, KeyDesign.HI_BITS) - 1);
	t.is(lo, Math.pow(2, KeyDesign.LO_BITS) - 1);
	t.is(i, Math.pow(2, KeyDesign.BITS) - 1);

});

test("can be instantiated", t => {

	const object = new KeyDesign();
	t.truthy(object);

});

test("extracting specific BITS from a 53bit integer", t => {

	const xBits = 20;
	const yBits = 15;
	const zBits = 17;

	const keyDesign = new KeyDesign(xBits, yBits, zBits);
	const keyCoordinates = new Vector3();

	const key = 0b0000000000011111111111111111111111111111111111111111111111111111;
	keyDesign.unpackKey(key, keyCoordinates);

	if(DEBUG) {

		console.log("Input:", Binary.toString(key, KeyDesign.BITS), key, "\n");
		console.log(keyDesign.toString(), "\n");

	}

	t.is(key, Math.pow(2, KeyDesign.HI_BITS + KeyDesign.LO_BITS) - 1);
	t.is(keyCoordinates.x, Math.pow(2, xBits) - 1, "X");
	t.is(keyCoordinates.y, (Math.pow(2, yBits) - 1), "Y");
	t.is(keyCoordinates.z, (Math.pow(2, zBits) - 1), "Z");

});

test("storing values in specific bit slots of a 53bit integer", t => {

	const xBits = 21;
	const yBits = 11;
	const zBits = 21;

	const keyDesign = new KeyDesign(xBits, yBits, zBits);
	const keyCoordinates = new Vector3();

	const x = 42;
	const y = 23;
	const z = 11;

	const key = keyDesign.packKey(x, y, z);
	keyDesign.unpackKey(key, keyCoordinates);

	if(DEBUG) {

		console.log("Input X:", Binary.toString(x), x);
		console.log("Input Y:", Binary.toString(y), y);
		console.log("Input Z:", Binary.toString(z), z);
		console.log("Key (i53):", Binary.toString(key, KeyDesign.BITS), key, "\n");
		console.log(keyDesign.toString(), "\n");

	}

	const rangeX = Math.pow(2, xBits);
	const rangeXY = Math.pow(2, xBits + yBits);

	t.is(key, z * rangeXY + y * rangeX + x, "Incorrect key");
	t.is(keyCoordinates.x, x, "X");
	t.is(keyCoordinates.y, y, "Y");
	t.is(keyCoordinates.z, z, "Z");

});

test("handles bit allotment edge cases", t => {

	const keyDesign = new KeyDesign(0, 1, 0);
	const keyCoordinates = new Vector3();

	const x = 0;
	const y = 1;
	const z = 0;

	const key = keyDesign.packKey(x, y, z);
	keyDesign.unpackKey(key, keyCoordinates);

	if(DEBUG) {

		console.log("Input X:", Binary.toString(x), x);
		console.log("Input Y:", Binary.toString(y), y);
		console.log("Input Z:", Binary.toString(z), z);
		console.log("Key (i53):", Binary.toString(key, KeyDesign.BITS), key, "\n");
		console.log(keyDesign.toString());

	}

	t.is(keyCoordinates.x, x, "X");
	t.is(keyCoordinates.y, y, "Y");
	t.is(keyCoordinates.z, z, "Z");

});

test("can unpack with zero bits", t => {

	const keyDesign = new KeyDesign(0, 0, 0);
	t.notThrows(() => keyDesign.unpackKey(0, new Vector3()));

});

test("blocks bad values", t => {

	const keyDesign = new KeyDesign(1, 1, 1);

	t.notThrows(() => keyDesign.set(0, 0, 0));
	t.notThrows(() => keyDesign.set(32, 0, 0));
	t.throws(() => keyDesign.set(33, 0, 0));
	t.throws(() => keyDesign.set(32, 32, 32));

	keyDesign.set(0, 0, 0);

	t.notThrows(() => keyDesign.packKey(0, 0, 0));
	t.throws(() => keyDesign.packKey(1, 0, 0));

});
