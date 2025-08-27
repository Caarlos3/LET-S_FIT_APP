import type { AgTimeInterval, AgTimeIntervalUnit, DateFormatterStyle, FormatterParams } from 'ag-charts-types';
import type { ModuleContext } from '../../module/moduleContext';
import { CategoryScale } from '../../scale/categoryScale';
import type { OrdinalTimeScale } from '../../scale/ordinalTimeScale';
import type { UnitTimeScale } from '../../scale/unitTimeScale';
import type { FormatDatumParams } from '../chartAxis';
import type { AxisTickFormatParams } from './axis';
import type { AxisFillDatum, AxisLineDatum, TickDatum } from './axisUtil';
import { CartesianAxis, type GridLineStyleTickDatum } from './cartesianAxis';
export declare class CategoryAxis<S extends CategoryScale<string | object> | UnitTimeScale | OrdinalTimeScale = CategoryScale<string | object>> extends CartesianAxis<S> {
    static is(this: void, value: unknown): value is CategoryAxis<any>;
    static readonly className: string;
    static readonly type: 'category' | 'grouped-category' | 'unit-time' | 'ordinal-time';
    constructor(moduleCtx: ModuleContext, scale?: S, includeInvisibleDomains?: boolean);
    isCategoryLike(): boolean;
    groupPaddingInner: number;
    paddingInner?: number;
    paddingOuter?: number;
    hasDefinedDomain(): boolean;
    normaliseDataDomain(domain: Array<string | object>): {
        domain: (string | object)[];
        clipped: boolean;
    };
    protected updateScale(): void;
    protected calculateGridLines(ticks: GridLineStyleTickDatum[], p1: number, p2: number): AxisLineDatum[];
    protected calculateGridLine({ index: tickIndex, tickId, translation }: GridLineStyleTickDatum, index: number, p1: number, p2: number, ticks: GridLineStyleTickDatum[]): AxisLineDatum;
    protected calculateGridFills(ticks: GridLineStyleTickDatum[], p1: number, p2: number): AxisFillDatum[];
    protected calculateGridFill({ tickId, translation }: Pick<GridLineStyleTickDatum, 'tickId' | 'translation'>, index: number, gridFillIndex: number, p1: number, p2: number, ticks: GridLineStyleTickDatum[]): AxisFillDatum;
    protected calculateTickLines(ticks: TickDatum[], direction: number): AxisLineDatum[];
    protected calculateTickLine({ primary, tickId, translation }: Pick<TickDatum, 'tickId' | 'translation' | 'primary'>, index: number, direction: number, ticks: TickDatum[]): AxisLineDatum;
    private reduceBandScalePadding;
    tickFormatParams(_domain: any[], _ticks: any[], _fractionDigits?: number, _timeInterval?: AgTimeInterval | AgTimeIntervalUnit): AxisTickFormatParams;
    datumFormatParams(value: any, params: FormatDatumParams, _fractionDigits: number | undefined, _timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined, _style: DateFormatterStyle): FormatterParams<any>;
}
