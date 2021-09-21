import {
	Box3,
	Box3Helper,
	Color,
	FogExp2,
	PerspectiveCamera,
	Vector3
} from "three";

import { GUI } from "dat.gui";
import { OctreeHelper } from "sparse-octree";
import { ControlMode, SpatialControls } from "spatial-controls";
import { calculateVerticalFoV, Demo } from "three-demo";
import { OctreeRaycaster } from "../utils/OctreeRaycaster";
import { KeyDesign, Octree } from "../../../src";

/**
 * A point octree demo application.
 */

export class OctreeDemo extends Demo {

	/**
	 * The controls.
	 */

	controls: SpatialControls;

	/**
	 * An octree helper.
	 */

	private octreeHelper: OctreeHelper;

	/**
	 * An octree bounds helper.
	 */

	private boundsHelper: Box3Helper;

	/**
	 * An octree raycaster.
	 */

	private octreeRaycaster: OctreeRaycaster<number>;

	/**
	 * Constructs a new demo.
	 */

	constructor() {

		super("octree");

		this.controls = null;
		this.boundsHelper = null;
		this.octreeHelper = null;
		this.octreeRaycaster = null;

	}

	override initialize(): void {

		const scene = this.scene;
		const renderer = this.renderer;
		const domElement = renderer.domElement;

		// Camera

		const aspect = window.innerWidth / window.innerHeight;
		const vFoV = calculateVerticalFoV(90, Math.max(aspect, 16 / 9));
		const camera = new PerspectiveCamera(vFoV, aspect, 0.1, 1000);
		this.camera = camera;

		// Controls

		const { position, quaternion } = camera;
		const controls = new SpatialControls(position, quaternion, domElement);
		const settings = controls.settings;
		settings.general.setMode(ControlMode.THIRD_PERSON);
		settings.zoom.setRange(1e-6, 60.0);
		settings.rotation.setSensitivity(2.2);
		settings.rotation.setDamping(0.05);
		settings.translation.setDamping(0.1);
		settings.zoom.setSensitivity(1.0);
		settings.zoom.setDamping(0.1);
		controls.setPosition(5, 2, 3);
		this.controls = controls;

		camera.updateMatrixWorld();

		// Fog

		scene.fog = new FogExp2(0x0d0d0d, 0.025);
		renderer.setClearColor(scene.fog.color);

		// Octree

		const bounds = new Box3();
		bounds.min.set(-1, -1, -1);
		bounds.max.set(1, 1, 1);
		// Alternative:
		// const cellSize = new Vector3(1, 1, 1);
		// const bounds = keyDesign.calculateBounds(cellSize, new Box3());

		const keyDesign = new KeyDesign(3, 3, 3);
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

		this.octreeHelper = octreeHelper;
		scene.add(octreeHelper);

		// Octree Bounds Helper

		const boundsHelper = new Box3Helper(bounds, new Color(0xffffff));
		boundsHelper.visible = octreeHelper.visible;

		this.boundsHelper = boundsHelper;
		scene.add(boundsHelper);

		// Raycasting

		this.octreeRaycaster = new OctreeRaycaster(octree, camera, domElement);
		scene.add(this.octreeRaycaster.getMesh());

	}

	override update(deltaTime: number, timestamp: number): void {

		this.controls.update(timestamp);

	}

	override registerOptions(menu: GUI): void {

		this.octreeRaycaster.registerOptions(menu);

		const boundsHelper = this.boundsHelper;
		const octreeHelper = this.octreeHelper;

		const params = {
			"level mask": octreeHelper.children.length + 1
		};

		const folder = menu.addFolder("Octree Helper");
		folder.add(params, "level mask", 0, octreeHelper.children.length + 1, 1)
			.onChange(() => {

				const mask = params["level mask"];

				for(let i = 0, l = octreeHelper.children.length; i < l; ++i) {

					octreeHelper.children[i].visible = (
						mask > octreeHelper.children.length ||
						mask === i
					);

				}

				boundsHelper.visible = (
					mask >= octreeHelper.children.length &&
					octreeHelper.visible
				);

			});

		folder.open();

		if(window.innerWidth < 720) {

			menu.close();

		}

	}

	override dispose(): void {

		this.octreeRaycaster.dispose();

	}

}
