import { Path } from './path';
export declare class SvgPath<D = any> extends Path<D> {
    private _d;
    get d(): string;
    set d(d: string);
    constructor(d?: string);
}
declare const TranslatableSvgPath_base: new (...args: any[]) => import("../transformable").TranslatableType<SvgPath<any>>;
export declare class TranslatableSvgPath extends TranslatableSvgPath_base {
    isPointInPath(x: number, y: number): boolean;
}
export {};
