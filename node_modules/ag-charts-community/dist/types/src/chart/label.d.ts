import { type RequireOptional } from 'ag-charts-core';
import type { AgChartLabelFormatterParams, AgChartLabelOptions, AgChartLabelStyleOptions, AgChartLabelStylerParams, AgTimeInterval, AgTimeIntervalUnit, ContextDefault, FontStyle, FontWeight, Formatter, Padding, PaddingOptions, Styler } from 'ag-charts-types';
import type { ContextFormatter } from '../module/axisContext';
import type { Matrix } from '../scene/matrix';
import type { PlacedLabelDatum } from '../scene/util/labelPlacement';
import { BaseProperties } from '../util/properties';
import { type TextMeasurer } from '../util/textMeasurer';
import type { ChartAxisLabel, ChartAxisLabelFlipFlag } from './chartAxis';
export declare class LabelBorder {
    enabled: boolean;
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
}
export declare class Label<TParams = never, TDatum = any> extends BaseProperties implements AgChartLabelOptions<TDatum, RequireOptional<TParams>> {
    enabled: boolean;
    border: LabelBorder;
    color?: string;
    cornerRadius?: number;
    fill?: string;
    fillOpacity?: number;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontSize: number;
    fontFamily: string;
    formatter?: Formatter<AgChartLabelFormatterParams<TDatum> & RequireOptional<TParams>>;
    format?: string;
    padding?: Padding;
    itemStyler?: Styler<AgChartLabelStylerParams<TDatum, ContextDefault>, AgChartLabelStyleOptions>;
    private _cachedFormatter;
    formatValue(formatWithContext: ContextFormatter<AgChartLabelFormatterParams<TDatum> & RequireOptional<TParams>>, type: 'number' | 'date' | 'category', value: any, params: AgChartLabelFormatterParams<TDatum> & RequireOptional<TParams>): string | undefined;
}
type LabelBoxingMixin = {
    border?: {
        enabled?: boolean;
        stroke?: string;
    };
    fill?: unknown;
    padding?: Padding;
};
export declare function expandLabelPadding(label: LabelBoxingMixin | undefined): Required<PaddingOptions>;
export declare function calculateLabelRotation(rotation?: number, parallel?: boolean, regularFlipRotation?: number, parallelFlipRotation?: number): {
    configuredRotation: number;
    defaultRotation: number;
    parallelFlipFlag: ChartAxisLabelFlipFlag;
    regularFlipFlag: ChartAxisLabelFlipFlag;
};
export declare function getLabelSpacing(minSpacing?: number, rotated?: boolean): number;
export declare function getTextBaseline(parallel: boolean, labelRotation: number, sideFlag: ChartAxisLabelFlipFlag, parallelFlipFlag: ChartAxisLabelFlipFlag): CanvasTextBaseline;
export declare function getTextAlign(parallel: boolean, labelRotation: number, labelAutoRotation: number, sideFlag: ChartAxisLabelFlipFlag, regularFlipFlag: ChartAxisLabelFlipFlag): CanvasTextAlign;
export declare function labelSpecifier(format: ChartAxisLabel['format'] | undefined, timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined): string | undefined;
export declare function timeIntervalMaxLabelSize(label: ChartAxisLabel, primaryLabel: ChartAxisLabel | undefined, domain: Date[], timeInterval: AgTimeInterval | AgTimeIntervalUnit, textMeasurer: TextMeasurer): {
    width: number;
    height: number;
};
export declare function createLabelData(tickData: {
    tickLabel: string | undefined;
    translation: number;
}[], labelX: number, labelMatrix: Matrix, textMeasurer: TextMeasurer, label: ChartAxisLabel): PlacedLabelDatum[];
export declare function createFixedLabelData({ width, height, spacing }: {
    width: number;
    height: number;
    spacing: number;
}, labelX: number, labelMatrix: Matrix): PlacedLabelDatum[];
export {};
