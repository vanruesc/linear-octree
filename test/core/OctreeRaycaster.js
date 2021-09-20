import test from "ava";
import { Box3, Raycaster, Vector3 } from "three";
import { KeyDesign, Octree } from "../../dist/linear-octree.js";

const bounds = new Box3(
	new Vector3(-1, -1, -1),
	new Vector3(1, 1, 1)
);

const p = new Vector3();
const keyCoordinates = new Vector3();

test("can find intersecting octants", t => {

	const keyDesign = new KeyDesign(1, 1, 1);
	const octree = new Octree(bounds, keyDesign);
	const raycaster = new Raycaster(
		// new Vector3(0.5, 0.5, 2),
		// new Vector3(0, 0, -1)
		new Vector3(0.5, 0.5, 2),
		new Vector3(1e-6, 0, -1) // Perfectly aligned direction = miss
	);

	p.set(0.5, 0.5, 0.5);
	octree.calculateKeyCoordinates(p, 0, keyCoordinates);
	octree.set(keyCoordinates, 0, "test");

	const result = octree.getIntersectingNodes(raycaster);

	t.is(result.length, 1, "should return one intersecting octant");

});
