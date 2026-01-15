import type { HighlightNodeDatum } from '../../../core/eventsHub';
import type { ModuleContext } from '../../../module/moduleContext';
import type { AnimationValue } from '../../../motion/animation';
import { BBox } from '../../../scene/bbox';
import { Group } from '../../../scene/group';
import { type Node } from '../../../scene/node';
import { Selection } from '../../../scene/selection';
import { Path } from '../../../scene/shape/path';
import { Text } from '../../../scene/shape/text';
import { StateMachine } from '../../../util/stateMachine';
import type { ChartAnimationPhase } from '../../chartAnimationPhase';
import { ChartAxisDirection } from '../../chartAxisDirection';
import { DataModelSeries, type DataModelSeriesConstructorOpts, type DataModelSeriesNodeDatum } from '../dataModelSeries';
import { type PickFocusInputs, SeriesNodePickMode } from '../series';
import { type SeriesProperties } from '../seriesProperties';
import type { ShapeFillBBox } from '../shapeUtil';
export type PolarAnimationState = 'empty' | 'ready' | 'waiting' | 'clearing';
export type PolarAnimationEvent = {
    update: PolarAnimationData;
    updateData: undefined;
    highlight: undefined;
    highlightMarkers: undefined;
    resize: PolarAnimationData;
    clear: {
        seriesRect?: BBox;
    };
    reset: undefined;
    skip: undefined;
};
export type PolarAnimationData = {
    duration?: number;
};
type PolarSeriesProperties = {
    angleKey: string;
    angleName?: string;
    radiusKey?: string;
    radiusName?: string;
};
export declare const DEFAULT_POLAR_DIRECTION_KEYS: {
    angle: "angleKey"[];
    radius: "radiusKey"[];
};
export declare const DEFAULT_POLAR_DIRECTION_NAMES: {
    angle: "angleName"[];
    radius: "radiusName"[];
};
export type UnknownPolarSeries = PolarSeries<DataModelSeriesNodeDatum, object, SeriesProperties<object> & PolarSeriesProperties, Node>;
export declare abstract class PolarSeries<TDatum extends DataModelSeriesNodeDatum & {
    legendItemValue?: string;
}, TOpts extends object, TProps extends SeriesProperties<TOpts> & PolarSeriesProperties, TNode extends Node> extends DataModelSeries<TDatum, TOpts, TProps> {
    directions: ChartAxisDirection[];
    protected itemGroup: Group<unknown>;
    getItemNodes(): TNode[];
    protected nodeData: TDatum[];
    getNodeData(): TDatum[] | undefined;
    protected itemSelection: Selection<TNode, TDatum>;
    protected labelSelection: Selection<Text, TDatum>;
    protected highlightSelection: Selection<TNode, TDatum>;
    animationResetFns?: {
        item?: (node: TNode, datum: TDatum) => AnimationValue & Partial<TNode>;
        label?: (node: Text, datum: TDatum) => AnimationValue & Partial<Text>;
    };
    /**
     * The center of the polar series (for example, the center of a pie).
     * If the polar chart has multiple series, all of them will have their
     * center set to the same value as a result of the polar chart layout.
     * The center coordinates are not supposed to be set by the user.
     */
    centerX: number;
    centerY: number;
    /**
     * The maximum radius the series can use.
     * This value is set automatically as a result of the polar chart layout
     * and is not supposed to be set by the user.
     */
    radius: number;
    protected animationState: StateMachine<PolarAnimationState, PolarAnimationEvent>;
    constructor({ categoryKey, pickModes, canHaveAxes, animationResetFns, ...opts }: {
        moduleCtx: ModuleContext;
        categoryKey: string | undefined;
        pickModes?: SeriesNodePickMode[];
        canHaveAxes?: boolean;
        animationResetFns?: {
            item?: (node: TNode, datum: TDatum) => AnimationValue & Partial<TNode>;
            label?: (node: Text, datum: TDatum) => AnimationValue & Partial<Text>;
        };
    } & Partial<DataModelSeriesConstructorOpts<TProps>>);
    setZIndex(zIndex: number): void;
    resetAnimation(phase: ChartAnimationPhase): void;
    protected abstract nodeFactory(): TNode;
    protected labelFactory(): Text;
    addChartEventListeners(): void;
    getInnerRadius(): number;
    surroundingRadius?: number;
    computeLabelsBBox(_options: {
        hideWhenNecessary: boolean;
    }, _seriesRect: BBox): BBox | null | Promise<BBox | null>;
    protected getShapeFillBBox(): ShapeFillBBox;
    protected resetAllAnimation(): void;
    protected animateEmptyUpdateReady(_data: PolarAnimationData): void;
    protected animateWaitingUpdateReady(_data: PolarAnimationData): void;
    protected animateReadyHighlight(_data: unknown): void;
    protected animateReadyHighlightMarkers(_data: unknown): void;
    protected animateReadyResize(_data: PolarAnimationData): void;
    protected animateClearingUpdateEmpty(_data: PolarAnimationData): void;
    protected computeFocusBounds(opts: PickFocusInputs): BBox | Path | undefined;
    getSeriesRange(_direction: ChartAxisDirection, _visibleRange: [any, any]): [number, number];
    protected isSeriesHighlighted(highlightedDatum: HighlightNodeDatum | undefined, legendItemValues?: string[]): boolean;
}
export {};
