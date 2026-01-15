import type { AgTimeInterval, AgTimeIntervalUnit, DateFormatterStyle, FormatterParams } from 'ag-charts-types';
import type { ModuleContext } from '../../module/moduleContext';
import { UnitTimeScale } from '../../scale/unitTimeScale';
import type { FormatDatumParams } from '../chartAxis';
import type { AxisTickFormatParams } from './axis';
import { AxisLabel } from './axisLabel';
import { AxisTick } from './axisTick';
import { DiscreteTimeAxis } from './discreteTimeAxis';
import { TimeAxisParentLevel } from './timeAxis';
export declare class UnitTimeAxis extends DiscreteTimeAxis<UnitTimeScale> {
    static readonly className: "UnitTimeAxis";
    static readonly type: "unit-time";
    readonly parentLevel: TimeAxisParentLevel;
    min?: Date | number;
    max?: Date | number;
    unit: AgTimeInterval | AgTimeIntervalUnit | undefined;
    get primaryLabel(): AxisLabel | undefined;
    get primaryTick(): AxisTick | undefined;
    constructor(moduleCtx: ModuleContext);
    hasDefinedDomain(): boolean;
    isCategoryLike(): boolean;
    private defaultUnit;
    processData(): void;
    protected updateScale(): void;
    normaliseDataDomain(domain: Date[]): {
        domain: Date[];
        clipped: boolean;
    };
    protected createDatumFormatter(_domain: any[], _ticks: any[]): ((value: any) => string | undefined) | undefined;
    tickFormatParams(domain: (number | Date)[], ticks: (number | Date)[], _fractionDigits?: number, timeInterval?: AgTimeInterval | AgTimeIntervalUnit): AxisTickFormatParams;
    datumFormatParams(value: Date | number, params: FormatDatumParams, _fractionDigits: number | undefined, timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined, style: DateFormatterStyle): FormatterParams<any>;
}
