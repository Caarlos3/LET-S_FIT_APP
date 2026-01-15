import type { AgTimeInterval } from 'ag-charts-types';
export type ScaleType = 'number' | 'log' | 'time' | 'unit-time' | 'ordinal-time' | 'category' | 'mercator' | 'color';
export interface ScaleTickParams<I> {
    nice: boolean;
    interval: I | undefined;
    tickCount: number | undefined;
    minTickCount: number;
    maxTickCount: number;
}
export interface NormalizedDomain<D> {
    domain: D[];
    animatable: boolean;
}
export interface ScaleTickResult<D> {
    ticks: D[];
    count: number | undefined;
    firstTickIndex?: number;
    timeInterval?: AgTimeInterval;
}
export declare enum ScaleAlignment {
    Leading = 0,
    Trailing = 1,
    Interpolate = 2
}
export interface Scale<D, R, I = number> {
    readonly type: ScaleType;
    readonly defaultTickCount: number;
    domain: D[];
    range: R[];
    normalizeDomains(...domains: D[][]): NormalizedDomain<D>;
    toDomain(value: number): D | undefined;
    convert(value: D, options?: {
        clamp?: boolean;
        alignment?: ScaleAlignment;
    }): R;
    invert(value: R, exact?: boolean): D | undefined;
    ticks(ticks: ScaleTickParams<I>, domain?: D[], visibleRange?: [number, number]): ScaleTickResult<D> | undefined;
    niceDomain(ticks: ScaleTickParams<I>, domain?: D[]): D[];
    readonly bandwidth: number | undefined;
    readonly step: number | undefined;
    readonly inset: number | undefined;
}
