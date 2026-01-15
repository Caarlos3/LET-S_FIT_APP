import type { AgTimeInterval, AgTimeIntervalUnit, DateFormatterStyle, FormatterParams } from 'ag-charts-types';
import type { ModuleContext } from '../../module/moduleContext';
import { TimeScale } from '../../scale/timeScale';
import { BaseProperties } from '../../util/properties';
import type { FormatDatumParams } from '../chartAxis';
import type { ChartAxisDirection } from '../chartAxisDirection';
import type { ISeries } from '../series/seriesTypes';
import type { AxisTickFormatParams } from './axis';
import { AxisLabel } from './axisLabel';
import { AxisTick } from './axisTick';
import { CartesianAxis } from './cartesianAxis';
export declare class TimeAxisParentLevel extends BaseProperties {
    enabled: boolean;
    readonly label: AxisLabel;
    readonly tick: AxisTick;
}
export declare class TimeAxis extends CartesianAxis<TimeScale, number | Date> {
    static readonly className = "TimeAxis";
    static readonly type: "time";
    readonly parentLevel: TimeAxisParentLevel;
    min?: Date | number;
    max?: Date | number;
    get _unit(): AgTimeInterval | AgTimeIntervalUnit | undefined;
    set _unit(_unit: AgTimeInterval | AgTimeIntervalUnit | undefined);
    unit: AgTimeInterval | AgTimeIntervalUnit | undefined;
    minimumTimeGranularity: AgTimeIntervalUnit | undefined;
    constructor(moduleCtx: ModuleContext);
    hasDefinedDomain(): boolean;
    isCategoryLike(): boolean;
    get primaryLabel(): AxisLabel | undefined;
    get primaryTick(): AxisTick | undefined;
    normaliseDataDomain(d: Date[]): {
        domain: Date[];
        clipped: boolean;
    };
    processData(): void;
    tickFormatParams(domain: (number | Date)[], ticks: (number | Date)[], _fractionDigits?: number, timeInterval?: AgTimeInterval | AgTimeIntervalUnit): AxisTickFormatParams;
    datumFormatParams(value: number | Date, params: FormatDatumParams, _fractionDigits: number | undefined, timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined, style: DateFormatterStyle): FormatterParams<any>;
}
export declare function minimumTimeAxisDatumGranularity(boundSeries: ISeries<unknown, unknown, unknown, unknown>[], direction: ChartAxisDirection, min: Date | number | undefined, max: Date | number | undefined): AgTimeIntervalUnit | undefined;
export declare function calculateDefaultUnit(boundSeries: ISeries<unknown, unknown, unknown, unknown>[], direction: ChartAxisDirection, min: Date | number | undefined, max: Date | number | undefined): AgTimeInterval | undefined;
export declare function normaliseTimeDataDomain(d: Date[], min: Date | number | undefined, max: Date | number | undefined): {
    domain: Date[];
    clipped: boolean;
};
