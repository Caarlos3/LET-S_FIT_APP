import type { AgColorType } from 'ag-charts-types';
import { FillGradientDefaults, FillImageDefaults, FillPatternDefaults, SeriesProperties } from '../seriesProperties';
export declare abstract class HierarchySeriesProperties<T extends object> extends SeriesProperties<T> {
    childrenKey: string;
    sizeKey?: string;
    colorKey?: string;
    colorName?: string;
    fills: AgColorType[];
    readonly fillGradientDefaults: FillGradientDefaults;
    readonly fillPatternDefaults: FillPatternDefaults;
    readonly fillImageDefaults: FillImageDefaults;
    strokes: string[];
    colorRange?: string[];
}
