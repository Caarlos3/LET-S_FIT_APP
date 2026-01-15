import type { AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
import { BandScale } from './bandScale';
import { ScaleAlignment, type ScaleTickParams } from './scale';
export declare abstract class DiscreteTimeScale extends BandScale<Date, AgTimeInterval | AgTimeIntervalUnit | number> {
    static is(value: unknown): value is DiscreteTimeScale;
    abstract ticks(params: ScaleTickParams<AgTimeInterval | AgTimeIntervalUnit | number>, domain?: Date[], visibleRange?: [number, number], options?: {
        extend?: boolean;
        dropInitial?: boolean;
    }): {
        ticks: Date[];
        count: number | undefined;
        firstTickIndex?: number;
    } | undefined;
    toDomain(value: number): Date;
    convert(value: Date, options?: {
        clamp?: boolean;
        alignment?: ScaleAlignment;
    }): number;
    invert(position: number, nearest?: boolean): Date | undefined;
    findIndex(value: Date, alignment?: ScaleAlignment): number | undefined;
}
