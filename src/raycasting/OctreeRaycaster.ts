import { Ray, Vector3 } from "three";

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
const u = new Vector3();
const v = new Vector3();

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
				const childExists = ((children & (1 << i | 0)) !== 0);
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
 * The octree traversal algorithm uses octant child existence bitmasks to avoid
 * hash table lookup misses.
 *
 * Reference:
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

		const level = octree.getDepth() + 1; // Starting at the root octant.
		const octant = octree.root.octant as IntermediateOctant<T>;

		if(level > 0 && octant.children > 0) {

			// Calculate the initial raycasting parameters.
			const t = intersectOctree(octree.root, ray, flags);

			if(t !== null) {

				// Find the intersecting children.
				raycastOctant(
					octree, octant, 0, 0, 0, level,
					t[0], t[1], t[2], t[3], t[4], t[5],
					result
				);

			}

		}

		if(octant.data !== null) {

			result.push(octree.root.clone());

		}

		return result;

	}

}
