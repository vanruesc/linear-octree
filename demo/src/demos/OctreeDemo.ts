import {
	Box3,
	Box3Helper,
	Color,
	FogExp2,
	Group,
	Object3D,
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
		this.octreeHelper = null;

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

		const keyDesign = new KeyDesign(2, 2, 2);
		const bounds = new Box3();
		bounds.min.set(-1, -1, -1);
		bounds.max.set(1, 1, 1);

		// Alternative:
		// const cellSize = new Vector3(1, 1, 1);
		// const bounds = keyDesign.calculateBounds(cellSize);

		console.log("Bounds:", bounds.min, bounds.max);

		const octree = new Octree<number>(bounds, keyDesign, 32);
		const keyCoordinates = new Vector3();
		const box = new Box3();

		box.min.set(0, 0, 0);
		box.max.set(
			keyDesign.rangeX - 1,
			keyDesign.rangeY - 1,
			keyDesign.rangeZ - 1
		);

		for(const key of keyDesign.keyRange(box.min, box.max)) {

			octree.set(keyDesign.unpackKey(key, keyCoordinates), 0, Math.random());

		}

		console.log(octree);

		// Octree Helper

		console.time("Octree helper");

		const octreeHelper = new OctreeHelper(octree);
		octreeHelper.visible = true;

		console.timeEnd("Octree helper");
		console.log(octreeHelper);

		this.octreeHelper = octreeHelper;
		scene.add(octreeHelper);

		// Octree Bounds Helper

		box.min.copy(octree.min);
		box.max.copy(octree.max);

		const boundsHelper = new Box3Helper(box, new Color(0xffffff));
		boundsHelper.visible = octreeHelper.visible;

		this.boundsHelper = boundsHelper;
		scene.add(boundsHelper);

		// Raycasting

		this.octreeRaycaster = new OctreeRaycaster(octree, camera);
		domElement.addEventListener("pointermove", this.octreeRaycaster, {
			passive: true
		});

		scene.add(this.octreeRaycaster.getCursor());

	}

	override update(deltaTime: number, timestamp: number): void {

		this.controls.update(timestamp);

	}

	override registerOptions(menu: GUI): void {

		const octreeHelper = this.octreeHelper;
		const boundsHelper = this.boundsHelper;

		this.octreeRaycaster.registerOptions(menu);

		const params = {
			"level mask": octreeHelper.children.length + 1
		};

		const folder = menu.addFolder("Octree Helper");
		folder.add(octreeHelper, "visible").onChange((value: boolean) => {

			boundsHelper.visible = (
				params["level mask"] >= octreeHelper.children.length &&
				value
			);

		});

		folder.add(params, "level mask", 0, octreeHelper.children.length + 1, 1)
			.onChange((value: number) => {

				for(let i = 0, l = octreeHelper.children.length; i < l; ++i) {

					octreeHelper.children[i].visible = (
						value > octreeHelper.children.length ||
						value === i
					);

				}

				boundsHelper.visible = (
					value >= octreeHelper.children.length &&
					octreeHelper.visible
				);

			});

		folder.open();

		if(window.innerWidth < 720) {

			menu.close();

		}

	}

	override dispose(): void {

		const domElement = this.renderer.domElement;
		domElement.removeEventListener("pointermove", this.octreeRaycaster);

	}

}
