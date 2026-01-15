import type { Size } from '../boxBounds';
/**
 * Calculates the maximum width and height of an inner rectangle that can be
 * rotated by a given angle (in degrees) and still fully fit within a container.
 *
 * @param rotationDeg - Rotation angle in degrees.
 * @param containerWidth - Width of the outer container.
 * @param containerHeight - Optional height of the container (defaults to Infinity).
 * @returns The largest inner rectangle size that fits when rotated.
 */
export declare function getMaxInnerRectSize(rotationDeg: number, containerWidth: number, containerHeight?: number): Size;
