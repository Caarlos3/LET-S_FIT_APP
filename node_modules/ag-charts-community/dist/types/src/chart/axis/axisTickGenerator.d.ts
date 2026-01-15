import type { AgTimeInterval, AgTimeIntervalUnit, DateFormatterStyle } from 'ag-charts-types';
import { type Scale } from '../../scale/scale';
import { type AxisPrimaryTickCount } from '../../util/secondaryAxisTicks';
import type { ChartAxis, ChartAxisLabelFlipFlag } from '../chartAxis';
import type { AxisInterval } from './axisInterval';
import type { TickInterval } from './axisTick';
import { NiceMode, type TickDatum } from './axisUtil';
export type AnyTimeInterval = AgTimeInterval | AgTimeIntervalUnit;
export interface TickData<D = any> {
    niceDomain: D[];
    tickDomain: D[];
    rawTicks: D[];
    rawTickCount: number | undefined;
    fractionDigits: number;
    ticks: TickDatum[];
    timeInterval: AnyTimeInterval | undefined;
}
export interface TickGenerationParams<D = any> {
    range: [number, number];
    domain: D[];
    reverse: boolean;
    defaultTickMinSpacing: number;
    primaryTickCount: AxisPrimaryTickCount | undefined;
    visibleRange: [number, number];
    niceMode: NiceMode;
    parallelFlipRotation: number;
    regularFlipRotation: number;
    labelX: number;
    sideFlag: ChartAxisLabelFlipFlag;
    sizeLimit: number | undefined;
    removeOverflowLabels: boolean;
    removeOverflowThreshold?: number;
}
export interface TickGenerationResult<D = any> {
    tickData: TickData<D>;
    rotation: number;
    textBaseline: CanvasTextBaseline;
    textAlign: CanvasTextAlign;
}
export interface TickGenerationAxis<S extends Scale<D, number, TickInterval<S>>, D> {
    readonly scale: S;
    readonly label: ChartAxis['label'];
    readonly primaryLabel?: ChartAxis['label'];
    readonly interval: AxisInterval<S>;
    readonly inRange: ChartAxis['inRange'];
    readonly direction?: ChartAxis['direction'];
    readonly minimumTimeGranularity?: ChartAxis['minimumTimeGranularity'];
    tickFormatter(domain: D[], ticks: D[], primary: boolean, fractionDigits: number | undefined, timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined, dateStyle: DateFormatterStyle): (value: any, index: number) => string | undefined;
}
export declare class AxisTickGenerator<S extends Scale<D, number, TickInterval<S>>, D> {
    private readonly axis;
    constructor(axis: TickGenerationAxis<S, D>);
    private estimateTickCount;
    generateTicks({ range, domain, reverse, primaryTickCount, defaultTickMinSpacing, visibleRange, niceMode, parallelFlipRotation, regularFlipRotation, labelX, sideFlag, removeOverflowLabels, removeOverflowThreshold, sizeLimit, }: TickGenerationParams<D>): TickGenerationResult<D>;
    private getTickStrategies;
    private createTickData;
    private getTimeIntervalTicks;
    private getTicks;
    private formatTicks;
}
