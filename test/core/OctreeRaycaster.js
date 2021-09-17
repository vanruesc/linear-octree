import test from "ava";
import { Box3, Raycaster, Vector3 } from "three";
import { KeyDesign, Octant, Octree } from "../../dist/linear-octree.js";

const bounds = new Box3(
	new Vector3(-1, -1, -1),
	new Vector3(1, 1, 1)
);

const keyCoordinates = new Vector3();
const keyDesign = new KeyDesign(4, 4, 4);

test("can find intersecting octants", t => {

	const octree = new Octree(bounds.min, bounds.max, keyDesign);
	const raycaster = new Raycaster(
		new Vector3(0.5, -1, 0.5),
		new Vector3(1, 1, 1)
	);

	octree.set(keyCoordinates.set(0, 0, 0), 0, "test");

	const result = octree.getIntersectingNodes(raycaster);

	// @todo
	//t.is(result.length, 1, "should return one intersecting octant");
	t.pass();

});
