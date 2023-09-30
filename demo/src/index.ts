import {
	Box3,
	Box3Helper,
	Color,
	FogExp2,
	PerspectiveCamera,
	Scene,
	Vector3,
	WebGLRenderer
} from "three";

import { Pane } from "tweakpane";
import { OctreeHelper } from "sparse-octree";
import { ControlMode, SpatialControls } from "spatial-controls";
import { calculateVerticalFoV, OctreeRaycaster, FrustumCuller } from "./utils/index.js";
import { KeyDesign, Octree } from "linear-octree";

window.addEventListener("load", () => {

	document.querySelector(".loading")?.classList.add("hidden");

	// Renderer

	const renderer = new WebGLRenderer({
		powerPreference: "high-performance",
		antialias: true,
		stencil: false,
		depth: true
	});

	renderer.debug.checkShaderErrors = (window.location.hostname === "localhost");
	renderer.setClearColor(0x000000, 0);

	const container = document.querySelector(".viewport") as HTMLElement;
	container.append(renderer.domElement);

	// Scene

	const scene = new Scene();
	scene.fog = new FogExp2(0x0d0d0d, 0.025);
	renderer.setClearColor(scene.fog.color);

	// Camera & Controls

	const camera = new PerspectiveCamera();
	const { position, quaternion } = camera;
	const controls = new SpatialControls(position, quaternion, renderer.domElement);
	const settings = controls.settings;
	settings.general.mode = ControlMode.THIRD_PERSON;
	settings.zoom.setRange(1e-6, 60);
	settings.rotation.sensitivity = 2.2;
	settings.rotation.damping = 0.05;
	settings.translation.sensitivity = 0.25;
	settings.translation.damping = 0.1;
	settings.zoom.sensitivity = 1;
	settings.zoom.damping = 0.1;
	controls.position.set(5, 2, 3);

	camera.updateMatrixWorld(); // Update for the first raycast operation.

	// Octree

	const keyDesign = new KeyDesign(3, 3, 3);
	const bounds = new Box3();
	bounds.min.set(-1, -1, -1);
	bounds.max.set(1, 1, 1);
	// Alternative:
	// const cellSize = new Vector3(0.25, 0.25, 0.25);
	// const bounds = keyDesign.calculateBounds(cellSize, new Box3());

	const octree = new Octree<number>(bounds, keyDesign);
	console.log(octree);

	const box = new Box3();
	const keyCoordinates = new Vector3();

	keyDesign.getMinKeyCoordinates(box.min);
	keyDesign.getMaxKeyCoordinates(box.max);

	console.time("Octree creation");

	for(const key of keyDesign.keyRange(box.min, box.max)) {

		octree.set(keyDesign.unpackKey(key, keyCoordinates), 0, Math.random());

	}

	console.timeEnd("Octree creation");

	// Octree Helper

	console.time("Octree helper");

	const octreeHelper = new OctreeHelper(octree);
	octreeHelper.visible = true;

	console.timeEnd("Octree helper");
	console.log(octreeHelper);

	scene.add(octreeHelper);

	// Octree Bounds Helper

	const boundsHelper = new Box3Helper(bounds, new Color(0xffffff));
	boundsHelper.visible = octreeHelper.visible;
	scene.add(boundsHelper);

	// Raycasting

	const octreeRaycaster = new OctreeRaycaster(octree, camera, renderer.domElement);
	scene.add(octreeRaycaster.getMesh());

	// Frustum culling

	const frustumCuller = new FrustumCuller(octree);
	scene.add(frustumCuller.getCameraHelper());
	scene.add(frustumCuller.getMesh());

	// Settings

	const pane = new Pane({ container: container.querySelector(".tp") as HTMLElement });

	octreeRaycaster.registerOptions(pane);
	frustumCuller.registerOptions(pane);

	const levels = octreeHelper.children.length;
	const params = {
		"level mask": levels + 1
	};

	const folder = pane.addFolder({ title: "Octree Helper" });
	folder.addBinding(octreeHelper, "visible").on("change", (e) => {

		boundsHelper.visible = (params["level mask"] >= levels && octreeHelper.visible);

	});

	folder.addBinding(params, "level mask", { min: 0, max: levels + 1, step: 1 })
		.on("change", (e) => {

			const mask = params["level mask"];

			for(let i = 0, l = levels; i < l; ++i) {

				octreeHelper.children[i].visible = (mask > levels || mask === i);

			}

			boundsHelper.visible = (mask >= levels && octreeHelper.visible);

		});

	// Resize Handler

	function onResize() {

		const width = container.clientWidth, height = container.clientHeight;
		camera.aspect = width / height;
		camera.fov = calculateVerticalFoV(90, Math.max(camera.aspect, 16 / 9));
		camera.updateProjectionMatrix();
		renderer.setSize(width, height);

	}

	window.addEventListener("resize", onResize);
	onResize();

	// Render Loop

	requestAnimationFrame(function render(timestamp: number): void {

		controls.update(timestamp);
		renderer.render(scene, camera);
		requestAnimationFrame(render);

	});

});
