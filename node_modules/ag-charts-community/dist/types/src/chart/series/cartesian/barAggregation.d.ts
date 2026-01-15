import type { ScaleType } from '../../../scale/scale';
export interface BarSeriesDataAggregationFilter {
    maxRange: number;
    indexData: Int32Array;
    indices: number[];
}
export declare const BAR_X_MIN = 0;
export declare const BAR_X_MAX = 1;
export declare const BAR_Y_MIN = 2;
export declare const BAR_Y_MAX = 3;
export declare const BAR_SPAN = 4;
export declare function aggregateBarData(scale: ScaleType, xValues: any[], yValues: any[], domain: number[]): BarSeriesDataAggregationFilter[] | undefined;
