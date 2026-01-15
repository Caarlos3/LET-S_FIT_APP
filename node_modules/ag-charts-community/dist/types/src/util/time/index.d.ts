import type { AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
export { durationSecond, durationMinute, durationHour, durationDay, durationWeek, durationMonth, durationYear, } from './duration';
export { intervalFloor, intervalCeil, intervalPrevious, intervalNext, intervalExtent, intervalRangeCount, intervalRange, intervalRangeStartIndex, } from './range';
export declare function intervalUnit(interval: AgTimeInterval | AgTimeIntervalUnit): AgTimeIntervalUnit;
export declare function intervalStep(interval: AgTimeInterval | AgTimeIntervalUnit): number;
export declare function intervalEpoch(interval: AgTimeInterval | AgTimeIntervalUnit): Date | undefined;
export declare function intervalHierarchy(interval: AgTimeInterval | AgTimeIntervalUnit): AgTimeIntervalUnit | undefined;
export declare function intervalMilliseconds(interval: AgTimeInterval | AgTimeIntervalUnit): number;
