import { type InternalAgPatternColor, type RequiredInternalAgPatternColor } from 'ag-charts-core';
import type { AgPatternName, CssColor } from 'ag-charts-types';
export declare class Pattern implements Omit<RequiredInternalAgPatternColor, 'type'> {
    pattern: AgPatternName;
    path?: string;
    width: number;
    height: number;
    padding: number;
    fill: CssColor;
    fillOpacity: number;
    backgroundFill: CssColor;
    backgroundFillOpacity: number;
    stroke: CssColor;
    strokeOpacity: number;
    strokeWidth: number;
    rotation: number;
    scale: number;
    constructor(patternOptions: InternalAgPatternColor);
    private getPath;
    private renderStroke;
    private renderFill;
    private createCanvasPattern;
    setPatternTransform(pattern: CanvasPattern | null | undefined, pixelRatio: number, tx?: number, ty?: number): void;
    private _cache;
    createPattern(ctx: CanvasRenderingContext2D, pixelRatio: number): CanvasPattern | undefined;
    toSvg(): SVGElement;
}
