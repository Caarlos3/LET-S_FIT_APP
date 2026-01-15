import type { InternalAgColorType } from 'ag-charts-core';
import type { AgBarSeriesItemStylerParams, AgBarSeriesLabelFormatterParams, AgBarSeriesLabelPlacement, AgBarSeriesOptions, AgBarSeriesStyle, AgBarSeriesTooltipRendererParams, PixelSize, Styler } from 'ag-charts-types';
import { DropShadow } from '../../../scene/dropShadow';
import { Label } from '../../label';
import { FillGradientDefaults, FillImageDefaults, FillPatternDefaults } from '../seriesProperties';
import { AbstractBarSeriesProperties } from './abstractBarSeries';
declare class BarSeriesLabel extends Label<AgBarSeriesLabelFormatterParams> {
    placement: AgBarSeriesLabelPlacement;
    spacing: PixelSize;
}
export declare class BarSeriesProperties extends AbstractBarSeriesProperties<AgBarSeriesOptions> {
    xKey: string;
    xName?: string;
    yKey: string;
    yName?: string;
    yFilterKey?: string;
    stackGroup?: string;
    normalizedTo?: number;
    fill: InternalAgColorType;
    readonly fillGradientDefaults: FillGradientDefaults;
    readonly fillPatternDefaults: FillPatternDefaults;
    readonly fillImageDefaults: FillImageDefaults;
    fillOpacity: number;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: number;
    lineDash: number[];
    lineDashOffset: number;
    cornerRadius: number;
    crisp?: boolean;
    itemStyler?: Styler<AgBarSeriesItemStylerParams<unknown>, AgBarSeriesStyle>;
    readonly shadow: DropShadow;
    readonly label: BarSeriesLabel;
    readonly tooltip: import("../seriesTooltip").SeriesTooltip<Omit<AgBarSeriesTooltipRendererParams<any, unknown>, "context">>;
    sparklineMode: boolean;
    getStyle(): Required<AgBarSeriesStyle> & {
        opacity: number;
    };
}
export {};
