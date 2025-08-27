import type { AgBarHighlightStyleOptions, AgGradientColor, AgGradientColorBounds, AgGradientType, AgHighlightStyleOptions, AgImageFill, AgLineHighlightStyleOptions, AgPatternColor, BorderOptions, CssColor, FillOptions, FontOptions, LabelBoxOptions, LineDashOptions, StrokeOptions } from 'ag-charts-types';
import { type OptionsDefs } from '../utils/validation';
export declare const themeOperator: (value: unknown) => boolean;
export declare const colorStopsOrderValidator: import("../utils/validation").Validator;
export declare const gradientColorStops: import("../utils/validation").Validator;
export declare const gradientStrict: import("../utils/validation").Validator;
export interface InternalAgGradientColor extends AgGradientColor {
    /** Format of the gradient */
    gradient?: AgGradientType;
    /** The domain of the color gradient, defaults to item. */
    bounds?: AgGradientColorBounds;
    /** Reverse the order of colour stops. */
    reverse?: boolean;
}
export interface InternalAgPatternColor extends AgPatternColor {
    /** Padding for the shape in the pattern unit. */
    padding?: number;
}
export interface InternalAgImageFill extends AgImageFill {
}
export type RequiredInternalAgImageFill = Required<Omit<InternalAgImageFill, 'url' | 'width' | 'height'>> & Pick<Partial<InternalAgImageFill>, 'url'> & Pick<InternalAgImageFill, 'width' | 'height'>;
export type RequiredInternalAgPatternColor = Required<Omit<InternalAgPatternColor, 'path'>> & Pick<InternalAgPatternColor, 'path'>;
export type RequiredInternalAgGradientColor = Required<InternalAgGradientColor>;
export type InternalAgColorType = CssColor | InternalAgGradientColor | InternalAgPatternColor | InternalAgImageFill;
export type RequiredInternalAgColorType = CssColor | RequiredInternalAgGradientColor | RequiredInternalAgPatternColor | (RequiredInternalAgImageFill & Pick<InternalAgImageFill, 'url'>);
export declare const strokeOptionsDef: OptionsDefs<StrokeOptions>;
export declare const fillGradientDefaults: import("../utils/validation").Validator;
export declare const fillPatternDefaults: import("../utils/validation").Validator;
export declare const fillImageDefaults: import("../utils/validation").Validator;
export declare const colorUnion: import("../utils/validation").Validator;
export declare const fillOptionsDef: OptionsDefs<FillOptions>;
export declare const lineDashOptionsDef: OptionsDefs<LineDashOptions>;
export declare const barHighlightOptionsDef: OptionsDefs<AgBarHighlightStyleOptions>;
export declare const lineHighlightOptionsDef: OptionsDefs<AgLineHighlightStyleOptions>;
export declare const shapeHighlightOptionsDef: OptionsDefs<AgHighlightStyleOptions>;
export declare function highlightOptionsDef<T>(itemHighlightOptionsDef: T): {
    enabled: import("../utils/validation").Validator;
    range: import("../utils/validation").Validator;
    highlightedItem: T;
    unhighlightedItem: T;
};
export declare function multiSeriesHighlightOptionsDef<I, S>(itemHighlightOptionsDef: I, seriesHighlightOptionsDef: S): {
    enabled: import("../utils/validation").Validator;
    range: import("../utils/validation").Validator;
    highlightedItem: I;
    unhighlightedItem: I;
    highlightedSeries: S;
    unhighlightedSeries: S;
    bringToFront: import("../utils/validation").Validator;
};
export declare const googleFont: import("../utils/validation").Validator;
export declare const fontFamilyFull: import("../utils/validation").Validator;
export declare const fontOptionsDef: OptionsDefs<FontOptions>;
export declare const paddingOptions: import("../utils/validation").Validator;
export declare const padding: import("../utils/validation").Validator;
export declare const borderOptionsDef: OptionsDefs<BorderOptions>;
export declare const labelBoxOptionsDef: OptionsDefs<LabelBoxOptions>;
