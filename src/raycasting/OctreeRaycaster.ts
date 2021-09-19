import {
	Box3,
	Line3,
	Ray,
	Vector3
} from "three";

import {
	layout,
	RaycastingFlags,
	Node,
	findEntryOctant,
	findNextOctant,
	intersectOctree
} from "sparse-octree";

import {
	IntermediateOctant,
	OctantWrapper,
	Octree
} from "../core";

const flags = new RaycastingFlags();
const bounds = new Box3();
const u = new Vector3();
const v = new Vector3();
const l = new Line3();
const r = new Ray();

/**
 * Recursively traverses the given octant to find (pseudo) leaf octants that
 * intersect with the given ray.
 *
 * @param octree - The octree.
 * @param octant - The current octant.
 * @param keyX - The X-coordinate of the current octant key.
 * @param keyY - The Y-coordinate of the current octant key.
 * @param keyZ - The Z-coordinate of the current octant key.
 * @param level - The current depth.
 * @param tx0 - A ray projection parameter.
 * @param ty0 - A ray projection parameter.
 * @param tz0 - A ray projection parameter.
 * @param tx1 - A ray projection parameter.
 * @param ty1 - A ray projection parameter.
 * @param tz1 - A ray projection parameter.
 * @param result - An array to be filled with the intersecting octants.
 */

function raycastOctant<T>(octree: Octree<T>, octant: IntermediateOctant<T>,
	keyX: number, keyY: number, keyZ: number, level: number,
	tx0: number, ty0: number, tz0: number, tx1: number, ty1: number, tz1: number,
	result: Node[]): void {

	if(tx1 >= 0.0 && ty1 >= 0.0 && tz1 >= 0.0) {

		const keyDesign = octree.getKeyDesign();

		if(octant.data !== null) {

			const cellSize = octree.getCellSize(level, u);
			const octantWrapper = new OctantWrapper(octant);
			octantWrapper.id.set(level, keyDesign.packKey(v.set(keyX, keyY, keyZ)));
			octantWrapper.min.copy(v).multiply(cellSize).add(octree.min);
			octantWrapper.max.copy(octantWrapper.min).add(cellSize);

			result.push(octantWrapper);

		}

		if(level > 0 && octant.children > 0) {

			// Go to the next lower LOD.
			const grid = octree.getGrid(--level);
			const children = octant.children;

			// Compute means.
			const txm = 0.5 * (tx0 + tx1);
			const tym = 0.5 * (ty0 + ty1);
			const tzm = 0.5 * (tz0 + tz1);

			let currentOctant = findEntryOctant(tx0, ty0, tz0, txm, tym, tzm);

			// Translate the key coordinates to the next lower LOD.
			keyX = keyX * 2; keyY = keyY * 2; keyZ = keyZ * 2;

			while(currentOctant < 8) {

				const i = flags.value ^ currentOctant;
				const childExists = ((children & (1 << i)) !== 0);
				const offset = layout[i];

				v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);

				let child: IntermediateOctant<T>;

				if(childExists) {

					child = grid.get(keyDesign.packKey(v)) as IntermediateOctant<T>;

				}

				switch(currentOctant) {

					case 0: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								tx0, ty0, tz0, txm, tym, tzm,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, txm, tym, tzm);
						break;

					}

					case 1: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								tx0, ty0, tzm, txm, tym, tz1,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, txm, tym, tz1);
						break;

					}

					case 2: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								tx0, tym, tz0, txm, ty1, tzm,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, txm, ty1, tzm);
						break;

					}

					case 3: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								tx0, tym, tzm, txm, ty1, tz1,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, txm, ty1, tz1);
						break;

					}

					case 4: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								txm, ty0, tz0, tx1, tym, tzm,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, tx1, tym, tzm);
						break;

					}

					case 5: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								txm, ty0, tzm, tx1, tym, tz1,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, tx1, tym, tz1);
						break;

					}

					case 6: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								txm, tym, tz0, tx1, ty1, tzm,
								result
							);

						}

						currentOctant = findNextOctant(currentOctant, tx1, ty1, tzm);
						break;

					}

					case 7: {

						if(childExists) {

							raycastOctant(
								octree, child,
								v.x, v.y, v.z, level,
								txm, tym, tzm, tx1, ty1, tz1,
								result
							);

						}

						// Far top right octant: no other octants can be reached from here.
						currentOctant = 8;
						break;

					}

				}

			}

		}

	}

}

/**
 * A raycaster for linear octrees.
 *
 * This raycaster is a specialized hybrid that uses a voxel traversal algorithm
 * to iterate over the octants of the highest LOD grid and an octree traversal
 * algorithm to raycast the identified subtrees.
 *
 * The voxel traversal implementation is a 3D supercover variant of the Digital
 * Differential Analyzer (DDA) line algorithm and is similar to the Bresenham
 * algorithm. The octree traversal algorithm uses octant child existence
 * information to skip empty space and avoids hash table lookup misses.
 *
 * References:
 *  "Voxel Traversal along a 3D Line"
 *  by D. Cohen (1994)
 *  "An Efficient Parametric Algorithm for Octree Traversal"
 *  by J. Revelles et al. (2000)
 */

export class OctreeRaycaster {

	/**
	 * Finds (pseudo) leaf octants that intersect with the given ray.
	 *
	 * @param octree - A linear octree.
	 * @param ray - A ray.
	 * @param intersects - An array to be filled with the intersecting octants.
	 * @return The intersecting octants. Sorted by distance, closest first.
	 */

	static intersectOctree<T>(octree: Octree<T>, ray: Ray): Node[] {

		const result: Node[] = [];

		const level = octree.getDepth();
		const grid = octree.getGrid(level);
		const cellSize = octree.getCellSize(level, u);
		const keyDesign = octree.getKeyDesign();
		const subtree = new OctantWrapper<T>();

		const keyCoordinates0 = l.start;
		const keyCoordinates1 = l.end;

		bounds.min.copy(octree.min);
		bounds.max.copy(octree.max);

		// Find the point at which the ray enters the grid.
		const a = !octree.containsPoint(r.copy(ray).origin) ?
			r.intersectBox(bounds, r.origin) : r.origin;

		subtree.id.level = level;

		// Check if the ray hits the octree.
		if(a !== null) {

			// Phase 1: Initialization.

			// Find the ending point.
			const t = Math.max(cellSize.x * 2, cellSize.y * 2, cellSize.z * 2);
			const b = r.at(t, v);

			// Calculate the starting and ending cell coordinates.
			octree.calculateKeyCoordinates(a, level, keyCoordinates0);
			octree.calculateKeyCoordinates(b, level, keyCoordinates1);

			// Calculate the key coordinate vector from start to end.
			const dx = keyCoordinates1.x - keyCoordinates0.x;
			const dy = keyCoordinates1.y - keyCoordinates0.y;
			const dz = keyCoordinates1.z - keyCoordinates0.z;

			// Prepare step sizes and project the line onto the XY-, XZ- and ZY-plane.
			const sx = Math.sign(dx), sy = Math.sign(dy), sz = Math.sign(dz);
			const ax = Math.abs(dx), ay = Math.abs(dy), az = Math.abs(dz);
			const bx = 2 * ax, by = 2 * ay, bz = 2 * az;
			let exy = ay - ax, exz = az - ax, ezy = ay - az;

			// Phase 2: Incremental Traversal.
			for(let n = ax + ay + az; n > 0; --n) {

				const key = keyDesign.packKey(keyCoordinates0);

				// Check if this cell is populated.
				if(grid.has(key)) {

					const octant = grid.get(key) as IntermediateOctant<T>;

					// Setup a pseudo octree.
					subtree.id.key = key;
					subtree.octant = octant;
					subtree.min.copy(keyCoordinates0);
					subtree.min.multiply(cellSize);
					subtree.min.add(octree.min);
					subtree.max.copy(subtree.min).add(cellSize);

					if(level > 0 && octant.children > 0) {

						// Raycast the subtree and calculate the initial parameters.
						const t = intersectOctree(subtree, ray, flags);

						if(t !== null) {

							// Find the intersecting children.
							raycastOctant(
								octree, octant,
								keyCoordinates0.x, keyCoordinates0.y, keyCoordinates0.z, level,
								t[0], t[1], t[2], t[3], t[4], t[5],
								result
							);

						}

					}

				}

				if(exy < 0) {

					if(exz < 0) {

						keyCoordinates0.x += sx;
						exy += by; exz += bz;

					} else {

						keyCoordinates0.z += sz;
						exz -= bx; ezy += by;

					}

				} else if(ezy < 0) {

					keyCoordinates0.z += sz;
					exz -= bx; ezy += by;

				} else {

					keyCoordinates0.y += sy;
					exy -= bx; ezy -= bz;

				}

			}

		}

		return result;

	}

}
