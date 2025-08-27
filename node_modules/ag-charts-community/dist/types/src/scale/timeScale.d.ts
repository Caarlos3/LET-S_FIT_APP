import type { AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
import { ContinuousScale } from './continuousScale';
import type { ScaleTickParams, ScaleTickResult } from './scale';
export declare class TimeScale extends ContinuousScale<Date, AgTimeInterval | AgTimeIntervalUnit | number> {
    static is(value: unknown): value is TimeScale;
    readonly type = "time";
    constructor();
    toDomain(d: number): Date;
    convert(value: Date | number, options?: {
        clamp: boolean;
    }): number;
    invert(value: number): Date;
    niceDomain(ticks: ScaleTickParams<AgTimeInterval | number>, domain?: Date[]): Date[];
    /**
     * Returns uniformly-spaced dates that represent the scale's domain.
     */
    ticks(params: ScaleTickParams<AgTimeInterval | AgTimeIntervalUnit | number>, domain?: Date[], visibleRange?: [number, number], { extend }?: {
        extend?: boolean | undefined;
    }): ScaleTickResult<Date> | undefined;
}
export declare function getDateTicksForInterval({ start, stop, interval, availableRange, visibleRange, extend, }: {
    start: number;
    stop: number;
    interval: number | AgTimeInterval | AgTimeIntervalUnit;
    availableRange: number;
    visibleRange: [number, number] | undefined;
    extend: boolean;
}): Date[] | undefined;
