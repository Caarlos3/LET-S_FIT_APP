import type { FromToFns } from '../../motion/fromToMotion';
import type { Group, TranslatableGroup } from '../../scene/group';
import type { Line } from '../../scene/shape/line';
import type { Rect } from '../../scene/shape/rect';
import type { RotatableText } from '../../scene/shape/text';
export declare enum NiceMode {
    TickAndDomain = 0,
    TicksOnly = 1,
    Off = 2
}
export interface TickDatum {
    index: number;
    tickLabel: string | undefined;
    tick: any;
    tickId: string;
    translation: number;
    textUntruncated: string | undefined;
    primary: boolean;
}
export interface AxisLineDatum {
    tickId: string;
    offset: number;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    stroke: string | undefined;
    strokeWidth: number;
    lineDash: number[] | undefined;
}
export interface AxisFillDatum {
    tickId: string;
    x1: number;
    x2: number;
    y1: number;
    y2: number;
    fill: string | undefined;
    fillOpacity: number | undefined;
}
export interface AxisAnimationContext {
    visible: boolean;
    min: number;
    max: number;
}
interface AxisGroupDatum {
    rotation: number;
    rotationCenterX: number;
    rotationCenterY: number;
    translationX: number;
    translationY: number;
}
export interface AxisLabelDatum {
    tickId: string;
    x: number;
    y: number;
    rotationCenterX: number;
    rotationCenterY: number;
    rotation: number;
    range: number[];
}
export declare function prepareAxisAnimationContext(axis: {
    range: number[];
}): AxisAnimationContext;
export declare function prepareAxisAnimationFunctions(ctx: AxisAnimationContext): {
    tick: FromToFns<Line, any, AxisLineDatum>;
    line: FromToFns<Line, any, AxisLineDatum>;
    label: FromToFns<RotatableText, Partial<Omit<AxisLabelDatum, "range">>, AxisLabelDatum>;
    group: FromToFns<TranslatableGroup, any, AxisGroupDatum>;
};
export declare function resetAxisGroupFn(): (_node: Group, datum: AxisGroupDatum) => {
    translationX: number;
    translationY: number;
};
export declare function resetAxisLabelSelectionFn(): (_node: RotatableText, datum: AxisLabelDatum) => {
    x: number;
    y: number;
    rotationCenterX: number;
    rotationCenterY: number;
    rotation: number;
};
export declare function resetAxisLineSelectionFn(): (_node: Line, datum: AxisLineDatum) => {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
};
export declare function resetAxisFillSelectionFn(): (_node: Rect, datum: AxisFillDatum) => {
    x: number;
    y: number;
    width: number;
    height: number;
};
export {};
