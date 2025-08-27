import type { ScaleType } from '../../scale/scale';
export declare const AGGREGATION_INDEX_X_MIN = 0;
export declare const AGGREGATION_INDEX_X_MAX = 1;
export declare const AGGREGATION_INDEX_Y_MIN = 2;
export declare const AGGREGATION_INDEX_Y_MAX = 3;
export declare const AGGREGATION_SPAN = 4;
export declare function aggregationRangeFittingPoints(data: any[]): number;
export declare function aggregationDomain(scale: ScaleType, domain: any[]): [number, number];
export declare function aggregationXRatioForDatumIndex(datumIndex: any, domainCount: number): number;
export declare function aggregationXRatioForXValue(xValue: any, d0: number, d1: number): number;
export declare function aggregationIndexForXRatio(xRatio: number, maxRange: number): number;
export declare function createAggregationIndices(xValues: any[], yMaxValues: any[], yMinValues: any[], d0: number, d1: number, maxRange: number): {
    indexData: Int32Array;
    valueData: Float64Array;
};
export declare function compactAggregationIndices(indexData: Int32Array, valueData: Float64Array, maxRange: number, { inPlace }?: {
    inPlace?: boolean | undefined;
}): {
    maxRange: number;
    indexData: Int32Array;
    valueData: Float64Array;
};
