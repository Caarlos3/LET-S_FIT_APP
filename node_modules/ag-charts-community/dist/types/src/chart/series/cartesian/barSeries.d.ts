import type { AgBarSeriesOptions } from 'ag-charts-types';
import type { ModuleContext } from '../../../module/moduleContext';
import { BBox } from '../../../scene/bbox';
import type { Point } from '../../../scene/point';
import { Selection } from '../../../scene/selection';
import { BarShape } from '../../../scene/shape/barShape';
import type { Text } from '../../../scene/shape/text';
import { ChartAxisDirection } from '../../chartAxisDirection';
import type { DataController } from '../../data/dataController';
import type { CategoryLegendDatum, ChartLegendType } from '../../legend/legendDatum';
import { type TooltipContent } from '../../tooltip/tooltip';
import { type PickFocusInputs } from '../series';
import type { ErrorBoundSeriesNodeDatum } from '../seriesTypes';
import { AbstractBarSeries, type AbstractBarSeriesAnimationData } from './abstractBarSeries';
import { BarSeriesProperties } from './barSeriesProperties';
import { type CartesianSeriesNodeDatum } from './cartesianSeries';
interface BarNodeLabelDatum extends Readonly<Point> {
    readonly text: string;
    readonly textAlign: CanvasTextAlign;
    readonly textBaseline: CanvasTextBaseline;
}
interface BarNodeDatum extends CartesianSeriesNodeDatum, ErrorBoundSeriesNodeDatum, Readonly<Point> {
    readonly xValue: string | number;
    readonly yValue: string | number;
    readonly cumulativeValue: number;
    readonly phantom: boolean;
    readonly width: number;
    readonly height: number;
    readonly opacity: number | undefined;
    readonly topLeftCornerRadius: boolean;
    readonly topRightCornerRadius: boolean;
    readonly bottomRightCornerRadius: boolean;
    readonly bottomLeftCornerRadius: boolean;
    readonly featherRatio: number;
    readonly clipBBox: BBox | undefined;
    readonly crisp: boolean;
    readonly label?: BarNodeLabelDatum;
}
type BarAnimationData = AbstractBarSeriesAnimationData<BarShape, BarNodeDatum>;
export declare class BarSeries extends AbstractBarSeries<BarShape<BarNodeDatum>, AgBarSeriesOptions, BarSeriesProperties, BarNodeDatum, BarNodeDatum> {
    static readonly className = "BarSeries";
    static readonly type: "bar";
    properties: BarSeriesProperties;
    connectsToYAxis: boolean;
    private dataAggregationFilters;
    get pickModeAxis(): "main" | undefined;
    constructor(moduleCtx: ModuleContext);
    private crossFilteringEnabled;
    processData(dataController: DataController): Promise<void>;
    getSeriesDomain(direction: ChartAxisDirection): any[];
    getSeriesRange(_direction: ChartAxisDirection, visibleRange: [any, any]): [number, number];
    getVisibleItems(xVisibleRange: [number, number], yVisibleRange: [number, number] | undefined, minVisibleItems: number): number;
    private aggregateData;
    createNodeData(): {
        itemId: string;
        nodeData: BarNodeDatum[];
        labelData: BarNodeDatum[];
        scales: {
            x?: import("./scaling").Scaling | undefined;
            y?: import("./scaling").Scaling | undefined;
            angle?: import("./scaling").Scaling | undefined;
            radius?: import("./scaling").Scaling | undefined;
        };
        visible: boolean;
        groupScale: import("./scaling").Scaling | undefined;
    } | undefined;
    protected nodeFactory(): BarShape<any>;
    protected getHighlightData(nodeData: BarNodeDatum[], highlightedItem: BarNodeDatum): BarNodeDatum[] | undefined;
    protected updateDatumSelection(opts: {
        nodeData: BarNodeDatum[];
        datumSelection: Selection<BarShape, BarNodeDatum>;
    }): Selection<BarShape<any>, BarNodeDatum>;
    private getItemStyle;
    protected updateDatumNodes(opts: {
        datumSelection: Selection<BarShape, BarNodeDatum>;
        isHighlight: boolean;
    }): void;
    protected updateLabelSelection(opts: {
        labelData: BarNodeDatum[];
        labelSelection: Selection<Text, BarNodeDatum>;
    }): Selection<Text<any>, BarNodeDatum>;
    protected updateLabelNodes(opts: {
        labelSelection: Selection<Text, BarNodeDatum>;
        isHighlight?: boolean;
    }): void;
    getTooltipContent(datumIndex: number): TooltipContent | undefined;
    private legendItemSymbol;
    getLegendData(legendType: ChartLegendType): CategoryLegendDatum[];
    animateEmptyUpdateReady({ datumSelection, labelSelection, annotationSelections }: BarAnimationData): void;
    animateWaitingUpdateReady(data: BarAnimationData): void;
    private getDatumId;
    protected isLabelEnabled(): boolean;
    protected computeFocusBounds({ datumIndex }: PickFocusInputs): BBox | undefined;
    protected hasItemStylers(): boolean;
}
export {};
