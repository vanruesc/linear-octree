import test from "ava";
import { Box3, Vector3 } from "three";
import { KeyDesign, Octree } from "linear-octree";

const bounds = new Box3(
	new Vector3(-1, -1, -1),
	new Vector3(1, 1, 1)
);

const p = new Vector3();
const v = new Vector3();
const keyCoordinates = new Vector3();

test("can be instantiated", t => {

	const keyDesign = new KeyDesign(1, 1, 1);
	const octree = new Octree(bounds, keyDesign);
	t.truthy(octree);

});

test("can return its depth", t => {

	const keyDesign = new KeyDesign(32, 0, 21);
	const octree = new Octree(bounds, keyDesign);
	const levels = Math.max(keyDesign.x, keyDesign.y, keyDesign.z);
	t.is(octree.getDepth(), levels - 1, "should return the tree depth");
	t.is(octree.getLevels(), levels, "should return the levels");

});

test("correctly calculates key coordinates", t => {

	const keyDesign = new KeyDesign(21, 11, 21);
	const octree = new Octree(bounds, keyDesign);

	p.set(1, 1, 1);
	keyDesign.getMaxKeyCoordinates(v);
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	let key = keyDesign.packKey(keyCoordinates.x, keyCoordinates.y, keyCoordinates.z);

	t.deepEqual(keyCoordinates, v, "should return the max key coordinates");
	t.is(key, keyDesign.packKey(v.x, v.y, v.z), "should return the last key");

	p.set(0, 0, 0);
	v.divideScalar(2).round();
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	key = keyDesign.packKey(keyCoordinates.x, keyCoordinates.y, keyCoordinates.z);

	t.deepEqual(keyCoordinates, v, "should return the center (+0.5) key coordinates");
	t.is(key, keyDesign.packKey(v.x, v.y, v.z), "should return the center (+0.5) key");

});

test("can set and get data", t => {

	const keyDesign = new KeyDesign(2, 2, 2);
	const octree = new Octree(bounds, keyDesign);
	const data = "text";

	p.set(0.5, 0, 0);
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	octree.set(keyCoordinates, 0, data);

	t.is(octree.get(keyCoordinates, 0), data, "should return the data");

});

test("can delete data", t => {

	const keyDesign = new KeyDesign(2, 2, 2);
	const octree = new Octree(bounds, keyDesign);
	const data = "text";

	p.set(0.5, 0, 0);
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	octree.set(keyCoordinates, 0, data);
	octree.delete(keyCoordinates, 0);

	t.not(octree.get(keyCoordinates, 0), data, "should no longer have the data");

});

test("can get an octant by point", t => {

	const keyDesign = new KeyDesign(2, 2, 2);
	const octree = new Octree(bounds, keyDesign);
	const data = "text";

	p.set(0, 0, 0);
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	octree.set(keyCoordinates, 0, null);

	p.set(1, 0.1, -0.7);
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	octree.set(keyCoordinates, 0, data);

	const octant = octree.getOctantByPoint(p, 0);

	t.is(octant.data, data, "should find the right octant");

});

test("finds nodes by depth level", t => {

	const keyDesign = new KeyDesign(2, 2, 2);
	const octree = new Octree(bounds, keyDesign);
	octree.set(keyCoordinates.set(0, 0, 0), 0, "test");

	const nodes = octree.findNodesByLevel(0);

	t.true(Array.isArray(nodes), "should return a list");
	t.is(nodes.length, 1, "should find all nodes");

});
