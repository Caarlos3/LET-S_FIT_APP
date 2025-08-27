import type { InternalAgColorType, InternalAgGradientColor } from 'ag-charts-core';
import type { AgImageFill, AgPatternColor } from 'ag-charts-types';
export declare function isGradientFill(fill: any): fill is InternalAgGradientColor;
export declare function isGradientFillArray(fills: any): fills is InternalAgColorType[];
export declare function isStringFillArray(fills: any): fills is string[];
export declare function isPatternFill(fill: any): fill is AgPatternColor;
export declare function isImageFill(fill: any): fill is AgImageFill;
export declare function isGradientOrPatternFill(fill: any): fill is InternalAgGradientColor | AgPatternColor;
