import { type OptionsDefs } from 'ag-charts-core';
import type { AgPieSeriesOptions, AgPieSeriesThemeableOptions } from 'ag-charts-types';
type UndocumentedOptions = {
    calloutLabel?: {
        itemStyler?: unknown;
    };
    sectorLabel?: {
        itemStyler?: unknown;
    };
};
export declare const pieSeriesThemeableOptionsDef: OptionsDefs<AgPieSeriesThemeableOptions & UndocumentedOptions>;
export declare const pieSeriesOptionsDef: OptionsDefs<AgPieSeriesOptions>;
export {};
