import type { CategoryScale } from '../../scale/categoryScale';
import type { OrdinalTimeScale } from '../../scale/ordinalTimeScale';
import { UnitTimeScale } from '../../scale/unitTimeScale';
import type { AxisFillDatum, AxisLineDatum, TickDatum } from './axisUtil';
import type { GridLineStyleTickDatum } from './cartesianAxis';
import { CategoryAxis } from './categoryAxis';
export declare class DiscreteTimeAxis<S extends CategoryScale<string | object> | UnitTimeScale | OrdinalTimeScale = CategoryScale<string | object>> extends CategoryAxis<S> {
    protected calculateGridLine({ index: tickIndex, tickId, translation }: GridLineStyleTickDatum, index: number, p1: number, p2: number, ticks: GridLineStyleTickDatum[]): AxisLineDatum;
    protected calculateGridFills(ticks: GridLineStyleTickDatum[], p1: number, p2: number): AxisFillDatum[];
    protected calculateGridFill({ tickId, translation }: Pick<GridLineStyleTickDatum, 'tickId' | 'translation'>, index: number, gridFillIndex: number, p1: number, p2: number, ticks: GridLineStyleTickDatum[]): AxisFillDatum;
    protected calculateTickLine({ primary, tickId, translation }: Pick<TickDatum, 'tickId' | 'translation' | 'primary'>, index: number, direction: number, ticks: TickDatum[]): AxisLineDatum;
}
