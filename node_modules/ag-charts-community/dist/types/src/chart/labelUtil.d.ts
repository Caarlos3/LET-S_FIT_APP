import type { AnyFn, IsAny } from 'ag-charts-core';
import type { AgChartLabelStyleOptions, HighlightState, PixelSize } from 'ag-charts-types';
import type { Point } from '../scene/point';
import type { Text } from '../scene/shape/text';
import type { Label } from './label';
interface SeriesLike {
    id: string;
    callWithContext<F extends AnyFn>(fn: F, ...params: Parameters<F>): ReturnType<F>;
}
type Bounds = {
    x: number;
    y: number;
    width: number;
    height: number;
};
export type BarLabelPlacement = 'inside-center' | 'inside-start' | 'inside-end' | 'outside-start' | 'outside-end';
type LabelDatum = Point & {
    datum?: unknown;
    text: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
};
export declare function getLabelStyles<TParams>(series: SeriesLike, nodeDatum: {
    datum?: unknown;
} | undefined, params: TParams, label: Label<TParams>, highlighted?: boolean, highlightState?: HighlightState): AgChartLabelStyleOptions & {
    fontSize: number;
};
export declare function updateLabelNode<TParams, D extends LabelDatum>(series: IsAny<D> extends false ? SeriesLike : never, textNode: IsAny<D> extends false ? Text : never, params: IsAny<D> extends false ? TParams : never, label: IsAny<D> extends false ? Label<TParams, unknown> : never, labelDatum: D | undefined, highlighted?: boolean, highlightState?: HighlightState): void;
export declare function adjustLabelPlacement({ isUpward, isVertical, placement, spacing, rect, }: {
    placement: BarLabelPlacement;
    isUpward: boolean;
    isVertical: boolean;
    spacing?: PixelSize;
    rect: Bounds;
}): Omit<LabelDatum, 'text'>;
export {};
