import type { AgBaseCrossLineLabelOptions, AgCrossLineLabelPosition, AgTimeInterval, AgTimeIntervalUnit } from 'ag-charts-types';
import type { Scale } from '../../scale/scale';
import type { Group } from '../../scene/group';
import type { ChartAxisDirection } from '../chartAxisDirection';
export type CrossLineType = 'line' | 'range';
interface ICrossLine {
    type: CrossLineType;
    range?: [unknown, unknown];
    value?: unknown;
}
export declare function getCrossLineValue(crossLine: ICrossLine): unknown;
export declare function validateCrossLineValue(crossLine: ICrossLine, scale: Scale<any, number>): boolean;
export interface CrossLine<LabelType = AgBaseCrossLineLabelOptions> {
    calculateLayout?(visible: boolean, reversedAxis?: boolean): void;
    calculatePadding?(padding: Partial<Record<AgCrossLineLabelPosition, number>>): void;
    clippedRange: [number, number];
    enabled?: boolean;
    defaultColorRange: string[];
    fill?: string;
    fillOpacity?: number;
    gridLength: number;
    lineGroup: Group;
    rangeGroup: Group;
    id: string;
    label: LabelType;
    labelGroup: Group;
    lineDash?: number[];
    range?: [any, any];
    scale?: Scale<any, number, number | AgTimeInterval | AgTimeIntervalUnit>;
    stroke?: string;
    strokeOpacity?: number;
    strokeWidth?: number;
    type: CrossLineType;
    update(visible: boolean): void;
    value?: any;
    set(properties: object): void;
}
export interface PolarCrossLine<LabelType = AgBaseCrossLineLabelOptions> extends CrossLine<LabelType> {
    direction: ChartAxisDirection;
    parallelFlipRotation: number;
    regularFlipRotation: number;
    sideFlag: 1 | -1;
}
export {};
