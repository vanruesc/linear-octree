import {
	Camera,
	Group,
	Mesh,
	MeshBasicMaterial,
	Object3D,
	Points,
	PointsMaterial,
	Raycaster,
	SphereBufferGeometry,
	Vector2
} from "three";

import { GUI } from "dat.gui";
import { Octree } from "../../../src";

const pointer = new Vector2();

/**
 * An octree raycaster.
 *
 * @param T - The type of the octree data.
 */

export class OctreeRaycaster<T> extends Raycaster implements EventListenerObject {

	/**
	 * An octree.
	 */

	private octree: Octree<T>;

	/**
	 * Indicates whether this raycaster is active.
	 */

	private enabled: boolean;

	/**
	 * A delta time.
	 */

	private delta: string;

	/**
	 * A mesh that indicates the current point of intersection.
	 */

	private cursor: Mesh;

	/**
	 * Constructs a new octree raycaster.
	 *
	 * @param octree - An octree.
	 * @param camera - A camera.
	 * @param group - A group of points.
	 */

	constructor(octree: Octree<T>, camera: Camera) {

		super();

		this.params.Points.threshold = 1e-1;

		this.octree = octree;
		this.camera = camera;
		this.enabled = true;
		this.delta = "";

		this.cursor = new Mesh(
			new SphereBufferGeometry(0.2, 16, 16),
			new MeshBasicMaterial({
				transparent: true,
				color: 0x00ccff,
				opacity: 0.75
			})
		);

		this.cursor.visible = false;

	}

	/**
	 * Returns a mesh that represents the current point of intersection.
	 *
	 * @return The selected point.
	 */

	getCursor(): Mesh {

		return this.cursor;

	}

	/**
	 * Raycasts the octree.
	 *
	 * @param event - An event.
	 */

	raycast(event: PointerEvent): void {

		pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
		pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
		this.setFromCamera(pointer, this.camera);

		const t0 = performance.now();
		let x;

		this.cursor.visible = false;

		if(this.enabled) {

			const intersections = this.octree.getIntersectingNodes(this);

			if(intersections.length > 0) {

				x = intersections[0];

			}

		}

		this.delta = (performance.now() - t0).toFixed(2) + " ms";

		if(x !== undefined) {

			this.cursor.visible = true;
			x.getCenter(this.cursor.position);

		}

	}

	/**
	 * Registers configuration options.
	 *
	 * @param menu - A menu.
	 */

	registerOptions(menu: GUI): void {

		const folder = menu.addFolder("Raycasting");
		folder.add(this, "enabled");
		folder.add(this, "delta").listen();
		folder.open();

	}

	handleEvent(event: Event): void {

		switch(event.type) {

			case "pointermove":
				this.raycast(event as PointerEvent);
				break;

		}

	}

}
