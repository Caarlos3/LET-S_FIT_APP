import { type AgLineSeriesOptions, type AgSeriesMarkerStyle } from 'ag-charts-types';
import type { ModuleContext } from '../../../module/moduleContext';
import type { BBox } from '../../../scene/bbox';
import type { Selection } from '../../../scene/selection';
import type { Path } from '../../../scene/shape/path';
import type { Text } from '../../../scene/shape/text';
import { ChartAxisDirection } from '../../chartAxisDirection';
import type { DataController } from '../../data/dataController';
import type { CategoryLegendDatum, ChartLegendType } from '../../legend/legendDatum';
import { Marker } from '../../marker/marker';
import { type TooltipContent } from '../../tooltip/tooltip';
import { type PickFocusInputs } from '../series';
import type { CartesianAnimationData } from './cartesianSeries';
import { CartesianSeries } from './cartesianSeries';
import { LineSeriesProperties } from './lineSeriesProperties';
import { type LineNodeDatum, type LinePathSpan, type LineSeriesNodeDataContext } from './lineUtil';
type LineAnimationData = CartesianAnimationData<Marker, LineNodeDatum, LineNodeDatum, LineSeriesNodeDataContext>;
export declare class LineSeries extends CartesianSeries<Marker, AgLineSeriesOptions, LineSeriesProperties, LineNodeDatum, LineNodeDatum, LineSeriesNodeDataContext> {
    static readonly className = "LineSeries";
    static readonly type: "line";
    properties: LineSeriesProperties;
    private dataAggregationFilters;
    get pickModeAxis(): "main" | "main-category";
    constructor(moduleCtx: ModuleContext);
    processData(dataController: DataController): Promise<void>;
    xCoordinateRange(xValue: any, pixelSize: number): [number, number];
    yCoordinateRange(yValues: any[], pixelSize: number): [number, number];
    getSeriesDomain(direction: ChartAxisDirection): any[];
    getSeriesRange(_direction: ChartAxisDirection, visibleRange: [any, any]): number[];
    getVisibleItems(xVisibleRange: [number, number], yVisibleRange: [number, number] | undefined, minVisibleItems: number): number;
    private aggregateData;
    createNodeData(): {
        itemId: string;
        nodeData: LineNodeDatum[];
        labelData: LineNodeDatum[];
        strokeData: {
            itemId: string;
            spans: LinePathSpan[];
        };
        scales: {
            x?: import("./scaling").Scaling | undefined;
            y?: import("./scaling").Scaling | undefined;
            angle?: import("./scaling").Scaling | undefined;
            radius?: import("./scaling").Scaling | undefined;
        };
        visible: boolean;
        crossFiltering: boolean;
    } | undefined;
    protected isPathOrSelectionDirty(): boolean;
    protected updatePathNodes(opts: {
        paths: Path[];
        visible: boolean;
        animationEnabled: boolean;
    }): void;
    protected updateDatumSelection(opts: {
        nodeData: LineNodeDatum[];
        datumSelection: Selection<Marker, LineNodeDatum>;
    }): Selection<Marker, LineNodeDatum>;
    protected updateDatumNodes(opts: {
        datumSelection: Selection<Marker, LineNodeDatum>;
        isHighlight: boolean;
    }): void;
    protected updateLabelSelection(opts: {
        labelData: LineNodeDatum[];
        labelSelection: Selection<Text, LineNodeDatum>;
    }): Selection<Text<any>, LineNodeDatum>;
    protected updateLabelNodes(opts: {
        labelSelection: Selection<Text, LineNodeDatum>;
        isHighlight?: boolean;
    }): void;
    getTooltipContent(datumIndex: number): TooltipContent | undefined;
    private legendItemSymbol;
    getLegendData(legendType: ChartLegendType): CategoryLegendDatum[];
    protected updatePaths(opts: {
        contextData: LineSeriesNodeDataContext;
        paths: Path[];
    }): void;
    private updateLinePaths;
    protected animateEmptyUpdateReady(animationData: LineAnimationData): void;
    protected animateReadyResize(animationData: LineAnimationData): void;
    protected animateWaitingUpdateReady(animationData: LineAnimationData): void;
    protected isLabelEnabled(): boolean;
    getBandScalePadding(): {
        inner: number;
        outer: number;
    };
    protected nodeFactory(): Marker;
    getFormattedMarkerStyle(datum: LineNodeDatum): AgSeriesMarkerStyle & {
        size: number;
    };
    protected computeFocusBounds(opts: PickFocusInputs): BBox | undefined;
    protected hasItemStylers(): boolean;
}
export {};
