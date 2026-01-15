import type { AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
import { DiscreteTimeScale } from './discreteTimeScale';
import { type NormalizedDomain, type ScaleTickParams, type ScaleTickResult } from './scale';
export declare class OrdinalTimeScale extends DiscreteTimeScale {
    readonly type = "ordinal-time";
    readonly defaultTickCount = 5;
    static is(value: unknown): value is OrdinalTimeScale;
    private _domain;
    private isReversed;
    set domain(domain: Date[]);
    get domain(): Date[];
    private _bands;
    get bands(): Date[];
    normalizeDomains(...domains: Date[][]): NormalizedDomain<Date>;
    ticks(params: ScaleTickParams<AgTimeInterval | AgTimeIntervalUnit | number>, domain?: Date[], visibleRange?: [number, number], { extend, dropInitial }?: {
        extend?: boolean | undefined;
        dropInitial?: boolean | undefined;
    }): ScaleTickResult<Date> | undefined;
    stepTicks(bandStep: number, domain?: Date[], visibleRange?: [number, number], dropLast?: boolean): Date[];
    bandCount(visibleRange?: [number, number]): number;
    private getDefaultTicks;
    private bandDomainIndices;
    private ticksEvery;
}
