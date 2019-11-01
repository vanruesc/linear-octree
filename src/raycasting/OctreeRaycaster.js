import { Line3, Ray, Vector3 } from "math-ds";

import {
	layout,
	Flags,
	findEntryOctant,
	findNextOctant,
	intersectOctree
} from "sparse-octree";

import { OctantWrapper } from "./OctantWrapper.js";

/**
 * Raycasting flags.
 *
 * @type {Flags}
 */

const flags = new Flags();

/**
 * A vector.
 *
 * @type {Vector3}
 * @private
 */

const v = new Vector3();

/**
 * A line.
 *
 * @type {Line3}
 * @private
 */

const l = new Line3();

/**
 * A ray.
 *
 * @type {Ray}
 * @private
 */

const r = new Ray();

/**
 * Recursively traverses the given octant to find (pseudo) leaf octants that
 * intersect with the given ray.
 *
 * @private
 * @param {Octree} octree - The octree.
 * @param {Octant} octant - The current octant.
 * @param {Number} keyX - The X-coordinate of the current octant key.
 * @param {Number} keyY - The Y-coordinate of the current octant key.
 * @param {Number} keyZ - The Z-coordinate of the current octant key.
 * @param {Number} level - The current depth.
 * @param {Number} tx0 - Ray projection parameter.
 * @param {Number} ty0 - Ray projection parameter.
 * @param {Number} tz0 - Ray projection parameter.
 * @param {Number} tx1 - Ray projection parameter.
 * @param {Number} ty1 - Ray projection parameter.
 * @param {Number} tz1 - Ray projection parameter.
 * @param {Octant[]} intersects - An array to be filled with the intersecting octants.
 */

function raycastOctant(octree, octant, keyX, keyY, keyZ, level, tx0, ty0, tz0, tx1, ty1, tz1, intersects) {

	if(tx1 >= 0.0 && ty1 >= 0.0 && tz1 >= 0.0) {

		const keyDesign = octree.getKeyDesign();

		if(level === 0 || octant.data !== null) {

			const cellSize = octree.getCellSize(level);
			const octantWrapper = new OctantWrapper(octant);
			octantWrapper.id.set(level, keyDesign.packKey(v.set(keyX, keyY, keyZ)));
			octantWrapper.min.copy(v).multiplyScalar(cellSize).add(octree.min);
			octantWrapper.max.copy(octantWrapper.min).addScalar(cellSize);

			intersects.push(octantWrapper);

		} else if(octant.children > 0) {

			// Look at the next lower LOD.
			const grid = octree.getGrid(--level);
			const children = octant.children;

			// Compute means.
			const txm = 0.5 * (tx0 + tx1);
			const tym = 0.5 * (ty0 + ty1);
			const tzm = 0.5 * (tz0 + tz1);

			let currentOctant = findEntryOctant(tx0, ty0, tz0, txm, tym, tzm);
			let offset, childExists, i;

			// Translate the key coordinates to the next lower LOD.
			keyX <<= 1; keyY <<= 1; keyZ <<= 1;

			do {

				i = flags.value ^ currentOctant;
				childExists = ((children & (1 << i)) !== 0);
				offset = layout[i];

				switch(currentOctant) {

					case 0: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, tx0, ty0, tz0, txm, tym, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, tym, tzm);
						break;

					}

					case 1: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, tx0, ty0, tzm, txm, tym, tz1, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, tym, tz1);
						break;

					}

					case 2: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, tx0, tym, tz0, txm, ty1, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, ty1, tzm);
						break;

					}

					case 3: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, tx0, tym, tzm, txm, ty1, tz1, intersects);

						}

						currentOctant = findNextOctant(currentOctant, txm, ty1, tz1);
						break;

					}

					case 4: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, txm, ty0, tz0, tx1, tym, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, tx1, tym, tzm);
						break;

					}

					case 5: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, txm, ty0, tzm, tx1, tym, tz1, intersects);

						}

						currentOctant = findNextOctant(currentOctant, tx1, tym, tz1);
						break;

					}

					case 6: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, txm, tym, tz0, tx1, ty1, tzm, intersects);

						}

						currentOctant = findNextOctant(currentOctant, tx1, ty1, tzm);
						break;

					}

					case 7: {

						if(childExists) {

							v.set(keyX + offset[0], keyY + offset[1], keyZ + offset[2]);
							raycastOctant(octree, grid.get(keyDesign.packKey(v)), v.x, v.y, v.z, level, txm, tym, tzm, tx1, ty1, tz1, intersects);

						}

						// Far top right octant. No other octants can be reached from here.
						currentOctant = 8;
						break;

					}

				}

			} while(currentOctant < 8);

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
	 * @param {LinearOctree} octree - An octree.
	 * @param {Ray} ray - A ray.
	 * @param {Octant[]} [intersects] - An optional target list to be filled with the intersecting octants.
	 * @return {Octant[]} The intersecting octants. Sorted by distance, closest first.
	 */

	static intersectOctree(octree, ray, intersects = []) {

		const level = octree.getDepth();
		const grid = octree.getGrid(level);
		const cellSize = octree.getCellSize(level);
		const keyDesign = octree.getKeyDesign();
		const subtree = new OctantWrapper();

		const keyCoordinates0 = l.start;
		const keyCoordinates1 = l.end;

		// Find the point at which the ray enters the grid.
		const a = !octree.containsPoint(r.copy(ray).origin) ?
			r.intersectBox(octree, r.origin) :
			r.origin;

		let parameters;
		let key, octant;
		let t, b, n;

		let dx, dy, dz;
		let ax, ay, az, bx, by, bz;
		let sx, sy, sz, exy, exz, ezy;

		subtree.id.level = level;

		// Check if the ray hits the octree.
		if(a !== null) {

			// Phase 1: Initialization.

			// Find the ending point.
			t = cellSize << 1;
			b = r.at(t, v);

			// Calculate the starting and ending cell coordinates.
			octree.calculateKeyCoordinates(a, level, keyCoordinates0);
			octree.calculateKeyCoordinates(b, level, keyCoordinates1);

			// Calculate the key coordinate vector from start to end.
			dx = keyCoordinates1.x - keyCoordinates0.x;
			dy = keyCoordinates1.y - keyCoordinates0.y;
			dz = keyCoordinates1.z - keyCoordinates0.z;

			// Prepare step sizes and project the line onto the XY-, XZ- and ZY-plane.
			sx = Math.sign(dx); sy = Math.sign(dy); sz = Math.sign(dz);
			ax = Math.abs(dx); ay = Math.abs(dy); az = Math.abs(dz);
			bx = 2 * ax; by = 2 * ay; bz = 2 * az;
			exy = ay - ax; exz = az - ax; ezy = ay - az;

			// Phase 2: Incremental Traversal.
			for(n = ax + ay + az; n > 0; --n) {

				key = keyDesign.packKey(keyCoordinates0);

				// Check if this cell is populated.
				if(grid.has(key)) {

					octant = grid.get(key);

					// Setup a pseudo octree.
					subtree.id.key = key;
					subtree.octant = octant;
					subtree.min.copy(keyCoordinates0);
					subtree.min.multiplyScalar(cellSize);
					subtree.min.add(octree.min);
					subtree.max.copy(subtree.min).addScalar(cellSize);

					if(octant.data === null) {

						// Raycast the subtree and calculate the initial parameters.
						parameters = intersectOctree(subtree, ray, flags);

						// Find the intersecting children.
						raycastOctant(
							octree, subtree.octant,
							keyCoordinates0.x, keyCoordinates0.y, keyCoordinates0.z,
							octree.getDepth(), ...parameters, intersects
						);

					} else {

						// The octant contains data. No need to look deeper.
						intersects.push(subtree.clone());

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

		return intersects;

	}

}
