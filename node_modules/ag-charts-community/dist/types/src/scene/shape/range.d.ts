import { BBox } from '../bbox';
import type { NodeOptions, RenderContext } from '../node';
import { Shape } from './shape';
export declare class Range<D = any> extends Shape<D> {
    static readonly className = "Range";
    constructor(opts?: NodeOptions);
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    startLine: boolean;
    endLine: boolean;
    horizontal: boolean;
    protected computeBBox(): BBox;
    isPointInPath(_x: number, _y: number): boolean;
    render(renderCtx: RenderContext): void;
}
