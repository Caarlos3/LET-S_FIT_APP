import type { InternalAgColorType, RequireOptional } from 'ag-charts-core';
import type { AgHistogramSeriesLabelFormatterParams, AgHistogramSeriesOptions, AgHistogramSeriesStyle, AgHistogramSeriesTooltipRendererParams } from 'ag-charts-types';
import type { BBox } from '../../../scene/bbox';
import { DropShadow } from '../../../scene/dropShadow';
import { Label } from '../../label';
import { FillGradientDefaults, FillImageDefaults, FillPatternDefaults } from '../seriesProperties';
import { type CartesianSeriesNodeDatum, CartesianSeriesProperties } from './cartesianSeries';
export interface HistogramNodeDatum extends CartesianSeriesNodeDatum {
    readonly x: number;
    readonly y: number;
    readonly width: number;
    readonly height: number;
    readonly topLeftCornerRadius: boolean;
    readonly topRightCornerRadius: boolean;
    readonly bottomRightCornerRadius: boolean;
    readonly bottomLeftCornerRadius: boolean;
    readonly clipBBox?: BBox;
    readonly aggregatedValue: number;
    readonly frequency: number;
    readonly domain: [number, number];
    readonly label?: {
        readonly text: string;
        readonly x: number;
        readonly y: number;
    };
    readonly crisp: boolean;
    readonly opacity?: number;
}
export declare class HistogramSeriesProperties extends CartesianSeriesProperties<AgHistogramSeriesOptions> {
    xKey: string;
    yKey?: string;
    xName?: string;
    yName?: string;
    fill?: InternalAgColorType;
    readonly fillGradientDefaults: FillGradientDefaults;
    readonly fillPatternDefaults: FillPatternDefaults;
    readonly fillImageDefaults: FillImageDefaults;
    fillOpacity: number;
    stroke?: string;
    strokeWidth: number;
    strokeOpacity: number;
    lineDash: number[];
    lineDashOffset: number;
    cornerRadius: number;
    areaPlot: boolean;
    bins?: [number, number][];
    aggregation: NonNullable<AgHistogramSeriesOptions['aggregation']>;
    binCount?: number;
    readonly shadow: DropShadow;
    readonly label: Label<AgHistogramSeriesLabelFormatterParams, any>;
    readonly tooltip: import("../seriesTooltip").SeriesTooltip<Omit<AgHistogramSeriesTooltipRendererParams<HistogramNodeDatum, unknown>, "context">>;
    getStyle(): RequireOptional<AgHistogramSeriesStyle> & {
        opacity: number;
    };
}
