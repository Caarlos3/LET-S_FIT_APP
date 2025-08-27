import type { AgTimeIntervalUnit } from 'ag-charts-types';
export declare function dateToNumber(value: any): any;
export declare function lowestGranularityForInterval(interval: number): "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year";
export declare function lowestGranularityUnitForTicks(ticks: (Date | number)[]): AgTimeIntervalUnit;
export declare function lowestGranularityUnitForValue(value: Date | number): AgTimeIntervalUnit;
export declare function dateTruncationForDomain(domain: (Date | number)[]): 'year' | 'month' | 'day' | undefined;
