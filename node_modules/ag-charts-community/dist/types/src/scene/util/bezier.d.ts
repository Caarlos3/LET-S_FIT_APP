import type { Point } from '../point';
export declare function evaluateBezier(p0: number, p1: number, p2: number, p3: number, t: number): number;
export declare function solveBezier(p0: number, p1: number, p2: number, p3: number, value: number): number;
export declare function splitBezier2D(p0x: number, p0y: number, p1x: number, p1y: number, p2x: number, p2y: number, p3x: number, p3y: number, t: number): [[Point, Point, Point, Point], [Point, Point, Point, Point]];
export declare function bezier2DExtrema(cp0x: number, cp0y: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, cp3x: number, cp3y: number): number[];
export declare function bezier2DDistance(cp0x: number, cp0y: number, cp1x: number, cp1y: number, cp2x: number, cp2y: number, cp3x: number, cp3y: number, x: number, y: number, precision?: number): number;
