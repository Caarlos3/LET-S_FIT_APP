import type { AgTimeIntervalUnit } from 'ag-charts-types';
export interface IntervalEncoder {
    milliseconds: number;
    hierarchy: AgTimeIntervalUnit | undefined;
    encode(this: void, date: Date, utc: boolean): number;
    decode(this: void, encoded: number, utc: boolean): Date;
}
export declare const unitEncoding: Record<AgTimeIntervalUnit, IntervalEncoder>;
