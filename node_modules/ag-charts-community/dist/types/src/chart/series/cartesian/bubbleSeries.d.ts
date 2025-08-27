import type { Point } from 'ag-charts-core';
import { type AgBubbleSeriesOptions } from 'ag-charts-types';
import type { ModuleContext } from '../../../module/moduleContext';
import type { BBox } from '../../../scene/bbox';
import type { SizedPoint } from '../../../scene/point';
import type { Selection } from '../../../scene/selection';
import { Text } from '../../../scene/shape/text';
import type { LabelPlacement, MeasuredLabel, PlacedLabel } from '../../../scene/util/labelPlacement';
import { ChartAxisDirection } from '../../chartAxisDirection';
import type { DataController } from '../../data/dataController';
import type { CategoryLegendDatum } from '../../legend/legendDatum';
import { Marker } from '../../marker/marker';
import { type TooltipContent } from '../../tooltip/tooltip';
import { type PickFocusInputs } from '../series';
import type { ErrorBoundSeriesNodeDatum, SeriesNodeEventTypes } from '../seriesTypes';
import { BubbleSeriesProperties } from './bubbleSeriesProperties';
import type { CartesianAnimationData, CartesianSeriesNodeDatum } from './cartesianSeries';
import { CartesianSeries, CartesianSeriesNodeEvent } from './cartesianSeries';
type BubbleScatterAnimationData = CartesianAnimationData<Marker, BubbleScatterNodeDatum>;
declare class BubbleScatterSeriesNodeEvent<TEvent extends string = SeriesNodeEventTypes> extends CartesianSeriesNodeEvent<TEvent> {
    readonly sizeKey?: string;
    constructor(type: TEvent, nativeEvent: Event, datum: BubbleScatterNodeDatum, series: BubbleSeries);
}
export interface BubbleScatterNodeDatum extends CartesianSeriesNodeDatum, ErrorBoundSeriesNodeDatum {
    readonly point: Readonly<SizedPoint>;
    readonly sizeValue: any;
    readonly label: MeasuredLabel;
    readonly placement: LabelPlacement;
    readonly anchor: Point;
    readonly count: number;
    readonly dilation: number;
    readonly selected: boolean | undefined;
}
export declare class BubbleSeries extends CartesianSeries<Marker, AgBubbleSeriesOptions, BubbleSeriesProperties, BubbleScatterNodeDatum> {
    static readonly className: string;
    static readonly type: string;
    protected readonly NodeEvent: typeof BubbleScatterSeriesNodeEvent;
    properties: BubbleSeriesProperties;
    private dataAggregation;
    private readonly sizeScale;
    get pickModeAxis(): "main-category";
    constructor(moduleCtx: ModuleContext);
    processData(dataController: DataController): Promise<void>;
    xCoordinateRange(xValue: any, pixelSize: number, index: number): [number, number];
    yCoordinateRange(yValues: any[], pixelSize: number, index: number): [number, number];
    getSeriesDomain(direction: ChartAxisDirection): any[];
    getSeriesRange(_direction: ChartAxisDirection, visibleRange: [any, any]): any[];
    getVisibleItems(xVisibleRange: [number, number], yVisibleRange: [number, number] | undefined, minVisibleItems: number): number;
    private aggregateData;
    private aggregationOptions;
    createNodeData(): {
        itemId: string;
        nodeData: BubbleScatterNodeDatum[];
        labelData: BubbleScatterNodeDatum[];
        scales: {
            x?: import("./scaling").Scaling | undefined;
            y?: import("./scaling").Scaling | undefined;
            angle?: import("./scaling").Scaling | undefined;
            radius?: import("./scaling").Scaling | undefined;
        };
        visible: boolean;
    } | undefined;
    protected isPathOrSelectionDirty(): boolean;
    getLabelData(): BubbleScatterNodeDatum[];
    protected updateDatumSelection(opts: {
        nodeData: BubbleScatterNodeDatum[];
        datumSelection: Selection<Marker, BubbleScatterNodeDatum>;
    }): Selection<Marker, BubbleScatterNodeDatum>;
    protected updateDatumNodes(opts: {
        datumSelection: Selection<Marker, BubbleScatterNodeDatum>;
        isHighlight: boolean;
    }): void;
    updatePlacedLabelData(labelData: PlacedLabel<BubbleScatterNodeDatum>[]): void;
    protected updateLabelNodes(opts: {
        labelSelection: Selection<Text, BubbleScatterNodeDatum>;
        isHighlight?: boolean;
    }): void;
    getTooltipContent(datumIndex: number): TooltipContent | undefined;
    private legendItemSymbol;
    getLegendData(): CategoryLegendDatum[];
    animateEmptyUpdateReady({ datumSelection, labelSelection }: BubbleScatterAnimationData): void;
    protected isLabelEnabled(): boolean;
    protected nodeFactory(): Marker;
    getFormattedMarkerStyle(datum: BubbleScatterNodeDatum): import("ag-charts-types").AgSeriesMarkerStyle & {
        size: number;
    };
    protected computeFocusBounds(opts: PickFocusInputs): BBox | undefined;
    protected hasItemStylers(): boolean;
}
export {};
