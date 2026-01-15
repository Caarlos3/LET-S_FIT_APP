import type { AgCartesianAxisPosition, AgCartesianCrossLineLabelOptions, AgCrossLineLabelPosition, FontStyle, FontWeight } from 'ag-charts-types';
import { type Scale } from '../../scale/scale';
import { Group } from '../../scene/group';
import { BaseProperties } from '../../util/properties';
import { type CrossLine, type CrossLineType } from './crossLine';
import type { CrossLineLabelPosition } from './crossLineLabelPosition';
declare class CartesianCrossLineLabel extends BaseProperties implements AgCartesianCrossLineLabelOptions {
    enabled?: boolean;
    text?: string;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontSize: number;
    fontFamily: string;
    /**
     * The padding between the label and the line.
     */
    padding: number;
    /**
     * The color of the labels.
     */
    color?: string;
    position?: CrossLineLabelPosition;
    rotation?: number;
    parallel?: boolean;
}
export declare class CartesianCrossLine extends BaseProperties implements CrossLine<CartesianCrossLineLabel> {
    static readonly className = "CrossLine";
    readonly id: string;
    enabled?: boolean;
    type: CrossLineType;
    range?: [unknown, unknown];
    value?: unknown;
    defaultColorRange: string[];
    fill: string;
    fillOpacity?: number;
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    lineDash?: [];
    label: CartesianCrossLineLabel;
    scale?: Scale<any, number>;
    clippedRange: [number, number];
    gridLength: number;
    position: AgCartesianAxisPosition;
    get defaultLabelPosition(): AgCrossLineLabelPosition;
    readonly rangeGroup: Group<unknown>;
    readonly lineGroup: Group<unknown>;
    readonly labelGroup: Group<unknown>;
    private readonly crossLineRange;
    private readonly crossLineLabel;
    private data;
    private startLine;
    private endLine;
    constructor();
    private _isRange;
    update(visible: boolean): void;
    calculateLayout(visible: boolean): void;
    private updateNodes;
    private updateRangeNode;
    private updateLabel;
    private get anchor();
    private positionLabel;
    private computeLabelSize;
    calculatePadding(into: Partial<Record<AgCrossLineLabelPosition, number>>): void;
}
export {};
