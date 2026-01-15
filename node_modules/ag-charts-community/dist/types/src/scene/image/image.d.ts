import { type InternalAgImageFill } from 'ag-charts-core';
import type { AgColorRepeat, AgImageFillFit } from 'ag-charts-types';
import type { BBox } from '../bbox';
import type { Node } from '../node';
import type { ImageLoader } from './imageLoader';
export declare class Image implements Omit<InternalAgImageFill, 'type'> {
    readonly imageLoader: ImageLoader | undefined;
    url: string;
    backgroundFill: string;
    backgroundFillOpacity: number;
    width?: number;
    height?: number;
    repeat: AgColorRepeat;
    fit: AgImageFillFit;
    rotation: number;
    constructor(imageLoader: ImageLoader | undefined, imageOptions: InternalAgImageFill);
    private createCanvasImage;
    private getSize;
    setImageTransform(pattern: CanvasPattern | string | undefined, bbox: BBox): void;
    private _cache;
    createPattern(ctx: CanvasRenderingContext2D, shapeWidth: number, shapeHeight: number, node: Node): CanvasPattern | string | undefined;
    toSvg(bbox: BBox, pixelRatio: number): SVGElement;
}
