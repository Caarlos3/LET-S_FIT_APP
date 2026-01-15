import type { HighlightNodeDatum } from '../../../core/eventsHub';
import type { AnimationValue } from '../../../motion/animation';
import type { Scale } from '../../../scale/scale';
import { BBox } from '../../../scene/bbox';
import { Group, TranslatableGroup } from '../../../scene/group';
import type { Node, NodeWithOpacity } from '../../../scene/node';
import type { Point } from '../../../scene/point';
import { Selection } from '../../../scene/selection';
import { Path } from '../../../scene/shape/path';
import { Text } from '../../../scene/shape/text';
import { QuadtreeNearest } from '../../../scene/util/quadtree';
import { StateMachine } from '../../../util/stateMachine';
import type { ChartAnimationPhase } from '../../chartAnimationPhase';
import { ChartAxisDirection } from '../../chartAxisDirection';
import { DataModelSeries, type DataModelSeriesConstructorOpts, type DataModelSeriesNodeDataContext, type DataModelSeriesNodeDatum } from '../dataModelSeries';
import type { SeriesDirectionKeysMapping, SeriesNodePickMatch } from '../series';
import { SeriesNodeEvent } from '../series';
import { SeriesProperties } from '../seriesProperties';
import type { ISeries, SeriesNodeDatum, SeriesNodeEventTypes } from '../seriesTypes';
import { type ShapeFillBBox } from '../shapeUtil';
import type { Scaling } from './scaling';
export interface CartesianSeriesNodeDatum extends DataModelSeriesNodeDatum {
    readonly xKey: string;
    readonly yKey?: string;
    readonly xValue?: any;
    readonly yValue?: any;
}
type CartesianSeriesOpts<TNode extends Node<TDatum>, TProps extends CartesianSeriesProperties<any>, TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number>> = {
    pathsPerSeries: string[];
    pathsZIndexSubOrderOffset: number[];
    propertyKeys: SeriesDirectionKeysMapping<TProps>;
    propertyNames: SeriesDirectionKeysMapping<TProps>;
    datumSelectionGarbageCollection: boolean;
    animationAlwaysUpdateSelections: boolean;
    animationResetFns?: {
        path?: (path: Path<TDatum>) => Partial<Path<TDatum>>;
        datum?: (node: TNode, datum: TDatum) => AnimationValue & Partial<TNode>;
        label?: (node: Text, datum: TLabel) => AnimationValue & Partial<Text>;
    };
};
export declare const DEFAULT_CARTESIAN_DIRECTION_KEYS: {
    x: "xKey"[];
    y: "yKey"[];
};
export declare const DEFAULT_CARTESIAN_DIRECTION_NAMES: {
    x: "xName"[];
    y: "yName"[];
};
export declare class CartesianSeriesNodeEvent<TEvent extends string = SeriesNodeEventTypes> extends SeriesNodeEvent<SeriesNodeDatum<number>, TEvent> {
    readonly xKey?: string;
    readonly yKey?: string;
    constructor(type: TEvent, nativeEvent: Event, datum: SeriesNodeDatum<number>, series: ISeries<number, SeriesNodeDatum<number>, {
        xKey?: string;
        yKey?: string;
    }>);
}
type CartesianAnimationState = 'empty' | 'ready' | 'waiting' | 'clearing' | 'disabled';
type CartesianAnimationEvent<TNode extends Node, TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum, TContext extends CartesianSeriesNodeDataContext<TDatum, TLabel> = CartesianSeriesNodeDataContext<TDatum, TLabel>> = {
    update: CartesianAnimationData<TNode, TDatum, TLabel, TContext>;
    updateData: undefined;
    highlight: Selection<TNode, TDatum>;
    resize: CartesianAnimationData<TNode, TDatum, TLabel, TContext>;
    clear: CartesianAnimationData<TNode, TDatum, TLabel, TContext>;
    reset: undefined;
    skip: undefined;
    disable: undefined;
};
export interface CartesianAnimationData<TNode extends Node, TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum, TContext extends CartesianSeriesNodeDataContext<TDatum, TLabel> = CartesianSeriesNodeDataContext<TDatum, TLabel>> {
    datumSelection: Selection<TNode, TDatum>;
    labelSelection: Selection<Text, TLabel>;
    annotationSelections: Selection<NodeWithOpacity, TDatum>[];
    contextData: TContext;
    previousContextData?: TContext;
    paths: Path[];
    seriesRect?: BBox;
    duration?: number;
}
export declare abstract class CartesianSeriesProperties<T extends object> extends SeriesProperties<T> {
    legendItemName?: string;
    pickOutsideVisibleMinorAxis: boolean;
}
export interface CartesianSeriesNodeDataContext<TDatum extends CartesianSeriesNodeDatum = CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum> extends DataModelSeriesNodeDataContext<TDatum, TLabel> {
    scales: {
        [key in ChartAxisDirection]?: Scaling;
    };
    animationValid?: boolean;
    visible: boolean;
}
export declare const RENDER_TO_OFFSCREEN_CANVAS_THRESHOLD = 100;
export declare abstract class CartesianSeries<TNode extends Node<any>, TOpts extends object, TProps extends CartesianSeriesProperties<TOpts>, TDatum extends CartesianSeriesNodeDatum, TLabel extends SeriesNodeDatum<number> = TDatum, TContext extends CartesianSeriesNodeDataContext<TDatum, TLabel> = CartesianSeriesNodeDataContext<TDatum, TLabel>> extends DataModelSeries<TDatum, TOpts, TProps, TLabel, TContext> {
    private _contextNodeData?;
    get contextNodeData(): TContext | undefined;
    getNodeData(): TDatum[] | undefined;
    protected readonly NodeEvent: typeof CartesianSeriesNodeEvent;
    private readonly paths;
    protected readonly dataNodeGroup: Group<unknown>;
    readonly labelGroup: TranslatableGroup;
    private datumSelection;
    protected labelSelection: Selection<Text, TLabel>;
    private highlightSelection;
    annotationSelections: Set<Selection<NodeWithOpacity, TDatum>>;
    private readonly opts;
    private readonly debug;
    protected quadtree?: QuadtreeNearest<TDatum>;
    protected animationState: StateMachine<CartesianAnimationState, CartesianAnimationEvent<TNode, TDatum, TLabel, TContext>>;
    protected constructor({ pathsPerSeries, pathsZIndexSubOrderOffset, datumSelectionGarbageCollection, animationAlwaysUpdateSelections, animationResetFns, propertyKeys, propertyNames, ...otherOpts }: Partial<CartesianSeriesOpts<TNode, TProps, TDatum, TLabel>> & Pick<CartesianSeriesOpts<TNode, TProps, TDatum, TLabel>, 'propertyKeys' | 'propertyNames'> & DataModelSeriesConstructorOpts<TProps>);
    attachSeries(seriesContentNode: Group, seriesNode: Group, annotationNode: Group | undefined): void;
    detachSeries(seriesContentNode: Group | undefined, seriesNode: Group, annotationNode: Group | undefined): void;
    updatedDomains(): void;
    protected attachPaths(paths: Path[]): void;
    protected detachPaths(paths: Path[]): void;
    renderToOffscreenCanvas(): boolean;
    resetAnimation(phase: ChartAnimationPhase): void;
    addChartEventListeners(): void;
    destroy(): void;
    protected isSeriesHighlighted(highlightedDatum: HighlightNodeDatum | undefined): boolean;
    protected strokewidthChange(): boolean;
    update({ seriesRect }: {
        seriesRect?: BBox;
    }): void;
    protected updateSelections(): boolean;
    private updateSeriesSelections;
    protected abstract nodeFactory(): TNode;
    protected getShapeFillBBox(): ShapeFillBBox;
    protected updateNodes(itemHighlighted: boolean, nodeRefresh: boolean): void;
    protected getHighlightLabelData(labelData: TLabel[], highlightedItem: TDatum): TLabel[] | undefined;
    protected getHighlightData(_nodeData: TDatum[], highlightedItem: TDatum): TDatum[] | undefined;
    protected updateHighlightSelection(): boolean;
    protected markQuadtreeDirty(): void;
    protected datumNodesIter(): Iterable<TNode>;
    getQuadTree(): QuadtreeNearest<TDatum>;
    protected initQuadTree(_quadtree: QuadtreeNearest<TDatum>): void;
    protected pickNodesExactShape(point: Point): SeriesNodeDatum<unknown>[];
    protected pickNodeClosestDatum(point: Point): SeriesNodePickMatch | undefined;
    protected pickNodeMainAxisFirst(point: Point, requireCategoryAxis: boolean): SeriesNodePickMatch | undefined;
    protected isPathOrSelectionDirty(): boolean;
    shouldFlipXY(): boolean;
    protected abstract xCoordinateRange(xValue: any, pixelSize: number, index: number): [number, number];
    protected abstract yCoordinateRange(yValues: any[], pixelSize: number, index: number): [number, number];
    visibleRangeIndices(axisKey: string, visibleRange: [any, any], indices?: number[], sortOrderParams?: {
        sortOrder: 1 | -1;
    }): [number, number];
    protected domainForVisibleRange(_direction: ChartAxisDirection, axisKeys: string[], crossAxisKey: string, visibleRange: [any, any], indices?: number[]): number[];
    protected domainForClippedRange(direction: ChartAxisDirection, axisKeys: string[], crossAxisKey: string): any[];
    protected countVisibleItems(crossAxisKey: string, axisKeys: string[], xVisibleRange: [number, number], yVisibleRange: [number, number] | undefined, minVisibleItems: number): number;
    minTimeInterval(): number | undefined;
    protected updateHighlightSelectionItem(opts: {
        items?: TDatum[];
        highlightSelection: Selection<TNode, TDatum>;
    }): Selection<TNode, TDatum>;
    protected updateHighlightSelectionLabel(opts: {
        items?: TLabel[];
        highlightLabelSelection: Selection<Text, TLabel>;
    }): Selection<Text<any>, TLabel>;
    protected updateDatumSelection(opts: {
        nodeData: TDatum[];
        datumSelection: Selection<TNode, TDatum>;
    }): Selection<TNode, TDatum>;
    protected updateDatumNodes(_opts: {
        datumSelection: Selection<TNode, TDatum>;
        isHighlight: boolean;
    }): void;
    protected updatePaths(opts: {
        itemId?: string;
        contextData: TContext;
        paths: Path[];
    }): void;
    protected updatePathNodes(opts: {
        itemId?: string;
        paths: Path[];
        visible: boolean;
        animationEnabled: boolean;
    }): void;
    protected resetPathAnimation(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected resetDatumAnimation(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected resetLabelAnimation(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected resetAllAnimation(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected animateEmptyUpdateReady(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected animateWaitingUpdateReady(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected animateReadyHighlight(data: Selection<TNode, TDatum>): void;
    protected animateReadyResize(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    protected animateClearingUpdateEmpty(data: CartesianAnimationData<TNode, TDatum, TLabel, TContext>): void;
    private getAnimationData;
    protected updateLabelSelection(opts: {
        labelData: TLabel[];
        labelSelection: Selection<Text, TLabel>;
    }): Selection<Text, TLabel>;
    protected abstract updateLabelNodes(opts: {
        labelSelection: Selection<Text, TLabel>;
        isHighlight?: boolean;
    }): void;
    protected abstract isLabelEnabled(): boolean;
    protected getScaling(scale: Scale<any, any>): Scaling | undefined;
    protected calculateScaling(): {
        x?: Scaling | undefined;
        y?: Scaling | undefined;
        angle?: Scaling | undefined;
        radius?: Scaling | undefined;
    };
}
export {};
