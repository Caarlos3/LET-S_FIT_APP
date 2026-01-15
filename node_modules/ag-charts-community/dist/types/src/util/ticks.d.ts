import type { AgTimeInterval } from 'ag-charts-types';
interface TickInterval {
    duration: number;
    timeInterval: AgTimeInterval;
    step: number;
}
export declare const TickIntervals: TickInterval[];
export declare function createTicks(start: number, stop: number, count: number, minCount?: number, maxCount?: number, visibleRange?: [number, number]): {
    ticks: number[];
    count: number;
    firstTickIndex: number | undefined;
};
export declare function defaultEpoch(timeInterval: AgTimeInterval, { weekStart }: {
    weekStart: Date | undefined;
}): Date | undefined;
export declare function getTickTimeInterval(start: number, stop: number, count: number, minCount: number | undefined, maxCount: number | undefined, { weekStart, primaryOnly, targetInterval, }: {
    weekStart: Date | undefined;
    primaryOnly?: boolean;
    targetInterval?: number;
}): AgTimeInterval | undefined;
export declare function tickStep(start: number, end: number, count: number, minCount?: number, maxCount?: number): number;
export declare function tickFormat(ticks: any[], format?: string): ((n: number | {
    valueOf(): number;
}) => string) | undefined;
export declare function range(start: number, end: number, step: number, visibleRange?: [number, number]): {
    ticks: number[];
    count: number;
    firstTickIndex: number | undefined;
};
export declare function isDenseInterval(count: number, availableRange: number): boolean;
export declare function niceTicksDomain(start: number, end: number): number[];
export declare function estimateTickCount(rangeExtent: number, zoomExtent: number, minSpacing: number | undefined, maxSpacing: number | undefined, defaultTickCount: number, defaultMinSpacing: number): {
    minTickCount: number;
    maxTickCount: number;
    tickCount: number;
};
export {};
