import { type AnyFn, CleanupRegistry, EventEmitter, type RequireOptional, type RequiredInternalAgGradientColor, type RequiredInternalAgImageFill, type RequiredInternalAgPatternColor } from 'ag-charts-core';
import type { AgChartLabelFormatterParams, AgInitialStateLegendOptions, AgSeriesMarkerStyle, AgSeriesTooltipRendererParams, AgSeriesVisibilityChange, FormatterPropertyType, ISeriesMarker, HighlightState as PublicHighlightState } from 'ag-charts-types';
import type { HighlightChangeEvent, HighlightNodeDatum, LegendItemClickEvent, LegendItemDoubleClickEvent } from '../../core/eventsHub';
import type { AxisFormattableLabel } from '../../module/axisContext';
import type { ModuleContext, SeriesContext } from '../../module/moduleContext';
import { ModuleMap } from '../../module/moduleMap';
import type { SeriesOptionInstance, SeriesOptionModule } from '../../module/optionsModuleTypes';
import { BBox } from '../../scene/bbox';
import { Group, TranslatableGroup } from '../../scene/group';
import type { Node } from '../../scene/node';
import type { Point } from '../../scene/point';
import type { Path } from '../../scene/shape/path';
import type { PlacedLabel, PointLabelDatum } from '../../scene/util/labelPlacement';
import { LRUCache } from '../../util/lruCache';
import { type DistantObject } from '../../util/nearest';
import type { TypedEvent, TypedEventListener } from '../../util/observable';
import { Observable } from '../../util/observable';
import type { ChartAnimationPhase } from '../chartAnimationPhase';
import type { ChartAxis } from '../chartAxis';
import { ChartAxisDirection } from '../chartAxisDirection';
import type { ChartMode } from '../chartMode';
import type { DataController } from '../data/dataController';
import type { DataModel, ProcessedData } from '../data/dataModel';
import type { ChartLegendDatum, ChartLegendType } from '../legend/legendDatum';
import type { SeriesType } from '../mapping/types';
import type { Marker } from '../marker/marker';
import type { TooltipContent, TooltipStructuredContent } from '../tooltip/tooltip';
import { HighlightState, type SeriesProperties } from './seriesProperties';
import type { SeriesGrouping } from './seriesStateManager';
import type { SeriesTooltip } from './seriesTooltip';
import type { INodeEvent, ISeries, NodeDataDependencies, SeriesNodeDatum, SeriesNodeEventTypes } from './seriesTypes';
import { type ShapeFillBBox } from './shapeUtil';
export interface SeriesDataEvent {
    readonly dataModel: DataModel<any, any, any>;
    readonly processedData: ProcessedData<any>;
}
/** Modes of matching user interactions to rendered nodes (e.g. hover or click) */
export declare enum SeriesNodePickMode {
    /** Pick matches based upon pick coordinates being inside a matching shape/marker. */
    EXACT_SHAPE_MATCH = 0,
    /** Pick matches based upon distance to ideal position */
    NEAREST_NODE = 1,
    /** Pick matches based upon distance from axis */
    AXIS_ALIGNED = 2
}
export type SeriesNodePickIntent = 'tooltip' | 'highlight' | 'highlight-tooltip' | 'context-menu' | 'event';
export type SeriesNodePickMatch = {
    datum: SeriesNodeDatum<unknown>;
    distance: number;
};
export type PickFocusInputs = {
    readonly datumIndex: number;
    readonly datumIndexDelta: number;
    readonly otherIndex: number;
    readonly otherIndexDelta: number;
    readonly seriesRect?: BBox;
};
export type PickFocusOutputs = {
    datumIndex: number;
    datum: SeriesNodeDatum<unknown>;
    otherIndex?: number;
    bounds: BBox | Path;
    movedBounds?: BBox;
    clipFocusBox: boolean;
};
export type PickResult = {
    pickMode: SeriesNodePickMode;
    datums: SeriesNodeDatum<unknown>[];
    distance: number;
};
export type INodeEventConstructor<TDatum extends SeriesNodeDatum<unknown>, TSeries extends Series<any, TDatum, object, any>, TEvent extends string = SeriesNodeEventTypes> = new <T extends TEvent>(type: T, event: Event, { datum }: TDatum, series: TSeries) => INodeEvent<T>;
export declare class SeriesNodeEvent<TDatum extends SeriesNodeDatum<unknown>, TEvent extends string = SeriesNodeEventTypes> implements INodeEvent<TEvent> {
    readonly type: TEvent;
    readonly event: Event;
    readonly datum: unknown;
    readonly seriesId: string;
    defaultPrevented: boolean;
    constructor(type: TEvent, event: Event, nodeDatum: TDatum, series: ISeries<unknown, TDatum, unknown, unknown>);
    preventDefault(): void;
}
export type SeriesNodeDataContext<I, S = SeriesNodeDatum<I>, L = S> = {
    itemId: string;
    nodeData: S[];
    labelData: L[];
};
export type SeriesModuleMap = ModuleMap<SeriesOptionModule, SeriesOptionInstance, SeriesContext>;
export type SeriesDirectionKeysMapping<P extends SeriesProperties<any>> = {
    [key in ChartAxisDirection | FormatterPropertyType]?: (keyof P & string)[];
};
export declare class SeriesGroupingChangedEvent implements TypedEvent {
    series: Series<unknown, any, object, any>;
    seriesGrouping: SeriesGrouping | undefined;
    type: string;
    constructor(series: Series<unknown, any, object, any>, seriesGrouping: SeriesGrouping | undefined);
}
export type SeriesConstructorOpts<TProps extends SeriesProperties<any>> = {
    moduleCtx: ModuleContext;
    pickModes: SeriesNodePickMode[];
    propertyKeys?: SeriesDirectionKeysMapping<TProps>;
    propertyNames?: SeriesDirectionKeysMapping<TProps>;
    canHaveAxes?: boolean;
    usesPlacedLabels?: boolean;
};
export type UnknownSeries = Series<unknown, SeriesNodeDatum<unknown>, object, SeriesProperties<object>>;
export declare abstract class Series<TDatumIndex, TDatum extends SeriesNodeDatum<TDatumIndex>, TOpts extends object, TProps extends SeriesProperties<TOpts>, TLabel = TDatum, TContext extends SeriesNodeDataContext<TDatumIndex, TDatum, TLabel> = SeriesNodeDataContext<TDatumIndex, TDatum, TLabel>> extends Observable implements ISeries<TDatumIndex, TDatum, TProps, TLabel> {
    protected cleanup: CleanupRegistry;
    abstract readonly properties: TProps;
    pickModes: SeriesNodePickMode[];
    usesPlacedLabels: boolean;
    protected hasChangesOnHighlight: boolean;
    get pickModeAxis(): 'main' | 'main-category' | undefined;
    seriesGrouping: SeriesGrouping | undefined;
    protected readonly NodeEvent: INodeEventConstructor<TDatum, any>;
    readonly internalId: string;
    get id(): string;
    readonly canHaveAxes: boolean;
    get type(): SeriesType;
    readonly contentGroup: TranslatableGroup;
    readonly highlightGroup: TranslatableGroup;
    readonly annotationGroup: TranslatableGroup;
    readonly labelGroup: TranslatableGroup;
    chart?: {
        mode: ChartMode;
        isMiniChart: boolean;
        seriesRect?: BBox;
    };
    axes: {
        [K in ChartAxisDirection]?: ChartAxis;
    };
    directions: ChartAxisDirection[];
    private readonly propertyKeys;
    private readonly propertyNames;
    protected nodeDataRefresh: boolean;
    protected readonly moduleMap: SeriesModuleMap;
    protected _data?: any[];
    protected _chartData?: any[];
    private readonly datumCallbackCache;
    connectsToYAxis: boolean;
    get focusable(): boolean;
    get data(): any[] | undefined;
    set visible(newVisibility: boolean);
    get visible(): boolean;
    get hasData(): boolean;
    get tooltipEnabled(): boolean | undefined;
    protected onDataChange(): void;
    setOptionsData(input: unknown[]): void;
    setChartData(input: unknown[]): void;
    private onSeriesGroupingChange;
    getBandScalePadding(): {
        inner: number;
        outer: number;
    };
    protected readonly ctx: ModuleContext;
    constructor(seriesOpts: SeriesConstructorOpts<TProps>);
    attachSeries(seriesContentNode: Group, seriesNode: Group, annotationNode: Group | undefined): void;
    detachSeries(seriesContentNode: Group | undefined, seriesNode: Group, annotationNode: Group | undefined): void;
    declarationOrder: number;
    private _broughtToFront;
    setSeriesIndex(index: number, forceUpdate?: boolean): boolean;
    setZIndex(zIndex: number): void;
    renderToOffscreenCanvas(): boolean;
    readonly events: EventEmitter<{
        'data-update': SeriesDataEvent;
        'data-processed': SeriesDataEvent;
    }>;
    addEventListener(type: 'seriesVisibilityChange', listener: (e: AgSeriesVisibilityChange) => void): void;
    addEventListener(type: 'seriesNodeClick', listener: (e: SeriesNodeEvent<any>) => void): void;
    addEventListener(type: 'seriesNodeDoubleClick', listener: (e: SeriesNodeEvent<any>) => void): void;
    addEventListener(type: string, listener: TypedEventListener): void;
    removeEventListener(type: 'seriesVisibilityChange', listener: (e: AgSeriesVisibilityChange) => void): void;
    removeEventListener(type: 'seriesNodeClick', listener: (e: SeriesNodeEvent<any>) => void): void;
    removeEventListener(type: 'seriesNodeDoubleClick', listener: (e: SeriesNodeEvent<any>) => void): void;
    removeEventListener(type: string, listener: TypedEventListener): void;
    hasEventListener(type: 'seriesVisibilityChange'): boolean;
    hasEventListener(type: 'seriesNodeClick'): boolean;
    hasEventListener(type: 'seriesNodeDoubleClick'): boolean;
    hasEventListener(type: string): boolean;
    addChartEventListeners(): void;
    updatedDomains(): void;
    destroy(): void;
    abstract resetAnimation(chartAnimationPhase: ChartAnimationPhase): void;
    private getPropertyValues;
    getKeys(direction: ChartAxisDirection): string[];
    getKeyProperties(direction: ChartAxisDirection): (keyof TProps & string)[];
    getNames(direction: ChartAxisDirection): (string | undefined)[];
    getFormatterContext(property: FormatterPropertyType): Array<{
        seriesId: string;
        key: string;
        name: string | undefined;
    }>;
    protected resolveKeyDirection(direction: ChartAxisDirection): ChartAxisDirection;
    getDomain(direction: ChartAxisDirection): any[];
    getRange(direction: ChartAxisDirection, visibleRange: [number, number]): any[];
    getVisibleItems(_xVisibleRange: [number, number], _yVisibleRange: [number, number] | undefined, _minVisibleItems: number): number;
    abstract dataCount(): number;
    abstract getSeriesDomain(direction: ChartAxisDirection): any[];
    abstract getSeriesRange(_direction: ChartAxisDirection, _visibleRange: [number, number]): any[];
    abstract processData(dataController: DataController): Promise<void> | void;
    abstract createNodeData(): TContext | undefined;
    markNodeDataDirty(): void;
    private visibleMaybeChanged;
    abstract update(opts: {
        seriesRect?: BBox;
    }): Promise<void> | void;
    getOpacity(): number;
    protected getHighlightState(datum: HighlightNodeDatum | undefined, isHighlight?: boolean, datumIndex?: TDatumIndex, legendItemValues?: string[]): HighlightState;
    protected getHighlightStateString(datum: HighlightNodeDatum | undefined, isHighlight?: boolean, datumIndex?: TDatumIndex, legendItemValues?: string[]): PublicHighlightState;
    protected onChangeHighlight(event: HighlightChangeEvent): void;
    bringToFront(): boolean;
    protected isSeriesHighlighted(highlightedDatum: HighlightNodeDatum | undefined, _legendItemValues?: string[]): boolean;
    protected isItemHighlighted(highlightedDatum?: HighlightNodeDatum, datumIndex?: TDatumIndex): boolean | undefined;
    protected getHighlightStyle(isHighlight?: boolean, datumIndex?: TDatumIndex, legendItemValues?: string[]): Partial<TOpts & {
        fill: import("ag-charts-types").AgColorType;
        fillOpacity: number;
        stroke: string;
        strokeWidth: number;
        strokeOpacity: number;
        lineDash: number[];
        lineDashOffset: number;
        opacity: number;
    }>;
    protected abstract hasItemStylers(): boolean;
    protected getModuleTooltipParams(): object;
    abstract getTooltipContent(datumIndex: TDatumIndex, removeThisDatum: TDatum | undefined): TooltipContent | undefined;
    protected _pickNodeCache: LRUCache<string, PickResult | undefined>;
    pickNodes(point: Point, intent: SeriesNodePickIntent, exactMatchOnly?: boolean): PickResult | undefined;
    protected pickNodesExactShape(point: Point): SeriesNodeDatum<unknown>[];
    protected pickNodeClosestDatum(_point: Point): SeriesNodePickMatch | undefined;
    pickNodeNearestDistantObject<T extends Node & DistantObject>(point: Point, items: Iterable<T>): SeriesNodePickMatch | undefined;
    protected pickNodeMainAxisFirst(_point: Point, _requireCategoryAxis: boolean): SeriesNodePickMatch | undefined;
    getLabelData(): (TLabel & PointLabelDatum)[];
    updatePlacedLabelData(_labels: PlacedLabel<TLabel>[]): void;
    private readonly fireEventWrapper;
    protected fireEvent<TEvent extends TypedEvent>(event: TEvent): void;
    fireNodeClickEvent(event: Event, datum: TDatum): boolean;
    fireNodeDoubleClickEvent(event: Event, datum: TDatum): boolean;
    createNodeContextMenuActionEvent(event: Event, datum: TDatum): INodeEvent<'nodeContextMenuAction'>;
    onLegendInitialState(legendType: ChartLegendType, initialState: AgInitialStateLegendOptions | undefined): void;
    onLegendItemClick(event: LegendItemClickEvent): void;
    onLegendItemDoubleClick(event: LegendItemDoubleClickEvent): void;
    abstract getLegendData<T extends ChartLegendType>(legendType: T): ChartLegendDatum<T>[];
    abstract getLegendData(legendType: ChartLegendType): ChartLegendDatum<ChartLegendType>[];
    protected toggleSeriesItem(enabled: boolean, legendType: ChartLegendType, itemId: string | number | undefined, legendItemName: string | undefined, legendEvent?: {
        legendItemName?: string;
    }): void;
    isEnabled(): boolean;
    getModuleMap(): SeriesModuleMap;
    createModuleContext(): SeriesContext;
    protected getAxisValueText(axis: ChartAxis, source: 'tooltip', value: any, datum: any, key: string, legendItemName: string | undefined): string;
    protected getLabelText<TParams extends object>(value: any, datum: any, key: string, property: FormatterPropertyType, domain: any[], label: AxisFormattableLabel<AgChartLabelFormatterParams<any> & RequireOptional<TParams>>, baseParams: RequireOptional<TParams> & Omit<AgChartLabelFormatterParams<any>, 'seriesId'>): string;
    getMarkerStyle<TParams>(marker: ISeriesMarker<TParams> & {
        fillGradientDefaults: RequiredInternalAgGradientColor;
        fillPatternDefaults: RequiredInternalAgPatternColor;
        fillImageDefaults: RequiredInternalAgImageFill;
    }, { datumIndex, datum, point }: Partial<TDatum>, params?: TParams, isHighlight?: boolean, defaultOverrideStyle?: AgSeriesMarkerStyle & {
        size: number;
    }, inheritedStyle?: AgSeriesMarkerStyle, checkForHighlight?: boolean): AgSeriesMarkerStyle & {
        size: number;
    };
    protected applyMarkerStyle(style: AgSeriesMarkerStyle, markerNode: Marker, point: {
        x: number;
        y: number;
        size?: number;
        focusSize?: number;
    } | undefined, fillBBox?: ShapeFillBBox, { applyTranslation, selected }?: {
        applyTranslation?: boolean | undefined;
        selected?: boolean | undefined;
    }): void;
    protected _nodeDataDependencies?: NodeDataDependencies;
    get nodeDataDependencies(): NodeDataDependencies;
    protected checkResize(newSeriesRect?: BBox): boolean;
    pickFocus(_opts: PickFocusInputs): PickFocusOutputs | undefined;
    resetDatumCallbackCache(): void;
    cachedDatumCallback<T>(id: any, fn: () => T): T | undefined;
    private cachedCallWithContext;
    callWithContext<F extends AnyFn>(fn: F, ...params: Parameters<F>): ReturnType<F>;
    protected formatTooltipWithContext<P extends AgSeriesTooltipRendererParams<any>, Tooltip extends SeriesTooltip<P>>(tooltip: Tooltip, content: TooltipStructuredContent, params: RequireOptional<P>): TooltipContent;
    abstract getCategoryValue(datumIndex: TDatumIndex): any;
    abstract datumIndexForCategoryValue(categoryValue: any): TDatumIndex | undefined;
    minTimeInterval(): number | undefined;
}
