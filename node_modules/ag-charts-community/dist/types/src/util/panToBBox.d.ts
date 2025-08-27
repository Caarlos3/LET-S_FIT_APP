import { type BoxBounds } from 'ag-charts-core';
type Ratios = {
    min: number;
    max: number;
};
type XYRatios = {
    x: Ratios;
    y: Ratios;
};
export declare function calcPanToBBoxRatios(viewportBBox: BoxBounds, ratios: Partial<XYRatios>, targetBBox: BoxBounds): XYRatios;
export {};
