import { type InternalAgColorType } from 'ag-charts-core';
import type { AgDonutSeriesOptions, AgDonutSeriesStyle, AgPieSeriesStyle } from 'ag-charts-types';
import type { ModuleContext } from '../../../module/moduleContext';
import { BBox } from '../../../scene/bbox';
import { Group, TranslatableGroup } from '../../../scene/group';
import type { Point } from '../../../scene/point';
import { Selection } from '../../../scene/selection';
import { Sector } from '../../../scene/shape/sector';
import { Text } from '../../../scene/shape/text';
import { ChartAxisDirection } from '../../chartAxisDirection';
import type { DataController } from '../../data/dataController';
import type { CategoryLegendDatum, ChartLegendType } from '../../legend/legendDatum';
import { Marker } from '../../marker/marker';
import { type TooltipContent } from '../../tooltip/tooltip';
import type { DataModelSeriesNodeDatum } from '../dataModelSeries';
import { SeriesNodeEvent, type SeriesNodePickMatch } from '../series';
import type { SeriesNodeEventTypes } from '../seriesTypes';
import type { DonutInnerLabel } from './donutSeriesProperties';
import { DonutSeriesProperties } from './donutSeriesProperties';
import { type PolarAnimationData, PolarSeries } from './polarSeries';
declare class PieDonutSeriesNodeEvent<TEvent extends string = SeriesNodeEventTypes> extends SeriesNodeEvent<PieDonutNodeDatum, TEvent> {
    readonly angleKey: string;
    readonly radiusKey?: string;
    readonly calloutLabelKey?: string;
    readonly sectorLabelKey?: string;
    constructor(type: TEvent, nativeEvent: Event, datum: PieDonutNodeDatum, series: DonutSeries);
}
interface PieDonutLabelDatum {
    readonly text: string;
    readonly textAlign: CanvasTextAlign;
    readonly textBaseline: CanvasTextBaseline;
    hidden: boolean;
    collisionTextAlign?: CanvasTextAlign;
    collisionOffsetY: number;
    box?: BBox;
}
interface PieDonutNodeDatum extends DataModelSeriesNodeDatum {
    readonly radius: number;
    readonly innerRadius: number;
    readonly outerRadius: number;
    readonly angleValue: number;
    readonly radiusValue?: number;
    readonly startAngle: number;
    readonly endAngle: number;
    readonly midAngle: number;
    readonly midCos: number;
    readonly midSin: number;
    readonly calloutLabel?: PieDonutLabelDatum;
    readonly sectorLabel?: {
        readonly text: string;
    };
    readonly sectorFormat: {
        [key in keyof Omit<Required<PieDonutSeriesStyle>, 'fill'>]: PieDonutSeriesStyle[key];
    } & {
        fill?: InternalAgColorType;
    };
    readonly legendItem?: {
        key: string;
        text: string;
    };
    readonly legendItemValue?: string;
    enabled: boolean;
}
interface PieDonutSeriesStyle extends AgDonutSeriesStyle, AgPieSeriesStyle {
}
export declare class DonutSeries extends PolarSeries<PieDonutNodeDatum, AgDonutSeriesOptions, DonutSeriesProperties, Sector> {
    static readonly className: string;
    static readonly type: string;
    properties: DonutSeriesProperties;
    private phantomNodeData;
    private get calloutNodeData();
    readonly backgroundGroup: TranslatableGroup;
    private noVisibleData;
    private readonly previousRadiusScale;
    private readonly radiusScale;
    protected phantomGroup: Group<unknown>;
    private readonly phantomSelection;
    private readonly calloutLabelGroup;
    private readonly calloutLabelSelection;
    readonly zerosumRingsGroup: Group<unknown>;
    readonly zerosumOuterRing: Marker;
    readonly zerosumInnerRing: Marker;
    readonly innerLabelsGroup: Group<unknown>;
    readonly innerCircleGroup: Group<unknown>;
    readonly innerLabelsSelection: Selection<Text, DonutInnerLabel>;
    readonly innerCircleSelection: Selection<Marker, {
        radius: number;
    }>;
    private readonly angleScale;
    private oldTitle?;
    surroundingRadius?: number;
    constructor(moduleCtx: ModuleContext);
    attachSeries(seriesContentNode: Group, seriesNode: Group, annotationNode: Group | undefined): void;
    detachSeries(seriesContentNode: Group | undefined, seriesNode: Group, annotationNode: Group | undefined): void;
    setZIndex(zIndex: number): void;
    protected nodeFactory(): Sector;
    getSeriesDomain(direction: ChartAxisDirection): any[];
    processData(dataController: DataController): Promise<void>;
    maybeRefreshNodeData(): void;
    private getProcessedDataValues;
    createNodeData(): {
        itemId: string;
        nodeData: PieDonutNodeDatum[];
        labelData: PieDonutNodeDatum[];
        phantomNodeData: PieDonutNodeDatum[] | undefined;
    } | undefined;
    private getLabelContent;
    private getLabels;
    private getTextAlignment;
    private getNodeFill;
    private getFillParams;
    private getSectorFormat;
    getInnerRadius(): number;
    getOuterRadius(): number;
    updateRadiusScale(resize: boolean): void;
    private getTitleTranslationY;
    update({ seriesRect }: {
        seriesRect: BBox;
    }): void;
    private updateTitleNodes;
    private updateNodeMidPoint;
    private updateSelections;
    private updateGroupSelection;
    private updateInnerCircleSelection;
    private updateNodes;
    updateCalloutLineNodes(): void;
    private getLabelOverflow;
    private bboxIntersectsSurroundingSeries;
    private computeCalloutLabelCollisionOffsets;
    private updateCalloutLabelNodes;
    computeLabelsBBox(options: {
        hideWhenNecessary: boolean;
    }, seriesRect: BBox): BBox | null;
    private updateSectorLabelNodes;
    private updateInnerLabelNodes;
    private updateZerosumRings;
    protected readonly NodeEvent: typeof PieDonutSeriesNodeEvent;
    protected pickNodeClosestDatum(point: Point): SeriesNodePickMatch | undefined;
    getTooltipContent(datumIndex: number): TooltipContent | undefined;
    private legendItemSymbol;
    getLegendData(legendType: ChartLegendType): CategoryLegendDatum[];
    setLegendState(enabledItems: boolean[]): void;
    animateEmptyUpdateReady(_data?: PolarAnimationData): void;
    animateWaitingUpdateReady(): void;
    animateClearingUpdateEmpty(): void;
    getDatumId(datumIndex: number): string;
    protected hasItemStylers(): boolean;
}
export {};
