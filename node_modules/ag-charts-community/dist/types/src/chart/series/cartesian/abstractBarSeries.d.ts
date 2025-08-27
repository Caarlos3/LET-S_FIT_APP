import type { Direction } from 'ag-charts-types';
import { CategoryScale } from '../../../scale/categoryScale';
import type { Point } from '../../../scene/point';
import type { QuadtreeNearest } from '../../../scene/util/quadtree';
import type { ChartAxis } from '../../chartAxis';
import { ChartAxisDirection } from '../../chartAxisDirection';
import type { SeriesNodePickMatch } from '../series';
import type { SeriesNodeDatum } from '../seriesTypes';
import type { CartesianAnimationData, CartesianSeriesNodeDataContext, CartesianSeriesNodeDatum } from './cartesianSeries';
import { CartesianSeries, CartesianSeriesProperties } from './cartesianSeries';
import { type QuadtreeCompatibleNode } from './quadtreeUtil';
import type { Scaling } from './scaling';
export declare abstract class AbstractBarSeriesProperties<T extends object> extends CartesianSeriesProperties<T> {
    direction: Direction;
}
export interface AbstractBarSeriesNodeDataContext<TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum> extends CartesianSeriesNodeDataContext<TDatum, TLabel> {
    groupScale: Scaling | undefined;
}
export type AbstractBarSeriesAnimationData<TNode extends QuadtreeCompatibleNode, TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum> = CartesianAnimationData<TNode, TDatum, TLabel, AbstractBarSeriesNodeDataContext<TDatum, TLabel>>;
export declare abstract class AbstractBarSeries<TNode extends QuadtreeCompatibleNode, TOpts extends object, TProps extends AbstractBarSeriesProperties<TOpts>, TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum, TContext extends AbstractBarSeriesNodeDataContext<TDatum, TLabel> = AbstractBarSeriesNodeDataContext<TDatum, TLabel>> extends CartesianSeries<TNode, TOpts, TProps, TDatum, TLabel, TContext> {
    /**
     * Used to get the position of bars within each group.
     */
    protected groupScale: CategoryScale<string, number>;
    protected smallestDataInterval?: number;
    protected largestDataInterval?: number;
    protected padBandExtent(keys: any[], alignStart?: boolean): [] | [number, number];
    getBandScalePadding(): {
        inner: number;
        outer: number;
    };
    shouldFlipXY(): boolean;
    protected isVertical(): boolean;
    protected getBarDirection(): ChartAxisDirection.X | ChartAxisDirection.Y;
    protected getCategoryDirection(): ChartAxisDirection.X | ChartAxisDirection.Y;
    protected getValueAxis(): ChartAxis | undefined;
    protected getCategoryAxis(): ChartAxis | undefined;
    protected getBandwidth(xAxis: ChartAxis, minWidth?: 1 | 0): number | undefined;
    xCoordinateRange(xValue: any): [number, number];
    yCoordinateRange(yValues: any[]): [number, number];
    protected updateGroupScale(xAxis: ChartAxis): {
        barWidth: number;
        groupIndex: number;
    };
    protected resolveKeyDirection(direction: ChartAxisDirection): ChartAxisDirection;
    protected initQuadTree(quadtree: QuadtreeNearest<TDatum>): void;
    protected pickNodesExactShape(point: Point): SeriesNodeDatum<unknown>[];
    protected pickNodeClosestDatum(point: Point): SeriesNodePickMatch | undefined;
}
