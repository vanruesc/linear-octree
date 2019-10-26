import {
	BufferAttribute,
	BufferGeometry,
	Box3,
	FogExp2,
	Object3D,
	PerspectiveCamera,
	Points,
	PointsMaterial,
	Vector3
} from "three";

import { DeltaControls } from "delta-controls";
import { OctreeHelper } from "octree-helper";
import { Demo } from "three-demo";

/**
 * An octree demo application.
 */

export class OctreeDemo extends Demo {

	/**
	 * Constructs a new demo.
	 */

	constructor() {

		super("octree");

		/**
		 * An octree helper.
		 *
		 * @type {OctreeHelper}
		 * @private
		 */

		this.octreeHelper = null;

	}

	/**
	 * Creates the scene.
	 */

	initialize() {

		const scene = this.scene;
		const renderer = this.renderer;

		// Camera.

		const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.3, 2000);
		camera.position.set(10, 6, 10);
		this.camera = camera;

		// Controls.

		const controls = new DeltaControls(
			camera.position, camera.quaternion, renderer.domElement
		);

		controls.settings.pointer.lock = false;
		controls.settings.zoom.maxDistance = 60.0;
		controls.settings.sensitivity.translation = 10.0;
		controls.settings.sensitivity.zoom = 1.0;
		controls.lookAt(scene.position);
		this.controls = controls;

		// Fog.

		scene.fog = new FogExp2(0x0d0d0d, 0.025);
		renderer.setClearColor(scene.fog.color);

		// Octree.

		// Octree Helper.

		/* const octreeHelper = (function createOctreeHelper(octree) {

			const t0 = performance.now();
			const octreeHelper = new OctreeHelper(octree);
			octreeHelper.visible = false;

			console.log("OctreeHelper:", octreeHelper, "created in", (performance.now() - t0).toFixed(2) + " ms");

			return octreeHelper;

		}(octree));

		this.octreeHelper = octreeHelper;
		scene.add(octreeHelper); */

	}

	/**
	 * Renders this demo.
	 *
	 * @param {Number} delta - The time since the last frame in seconds.
	 */

	render(delta) {

		this.controls.update(delta);

		super.render(delta);

	}

	/**
	 * Registers configuration options.
	 *
	 * @param {GUI} menu - A menu.
	 */

	registerOptions(menu) {

		const points = this.points;
		const octreeHelper = this.octreeHelper;

		this.raycaster.registerOptions(menu);
		this.frustumCuller.registerOptions(menu);

		const params = {
			// "level mask": octreeHelper.children.length
		};

		/* let folder = menu.addFolder("Octree Helper");
		folder.add(octreeHelper, "visible");

		folder.add(params, "level mask").min(0).max(octreeHelper.children.length).step(1).onChange(() => {

			let i, l;

			for(i = 0, l = octreeHelper.children.length; i < l; ++i) {

				octreeHelper.children[i].visible = (params["level mask"] === octreeHelper.children.length || i === params["level mask"]);

			}

		});

		folder.open(); */

	}

}
