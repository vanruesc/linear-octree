import test from "ava";
import { Box3, Vector3 } from "three";
import { KeyDesign, Octant, Octree } from "../../dist/linear-octree.js";

const bounds = new Box3(
	new Vector3(-1, -1, -1),
	new Vector3(1, 1, 1)
);

const keyCoordinates = new Vector3();
const keyDesign = new KeyDesign(4, 4, 4);
const levels = Math.max(keyDesign.x, keyDesign.y, keyDesign.z);

test("can be instantiated", t => {

	const octree = new Octree(bounds.min, bounds.max, keyDesign);
	t.pass();

});

test("can return its depth", t => {

	const octree = new Octree(bounds.min, bounds.max, keyDesign);

	t.is(octree.getDepth(), levels - 1, "should return the tree depth");

});

test("finds nodes by depth level", t => {

	const octree = new Octree(bounds.min, bounds.max, keyDesign);
	octree.set(keyCoordinates.set(0, 0, 0), 0, "test");

	const nodes = octree.findNodesByLevel(0);

	t.true(Array.isArray(nodes), "should return a list");
	t.is(nodes.length, 1, "should find all nodes");

});
