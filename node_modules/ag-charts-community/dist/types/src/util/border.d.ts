import type { StrokeOptions } from 'ag-charts-types';
import { BaseProperties } from './properties';
export declare class Border extends BaseProperties implements StrokeOptions {
    readonly node: {
        stroke?: string | object;
        strokeOpacity: number;
        strokeWidth: number;
    };
    enabled: boolean;
    stroke: string;
    strokeOpacity: number;
    strokeWidth: number;
    constructor(node: {
        stroke?: string | object;
        strokeOpacity: number;
        strokeWidth: number;
    });
}
