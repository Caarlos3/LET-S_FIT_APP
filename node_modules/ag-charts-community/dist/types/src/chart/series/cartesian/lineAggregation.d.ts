import type { ScaleType } from '../../../scale/scale';
export interface LineSeriesDataAggregationFilter {
    indices: number[];
    maxRange: number;
}
export declare function aggregateLineData(scale: ScaleType, xValues: any[], yValues: any[], domain: any[]): LineSeriesDataAggregationFilter[] | undefined;
