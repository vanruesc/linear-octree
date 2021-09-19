import test from "ava";
import { Box3, Raycaster, Vector3 } from "three";
import { KeyDesign, Octant, Octree } from "../../dist/linear-octree.js";

const bounds = new Box3(
	new Vector3(-1, -1, -1),
	new Vector3(1, 1, 1)
);

const position = new Vector3();
const keyCoordinates = new Vector3();
const keyDesign = new KeyDesign(1, 1, 1);

test("can find intersecting octants", t => {

	const octree = new Octree(bounds, keyDesign);
	const raycaster = new Raycaster(
		new Vector3(0, 0, 2),
		new Vector3(0, 0, -1)
	);

	position.set(0, 0, 0);
	octree.calculateKeyCoordinates(position, 0, keyCoordinates);
	octree.set(keyCoordinates, 0, "test");

	const result = octree.getIntersectingNodes(raycaster);

	t.is(result.length, 1, "should return one intersecting octant");

});
