import test from "ava";
import { Box3, Vector3 } from "three";
import { OctantWrapper } from "linear-octree";

const box = new Box3(
	new Vector3(-1, -1, -1),
	new Vector3(1, 1, 1)
);

test("can be instantiated", t => {

	const object = new OctantWrapper();
	t.truthy(object);

});

test("can compute its center", t => {

	const octantWrapper = new OctantWrapper(box.min, box.max);
	octantWrapper.min.copy(box.min);
	octantWrapper.max.copy(box.max);

	t.true(
		octantWrapper.getCenter(new Vector3()).equals(new Vector3(0, 0, 0)),
		"should be able to compute its center"
	);

});

test("can compute its dimensions", t => {

	const octantWrapper = new OctantWrapper(box.min, box.max);
	octantWrapper.min.copy(box.min);
	octantWrapper.max.copy(box.max);

	t.true(
		octantWrapper.getDimensions(new Vector3()).equals(new Vector3(2, 2, 2)),
		"should be able to compute its dimensions"
	);

});

test("can check if it contains a point", t => {

	const octantWrapper = new OctantWrapper(box.min, box.max);
	octantWrapper.min.copy(box.min);
	octantWrapper.max.copy(box.max);

	t.true(
		octantWrapper.containsPoint(new Vector3(0, 0, 0)),
		"should determine that the point lies inside"
	);

	t.false(
		octantWrapper.containsPoint(new Vector3(2, 0, 0)),
		"should determine that the point lies outside"
	);

});
