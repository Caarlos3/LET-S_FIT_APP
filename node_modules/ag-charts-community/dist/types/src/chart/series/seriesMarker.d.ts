import type { InternalAgColorType, RequireOptional } from 'ag-charts-core';
import type { AgMarkerShape, AgSeriesMarkerStyle, AgSeriesMarkerStylerParams, ISeriesMarker, Styler } from 'ag-charts-types';
import { ChangeDetectableProperties } from '../../scene/util/changeDetectableProperties';
import { FillGradientDefaults, FillImageDefaults, FillPatternDefaults } from './seriesProperties';
export declare class SeriesMarker<TParams = never> extends ChangeDetectableProperties implements ISeriesMarker<RequireOptional<TParams>> {
    enabled: boolean;
    /** One of the predefined marker names, or a marker shape function (for user-defined markers). */
    shape: AgMarkerShape;
    size: number;
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
    itemStyler?: Styler<AgSeriesMarkerStylerParams<unknown, unknown> & RequireOptional<Omit<TParams, 'context'>>, AgSeriesMarkerStyle>;
    getStyle(): AgSeriesMarkerStyle;
    getDiameter(): number;
}
