import test from "ava";
import { Octant } from "linear-octree";

test("can be instantiated", t => {

	const object = new Octant();
	t.truthy(object);

});
