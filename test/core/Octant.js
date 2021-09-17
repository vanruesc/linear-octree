import test from "ava";
import { Octant } from "../../dist/linear-octree.js";

test("can be instantiated", t => {

	const object = new Octant();
	t.pass();

});
