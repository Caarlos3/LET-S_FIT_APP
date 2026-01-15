import type { InternalAgColorType, InternalAgGradientColor, RequiredInternalAgImageFill, RequiredInternalAgPatternColor } from 'ag-charts-core';
import type { AgBubbleSeriesLabelFormatterParams, AgBubbleSeriesOptions, AgBubbleSeriesOptionsKeys, AgBubbleSeriesStyle, AgBubbleSeriesTooltipRendererParams, AgMarkerShape, BubbleSeriesItemStylerParams, LabelPlacement, Styler } from 'ag-charts-types';
import { Label } from '../../label';
import { SeriesMarker } from '../seriesMarker';
import { CartesianSeriesProperties } from './cartesianSeries';
declare class BubbleSeriesMarker extends SeriesMarker<AgBubbleSeriesOptionsKeys> {
    /**
     * The series `sizeKey` values along with the `size` and `maxSize` configs will be used to
     * determine the size of the marker. All values will be mapped to a marker size within the
     * `[size, maxSize]` range, where the largest values will correspond to the `maxSize` and the
     * lowest to the `size`.
     */
    maxSize: number;
    domain?: readonly [number, number];
}
declare class BubbleSeriesLabel extends Label<AgBubbleSeriesLabelFormatterParams> {
    placement: LabelPlacement;
}
export declare class BubbleSeriesProperties extends CartesianSeriesProperties<AgBubbleSeriesOptions> {
    xKey: string;
    yKey: string;
    sizeKey: string;
    labelKey?: string;
    xFilterKey: string | undefined;
    yFilterKey: string | undefined;
    sizeFilterKey: string | undefined;
    xName?: string;
    yName?: string;
    sizeName?: string;
    labelName?: string;
    title?: string;
    shape: AgMarkerShape;
    size: number;
    maxSize: number;
    domain?: [number, number];
    fillGradientDefaults: InternalAgGradientColor;
    fillPatternDefaults: RequiredInternalAgPatternColor;
    fillImageDefaults: RequiredInternalAgImageFill;
    fill?: InternalAgColorType;
    fillOpacity: number;
    stroke?: string;
    strokeWidth: number;
    strokeOpacity: number;
    lineDash: number[];
    lineDashOffset: number;
    itemStyler?: Styler<BubbleSeriesItemStylerParams<unknown>, AgBubbleSeriesStyle>;
    readonly label: BubbleSeriesLabel;
    readonly tooltip: import("../seriesTooltip").SeriesTooltip<Omit<AgBubbleSeriesTooltipRendererParams<any, unknown>, "context">>;
    maxRenderedItems: number;
    readonly marker: BubbleSeriesMarker;
}
export {};
