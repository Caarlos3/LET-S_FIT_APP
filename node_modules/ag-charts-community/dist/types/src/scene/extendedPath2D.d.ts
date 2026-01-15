import { BBox } from './bbox';
declare enum Command {
    Move = 0,
    Line = 1,
    Curve = 2,
    ClosePath = 3
}
export declare class ExtendedPath2D {
    private path2d;
    private previousCommands;
    private previousParams;
    private previousClosedPath;
    commands: Command[];
    params: number[];
    cx: number;
    cy: number;
    sx: number;
    sy: number;
    openedPath: boolean;
    closedPath: boolean;
    isEmpty(): boolean;
    isDirty(): boolean;
    getPath2D(): Path2D;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number): void;
    cubicCurveTo(cx1: number, cy1: number, cx2: number, cy2: number, x: number, y: number): void;
    closePath(): void;
    rect(x: number, y: number, width: number, height: number): void;
    roundRect(x: number, y: number, width: number, height: number, radii: number): void;
    ellipse(cx: number, cy: number, rx: number, ry: number, rotation: number, sAngle: number, eAngle: number, counterClockwise?: boolean): void;
    arc(x: number, y: number, r: number, sAngle: number, eAngle: number, counterClockwise?: boolean): void;
    appendSvg(svg: string): boolean;
    private svgEllipse;
    clear(trackChanges?: boolean): void;
    isPointInPath(x: number, y: number): boolean;
    distanceSquared(x: number, y: number): number;
    toSVG(transform?: (x: number, y: number) => {
        x: number;
        y: number;
    }): string;
    computeBBox(): BBox;
}
export {};
