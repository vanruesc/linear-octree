import {
	BoxGeometry,
	Camera,
	InstancedMesh,
	Material,
	Matrix4,
	Mesh,
	MeshBasicMaterial,
	Quaternion,
	Raycaster,
	Vector2,
	Vector3
} from "three";

import { GUI } from "dat.gui";
import { Octree } from "../../../src";

const pointer = new Vector2();
const m = new Matrix4();
const s = new Vector3();
const p = new Vector3();
const q = new Quaternion();

/**
 * An octree raycaster.
 *
 * @param T - The type of the octree data.
 */

export class OctreeRaycaster<T> extends Raycaster
	implements EventListenerObject {

	/**
	 * An octree.
	 */

	octree: Octree<T>;

	/**
	 * A DOM element.
	 */

	private domElement: HTMLElement;

	/**
	 * Indicates whether this raycaster is active.
	 */

	private enabled: boolean;

	/**
	 * A delta time.
	 */

	private time: string;

	/**
	 * A mesh that represents intersecting octants.
	 */

	private mesh: InstancedMesh;

	/**
	 * Constructs a new octree raycaster.
	 *
	 * @param octree - An octree.
	 * @param camera - A camera.
	 * @param domElement - A DOM element.
	 */

	constructor(octree: Octree<T>, camera: Camera, domElement: HTMLElement) {

		super();

		this.params.Points.threshold = 1e-1;

		this.octree = octree;
		this.camera = camera;
		this.domElement = domElement;
		this.enabled = true;
		this.time = "";

		this.mesh = new InstancedMesh(
			new BoxGeometry(1, 1, 1),
			new MeshBasicMaterial({
				transparent: true,
				color: 0x00ccff,
				opacity: 0.75
			}),
			100
		);

		document.addEventListener("keyup", this, { passive: true });
		domElement.addEventListener("pointermove", this, { passive: true });

	}

	/**
	 * Returns a mesh that represents intersecting octants.
	 *
	 * @return The mesh.
	 */

	getMesh(): Mesh {

		return this.mesh;

	}

	/**
	 * Raycasts the octree.
	 *
	 * @param event - An event.
	 */

	raycast(event: PointerEvent): void {

		if(this.enabled) {

			pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
			pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
			this.setFromCamera(pointer, this.camera);

			const t0 = performance.now();
			const intersections = this.octree.getIntersectingNodes(this);
			this.time = (performance.now() - t0).toFixed(2) + " ms";

			const mesh = this.mesh;
			mesh.count = intersections.length;

			if(intersections.length > 0) {

				for(let i = 0, l = intersections.length; i < l; ++i) {

					const x = intersections[i];
					x.getCenter(p);
					x.getDimensions(s);
					mesh.setMatrixAt(i, m.compose(p, q, s));

				}

				mesh.instanceMatrix.needsUpdate = true;

			}

		}

	}

	/**
	 * Registers configuration options.
	 *
	 * @param menu - A menu.
	 */

	registerOptions(menu: GUI): void {

		const folder = menu.addFolder("Raycasting");
		folder.add(this, "enabled").name("enabled (press E)").listen();
		folder.add(this, "time").listen();
		folder.open();

	}

	handleKeyboardEvent(event: KeyboardEvent): void {

		if(event.key === "e") {

			this.enabled = !this.enabled;

		}

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "keyup":
				this.handleKeyboardEvent(event as KeyboardEvent);
				break;

			case "pointermove":
				this.raycast(event as PointerEvent);
				break;

		}

	}

	/**
	 * Deletes this raycaster.
	 */

	dispose(): void {

		const domElement = this.domElement;
		document.removeEventListener("keyup", this);
		domElement.removeEventListener("pointermove", this);

		const geometry = this.mesh.geometry;
		const material = this.mesh.material as Material;

		geometry.dispose();
		material.dispose();

	}

}
