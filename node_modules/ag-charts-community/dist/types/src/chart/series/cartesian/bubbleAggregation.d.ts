import type { ScaleType } from '../../../scale/scale';
export interface BubbleAggregation {
    xValues: any[];
    yValues: any[];
    xd0: number;
    xd1: number;
    yd0: number;
    yd1: number;
    filters: BubbleAggregationFilter[];
}
export interface BubbleAggregationFilter {
    sizeRatio: number;
    node: BubbleAggregationNode | null;
}
export interface BubbleAggregationNode {
    scale: number;
    x0: any;
    y0: any;
    x1: any;
    y1: any;
    indices: number[];
    primaryDatumIndex: number;
    children: BubbleAggregationNode[] | null;
}
export declare function aggregateBubbleData(xScale: ScaleType, yScale: ScaleType, xValues: any[], yValues: any[], sizeValues: any[] | undefined, xDomain: any[], yDomain: any[], sizeDomain: number[]): BubbleAggregation | undefined;
export interface BubbleAggregationOptions {
    xRange: number;
    yRange: number;
    xVisibleRange: [number, number];
    yVisibleRange: [number, number];
    minSize: number;
    maxSize: number;
}
export interface GroupedAggregation {
    datumIndex: number;
    count: number;
    dilation: number;
}
export declare function computeBubbleAggregationCount(dilation: number, dataAggregation: BubbleAggregation, options: BubbleAggregationOptions): number;
export declare function computeBubbleAggregationDilation(dataAggregation: BubbleAggregation, aggregationOptions: BubbleAggregationOptions, maxRenderedItems: number): number;
export declare function computeBubbleAggregationData(dilation: number, dataAggregation: BubbleAggregation, options: BubbleAggregationOptions): {
    groupedAggregation: GroupedAggregation[];
    singleDatumIndices: number[];
};
