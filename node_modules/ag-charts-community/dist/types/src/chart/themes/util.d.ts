import type { RequiredInternalAgGradientColor, RequiredInternalAgImageFill, RequiredInternalAgPatternColor } from 'ag-charts-core';
import type { AgCartesianChartOptions, AgHighlightOptions, AgHighlightStyleOptions, AgMultiSeriesHighlightOptions, LabelBoxOptions, WithThemeParams } from 'ag-charts-types';
type CartesianAxis = Exclude<AgCartesianChartOptions['axes'], undefined>[0];
export declare const DIRECTION_SWAP_AXES: WithThemeParams<[CartesianAxis, CartesianAxis]>;
export declare const SAFE_FILL_OPERATION: any;
export declare const SAFE_FILLS_OPERATION: any;
export declare const SAFE_STROKE_FILL_OPERATION: any;
export declare const SAFE_RANGE2_OPERATION: any;
export declare const FILL_GRADIENT_LINEAR_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_LINEAR_HIERARCHY_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_LINEAR_SHADED_DEFAULTS: (key: string) => WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_RADIAL_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_RADIAL_REVERSED_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_RADIAL_SERIES_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_RADIAL_REVERSED_SERIES_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_GRADIENT_CONIC_DEFAULTS: WithThemeParams<RequiredInternalAgGradientColor>;
export declare const FILL_PATTERN_DEFAULTS: WithThemeParams<RequiredInternalAgPatternColor>;
export declare const FILL_PATTERN_HIERARCHY_DEFAULTS: {
    fill: {
        $path: (string | {
            $palette: string;
        })[];
    };
    stroke: {
        $path: (string | {
            $palette: string;
        })[];
    };
    width: number | import("ag-charts-types").Operation;
    height: number | import("ag-charts-types").Operation;
    pattern: import("ag-charts-types").AgPatternName | import("ag-charts-types").Operation;
    type: "pattern" | import("ag-charts-types").Operation;
    backgroundFill: string | import("ag-charts-types").Operation;
    backgroundFillOpacity: number | import("ag-charts-types").Operation;
    rotation: number | import("ag-charts-types").Operation;
    padding: number | import("ag-charts-types").Operation;
    strokeWidth: number | import("ag-charts-types").Operation;
    scale: number | import("ag-charts-types").Operation;
    fillOpacity: number | import("ag-charts-types").Operation;
    strokeOpacity: number | import("ag-charts-types").Operation;
    path?: string | import("ag-charts-types").Operation | undefined;
};
export declare const FILL_IMAGE_DEFAULTS: WithThemeParams<RequiredInternalAgImageFill>;
export declare function getSequentialColors(colors: {
    [key: string]: string;
}): Record<string | number, string[]>;
export declare const LABEL_BOXING_DEFAULTS: WithThemeParams<LabelBoxOptions>;
export declare function multiSeriesHighlightStyle(hasFill?: boolean): WithThemeParams<AgMultiSeriesHighlightOptions<AgHighlightStyleOptions>>;
export declare function singleSeriesHighlightStyle(hasFill?: boolean): WithThemeParams<AgHighlightOptions<AgHighlightStyleOptions>>;
export declare const LEGEND_CONTAINER_THEME: any;
export {};
