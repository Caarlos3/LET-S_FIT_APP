import { type AnyFn, CleanupRegistry } from 'ag-charts-core';
import type { AgAxisBoundSeries, AgBaseAxisLabelStyleOptions, AgTimeInterval, AgTimeIntervalUnit, CssColor, DateFormatterStyle, FormatterParams, TextSegment } from 'ag-charts-types';
import type { AxisLayout } from '../../core/eventsHub';
import type { AxisBandDatum, AxisContext, AxisFormattableLabel } from '../../module/axisContext';
import type { AxisOptionModule } from '../../module/axisOptionModule';
import type { ModuleInstance } from '../../module/baseModule';
import type { ModuleContext, ModuleContextWithParent } from '../../module/moduleContext';
import { ModuleMap } from '../../module/moduleMap';
import type { Scale } from '../../scale/scale';
import { BBox } from '../../scene/bbox';
import { Group, TransformableGroup, TranslatableGroup } from '../../scene/group';
import type { Node } from '../../scene/node';
import type { Point } from '../../scene/point';
import { Selection } from '../../scene/selection';
import { type TextBoxingProperties, type TextSizeProperties, TransformableText } from '../../scene/shape/text';
import type { AxisPrimaryTickCount } from '../../util/secondaryAxisTicks';
import type { ChartAnimationPhase } from '../chartAnimationPhase';
import type { AxisGroups, ChartAxis, ChartLayout, FormatDatumParams } from '../chartAxis';
import { ChartAxisDirection } from '../chartAxisDirection';
import type { CrossLine } from '../crossline/crossLine';
import type { ISeries } from '../series/seriesTypes';
import { AxisGridLine } from './axisGridLine';
import { AxisInterval } from './axisInterval';
import { AxisLabel } from './axisLabel';
import { AxisLine } from './axisLine';
import { AxisTick, type TickInterval } from './axisTick';
import type { AnyTimeInterval } from './axisTickGenerator';
import { AxisTitle } from './axisTitle';
import { NiceMode } from './axisUtil';
export interface LabelNodeDatum extends TextSizeProperties, TextBoxingProperties {
    color?: CssColor;
    tickId: string;
    rotation: number;
    text: string | TextSegment[];
    textBaseline: CanvasTextBaseline;
    textUntruncated?: string;
    visible: boolean;
    x: number;
    y: number;
    rotationCenterX: number;
    rotationCenterY: number;
    range: number[];
}
type AxisModuleMap = ModuleMap<AxisOptionModule, ModuleInstance, ModuleContextWithParent<AxisContext>>;
export declare enum AxisGroupZIndexMap {
    TickLines = 0,
    AxisLine = 1,
    TickLabels = 2
}
export type AxisTickFormatParams = {
    type: 'number';
    fractionDigits: number | undefined;
} | {
    type: 'date';
    unit: AgTimeIntervalUnit;
    step: number;
    epoch: Date | undefined;
    truncateDate?: 'year' | 'month' | 'day';
} | {
    type: 'category';
};
interface TickLayout<D, TickLayoutMeta> {
    niceDomain: D[];
    tickDomain: D[];
    ticks: D[];
    rawTickCount: number | undefined;
    fractionDigits: number;
    timeInterval: AnyTimeInterval | undefined;
    bbox?: BBox;
    layout?: TickLayoutMeta;
}
/**
 * A general purpose linear axis with no notion of orientation.
 * The axis is always rendered vertically, with horizontal labels positioned to the left
 * of the axis line by default. The axis can be {@link rotation | rotated} by an arbitrary angle,
 * so that it can be used as a top, right, bottom, left, radial or any other kind
 * of linear axis.
 * The generic `D` parameter is the type of the domain of the axis' scale.
 * The output range of the axis' scale is always numeric (screen coordinates).
 */
export declare abstract class Axis<S extends Scale<D, number, TickInterval<S>> = Scale<any, number, any>, D = any, TickLayoutMeta = any> implements ChartAxis {
    protected readonly moduleCtx: ModuleContext;
    readonly scale: S;
    static readonly defaultTickMinSpacing = 50;
    protected static CrossLineConstructor: new () => CrossLine<any>;
    readonly id: string;
    private _crossLines;
    set crossLines(value: CrossLine[]);
    get crossLines(): CrossLine[];
    context?: unknown;
    nice: boolean;
    /** Reverse the axis scale domain. */
    reverse: boolean;
    keys: string[];
    readonly interval: AxisInterval<unknown>;
    dataDomain: {
        domain: D[];
        clipped: boolean;
    };
    readonly title: AxisTitle;
    /**
     * The length of the grid. The grid is only visible in case of a non-zero value.
     */
    gridLength: number;
    /**
     * The distance between the grid ticks and the axis ticks.
     */
    gridPadding: number;
    /**
     * Is used to avoid collisions between axis labels and series.
     */
    seriesAreaPadding: number;
    get type(): string;
    abstract get direction(): ChartAxisDirection;
    layoutConstraints: ChartAxis['layoutConstraints'];
    boundSeries: ISeries<unknown, unknown, unknown>[];
    includeInvisibleDomains: boolean;
    interactionEnabled: boolean;
    protected readonly axisGroup: Group<unknown>;
    protected readonly tickLineGroup: TransformableGroup;
    protected readonly tickLabelGroup: TransformableGroup;
    protected readonly labelGroup: Group<unknown>;
    readonly gridGroup: TranslatableGroup;
    protected readonly gridFillGroup: Group<unknown>;
    protected readonly gridLineGroup: Group<unknown>;
    protected readonly crossLineRangeGroup: TransformableGroup;
    protected readonly crossLineLineGroup: TransformableGroup;
    protected readonly crossLineLabelGroup: TransformableGroup;
    protected tickLabelGroupSelection: Selection<TransformableText, LabelNodeDatum>;
    readonly line: AxisLine;
    readonly tick: AxisTick;
    readonly gridLine: AxisGridLine;
    readonly label: AxisLabel;
    protected get primaryLabel(): AxisLabel | undefined;
    protected get primaryTick(): AxisTick | undefined;
    isCategoryLike(): boolean;
    defaultTickMinSpacing: number;
    readonly translation: {
        x: number;
        y: number;
    };
    protected readonly layout: Pick<AxisLayout, 'label'>;
    protected axisContext: AxisContext | undefined;
    protected readonly cleanup: CleanupRegistry;
    constructor(moduleCtx: ModuleContext, scale: S);
    resetAnimation(_phase: ChartAnimationPhase): void;
    private isHovering;
    private onMouseMove;
    private attachCrossLine;
    private detachCrossLine;
    destroy(): void;
    private setScaleRange;
    protected updateScale(): void;
    setCrossLinesVisible(visible: boolean): void;
    attachAxis(groups: AxisGroups): void;
    detachAxis(groups: AxisGroups): void;
    attachLabel(axisLabelNode: Node): void;
    range: [number, number];
    visibleRange: [number, number];
    /**
     * Checks if a point or an object is in range.
     * @param value A point (or object's starting point).
     * @param tolerance Expands the range on both ends by this amount.
     */
    inRange(value: number, tolerance?: number): boolean;
    /**
     * Get a point's overflow on the range, expanded to include the non-visible range.
     * @param value Point
     * @returns Overflow
     */
    getRangeOverflow(value: number): number;
    protected createDatumFormatter(_domain: D[], _ticks: D[]): ((value: any) => string | undefined) | undefined;
    protected onGridLengthChange(value: number, prevValue: number): void;
    protected onGridVisibilityChange(): void;
    protected createLabel(): AxisLabel;
    /**
     * Creates/removes/updates the scene graph nodes that constitute the axis.
     */
    update(): void;
    protected getLabelStyles(params: {
        value: string | undefined;
        depth?: number;
    }, additionalStyles?: AgBaseAxisLabelStyleOptions, label?: AxisLabel): {
        border: import("ag-charts-types").BorderOptions & import("../label").LabelBorder;
        color: string | undefined;
        cornerRadius: number | undefined;
        fill: (import("ag-charts-types").AgColorType & string) | undefined;
        fillOpacity: number | undefined;
        fontFamily: (import("ag-charts-types").FontFamilyFull | undefined) & string;
        fontSize: number;
        fontStyle: import("ag-charts-types").FontStyle | undefined;
        fontWeight: import("ag-charts-types").FontWeight | undefined;
        padding: import("ag-charts-types").Padding | undefined;
        spacing: number;
    };
    protected getTickSize(tick?: AxisTick): number;
    processData(): void;
    protected animatable: boolean;
    setDomains(...domains: D[][]): void;
    protected chartLayout?: ChartLayout;
    private unzoomedTickLayoutCache;
    calculateDomain(initialPrimaryTickCount?: AxisPrimaryTickCount): {
        unzoomedTickLayout: TickLayout<D, TickLayoutMeta>;
        domain: D[];
    };
    private tickLayoutCache;
    protected tickLayout: TickLayoutMeta | undefined;
    calculateLayout(initialPrimaryTickCount?: AxisPrimaryTickCount, chartLayout?: ChartLayout): {
        primaryTickCount?: AxisPrimaryTickCount;
        bbox?: BBox;
    };
    private invalidateLayoutCache;
    abstract layoutCrossLines(): void;
    abstract calculateTickLayout(domain: D[], niceMode: NiceMode, visibleRange: [number, number], primaryTickCount?: AxisPrimaryTickCount): {
        niceDomain: D[];
        tickDomain: D[];
        ticks: D[];
        rawTickCount: number | undefined;
        fractionDigits: number;
        timeInterval: AnyTimeInterval | undefined;
        bbox?: BBox;
    };
    abstract hasDefinedDomain(): boolean;
    protected updateCrossLines(): void;
    protected updatePosition(): void;
    protected abstract updateSelections(): void;
    protected abstract updateLabels(): void;
    abstract tickFormatParams(domain: D[], ticks: D[], fractionDigits: number | undefined, timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined): AxisTickFormatParams;
    abstract datumFormatParams(value: any, params: FormatDatumParams, fractionDigits: number | undefined, timeInterval: AgTimeInterval | AgTimeIntervalUnit | undefined, dateStyle: 'long' | 'component'): FormatterParams<any>;
    tickFormatter(domain: D[], ticks: D[], primary: boolean, inputFractionDigits?: number, inputTimeInterval?: AgTimeInterval | AgTimeIntervalUnit, dateStyle?: DateFormatterStyle): (value: any, index: number) => string;
    formatDatum(contextProvider: {
        context?: unknown;
    }, value: any, source: 'tooltip' | 'series-label', seriesId: string, legendItemName: string | undefined, datum: any, key: string): string;
    formatDatum<Params extends object>(contextProvider: {
        context?: unknown;
    } | undefined, value: any, source: 'crosshair' | 'annotation-label', seriesId: undefined, legendItemName: undefined, datum: undefined, key: undefined, domain: undefined, label?: AxisFormattableLabel<Params, FormatterParams<any>>): string;
    formatDatum<Params extends object>(contextProvider: {
        context?: unknown;
    } | undefined, value: any, source: 'tooltip' | 'series-label', seriesId: string, legendItemName: string | undefined, datum: any, key: string, domain: any[], label: AxisFormattableLabel<Params>, labelParams: Params): string;
    getBBox(): BBox;
    private initCrossLine;
    protected hasVisibleSeries(): boolean;
    clipTickLines(x: number, y: number, width: number, height: number): void;
    clipGrid(x: number, y: number, width: number, height: number): void;
    private readonly formatterBoundSeries;
    protected getTitleFormatterParams(domain: D[]): {
        domain: D[];
        direction: ChartAxisDirection;
        boundSeries: AgAxisBoundSeries[];
        defaultValue: string | undefined;
    };
    protected normaliseDataDomain(d: D[]): {
        domain: D[];
        clipped: boolean;
    };
    getLayoutState(): AxisLayout;
    private readonly moduleMap;
    getModuleMap(): AxisModuleMap;
    createModuleContext(): ModuleContextWithParent<AxisContext>;
    createAxisContext(): AxisContext;
    pickBand(point: Point): AxisBandDatum | undefined;
    private isVertical;
    isReversed(): boolean;
    protected cachedCallWithContext<F extends AnyFn>(fn: F, ...params: Parameters<F>): ReturnType<F> | undefined;
    private uncachedCallWithContext;
    private createCallWithContext;
}
export {};
