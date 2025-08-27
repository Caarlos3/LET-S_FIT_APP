import type { AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
import { DiscreteTimeScale } from './discreteTimeScale';
import type { NormalizedDomain, ScaleTickParams, ScaleTickResult } from './scale';
export declare class UnitTimeScale extends DiscreteTimeScale {
    static is(value: unknown): value is UnitTimeScale;
    readonly type = "unit-time";
    readonly defaultTickCount = 12;
    static supportsInterval(domain: Date[], interval: AgTimeInterval | AgTimeIntervalUnit): boolean;
    private _domain;
    set domain(domain: Date[]);
    get domain(): Date[];
    private _interval;
    get interval(): AgTimeInterval | AgTimeIntervalUnit | undefined;
    set interval(interval: AgTimeInterval | AgTimeIntervalUnit | undefined);
    private _bands;
    get bands(): readonly Date[];
    normalizeDomains(...domains: Date[][]): NormalizedDomain<Date>;
    convert(value: Date, options?: {
        clamp?: boolean;
        interpolate?: boolean;
    }): number;
    private calculateBands;
    ticks({ interval }: ScaleTickParams<AgTimeInterval | AgTimeIntervalUnit | number>, domain?: Date[], visibleRange?: [number, number], { extend }?: {
        extend?: boolean | undefined;
    }): ScaleTickResult<Date> | undefined;
}
