import { type RequiredInternalAgGradientColor, type RequiredInternalAgImageFill, type RequiredInternalAgPatternColor } from 'ag-charts-core';
import type { AgColorRepeat, AgColorType, AgGradientColorBounds, AgGradientColorStop, AgGradientType, AgImageFillFit, AgPatternName, CssColor, InteractionRange, Opacity, PixelSize } from 'ag-charts-types';
import { BaseProperties } from '../../util/properties';
import type { SeriesTooltip } from './seriesTooltip';
export declare enum HighlightState {
    None = 0,
    Item = 1,
    Series = 2,
    OtherSeries = 3,
    OtherItem = 4
}
type HighlightMixins = {
    fill: AgColorType;
    fillOpacity: number;
    stroke: string;
    strokeWidth: number;
    strokeOpacity: number;
    lineDash: number[];
    lineDashOffset: number;
    opacity: number;
};
type HighlightOptions<TOpts extends object> = Partial<TOpts & HighlightMixins>;
export declare class SeriesItemHighlightStyle extends BaseProperties {
    fill?: string;
    fillOpacity?: number;
    stroke?: string;
    strokeWidth?: number;
    strokeOpacity?: number;
    lineDash?: number[];
    lineDashOffset?: number;
}
export declare class HighlightProperties<TOpts extends object> extends BaseProperties {
    enabled: boolean;
    range: 'tooltip' | 'node';
    bringToFront: boolean;
    readonly highlightedItem: HighlightOptions<TOpts>;
    readonly unhighlightedItem: HighlightOptions<TOpts>;
    readonly highlightedSeries: HighlightOptions<TOpts>;
    readonly unhighlightedSeries: HighlightOptions<TOpts>;
    private getItemHighlightStyle;
    private getSeriesHighlightStyle;
    getStyle(highlightState: HighlightState): HighlightOptions<TOpts>;
}
declare class SeriesHighlightStyle extends BaseProperties {
    strokeWidth?: number;
    dimOpacity?: number;
    enabled?: boolean;
}
declare class TextHighlightStyle extends BaseProperties {
    color?: string;
}
export declare class FillGradientDefaults extends BaseProperties<RequiredInternalAgGradientColor> implements RequiredInternalAgGradientColor {
    type: 'gradient';
    colorStops: AgGradientColorStop[];
    bounds: AgGradientColorBounds;
    gradient: AgGradientType;
    rotation: number;
    reverse: boolean;
}
export declare class FillPatternDefaults extends BaseProperties<RequiredInternalAgPatternColor> implements RequiredInternalAgPatternColor {
    type: 'pattern';
    colorStops: AgGradientColorStop[];
    bounds: AgGradientColorBounds;
    gradient: AgGradientType;
    rotation: number;
    scale: number;
    reverse: boolean;
    path?: string;
    pattern: AgPatternName;
    width: number;
    height: number;
    padding: number;
    fill: CssColor;
    fillOpacity: Opacity;
    backgroundFill: CssColor;
    backgroundFillOpacity: Opacity;
    stroke: CssColor;
    strokeOpacity: number;
    strokeWidth: PixelSize;
}
export declare class FillImageDefaults extends BaseProperties<RequiredInternalAgImageFill> implements RequiredInternalAgImageFill {
    type: 'image';
    url: string;
    rotation: number;
    scale: number;
    backgroundFill: CssColor;
    backgroundFillOpacity: Opacity;
    repeat: AgColorRepeat;
    fit: AgImageFillFit;
}
export declare class HighlightStyle extends BaseProperties {
    deprecated: boolean;
    constructor(deprecated?: boolean);
    readonly item: SeriesItemHighlightStyle;
    readonly series: SeriesHighlightStyle;
    readonly text: TextHighlightStyle;
    set(properties: object): this;
}
export declare abstract class SeriesProperties<T extends object> extends BaseProperties<T> {
    id?: string;
    protected readonly visible: boolean;
    focusPriority?: number;
    showInLegend: boolean;
    cursor: string;
    nodeClickRange: InteractionRange;
    readonly highlight: HighlightProperties<T>;
    readonly highlightStyle: HighlightStyle;
    abstract tooltip: SeriesTooltip<never>;
    context?: unknown;
    handleUnknownProperties(unknownKeys: Set<unknown>, properties: T): void;
}
export {};
