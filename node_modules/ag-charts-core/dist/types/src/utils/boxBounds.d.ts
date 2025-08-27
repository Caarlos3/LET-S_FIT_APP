export interface Size {
    width: number;
    height: number;
}
export interface Point {
    x: number;
    y: number;
}
export interface BoxBounds extends Size, Point {
}
export declare function boxCollides(b: BoxBounds, x: number, y: number, w: number, h: number): boolean;
export declare function boxContains(b: BoxBounds, x: number, y: number, w?: number, h?: number): boolean;
export declare function boxEmpty(b: BoxBounds | undefined): boolean;
export declare function boxesEqual(a: BoxBounds, b: BoxBounds): boolean;
