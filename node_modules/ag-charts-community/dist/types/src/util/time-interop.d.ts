import { type RequireOptional } from 'ag-charts-core';
import type { AgTimeInterval } from 'ag-charts-types';
interface TimeIntervalBackwardsCompat extends RequireOptional<AgTimeInterval> {
    every(count: number): TimeIntervalBackwardsCompat;
}
export declare const time: {
    readonly millisecond: TimeIntervalBackwardsCompat;
    readonly second: TimeIntervalBackwardsCompat;
    readonly minute: TimeIntervalBackwardsCompat;
    readonly hour: TimeIntervalBackwardsCompat;
    readonly day: TimeIntervalBackwardsCompat;
    readonly monday: TimeIntervalBackwardsCompat;
    readonly tuesday: TimeIntervalBackwardsCompat;
    readonly wednesday: TimeIntervalBackwardsCompat;
    readonly thursday: TimeIntervalBackwardsCompat;
    readonly friday: TimeIntervalBackwardsCompat;
    readonly saturday: TimeIntervalBackwardsCompat;
    readonly sunday: TimeIntervalBackwardsCompat;
    readonly month: TimeIntervalBackwardsCompat;
    readonly year: TimeIntervalBackwardsCompat;
    readonly utcMillisecond: TimeIntervalBackwardsCompat;
    readonly utcSecond: TimeIntervalBackwardsCompat;
    readonly utcMinute: TimeIntervalBackwardsCompat;
    readonly utcHour: TimeIntervalBackwardsCompat;
    readonly utcDay: TimeIntervalBackwardsCompat;
    readonly utcMonth: TimeIntervalBackwardsCompat;
    readonly utcYear: TimeIntervalBackwardsCompat;
};
export {};
