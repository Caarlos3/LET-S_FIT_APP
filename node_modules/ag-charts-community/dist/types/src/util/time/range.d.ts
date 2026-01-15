import type { AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
export declare function intervalFloor(interval: AgTimeInterval | AgTimeIntervalUnit, date: Date | number): Date;
export declare function intervalCeil(interval: AgTimeInterval | AgTimeIntervalUnit, date: Date | number): Date;
export declare function intervalPrevious(interval: AgTimeInterval | AgTimeIntervalUnit, date: Date): Date;
export declare function intervalNext(interval: AgTimeInterval | AgTimeIntervalUnit, date: Date): Date;
interface RangeParams {
    defaultAlignment?: 'start' | 'interval';
    extend?: boolean;
    visibleRange?: [number, number];
    limit?: number;
}
export declare function intervalExtent(start: Date | number, stop: Date | number, visibleRange?: [number, number]): [Date, Date];
export declare function intervalRangeCount(interval: AgTimeInterval | AgTimeIntervalUnit, start: Date, stop: Date, params?: RangeParams): number;
export declare function intervalRange(interval: AgTimeInterval | AgTimeIntervalUnit, start: Date, stop: Date, params?: RangeParams): Date[];
export declare function intervalRangeStartIndex(interval: AgTimeInterval | AgTimeIntervalUnit, start: Date, stop: Date, { extend, visibleRange, limit, defaultAlignment }?: RangeParams): number;
export {};
