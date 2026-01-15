import type { Writeable } from 'ag-charts-core';
import type { FontFamily, FontSize, FontStyle, FontWeight } from 'ag-charts-types';
export interface FontOptions {
    fontSize: FontSize;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontFamily?: FontFamily;
}
export interface MeasureOptions {
    font: FontOptions;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
    lineHeight?: number;
}
export interface LineMetrics {
    width: number;
    height: number;
    lineHeight: number;
}
export interface MultilineMetrics {
    width: number;
    height: number;
    offsetTop: number;
    offsetLeft: number;
    alphabeticBaseline: number;
    lineMetrics: ({
        text: string;
    } & LineMetrics)[];
}
export interface LegacyTextMetrics extends Writeable<TextMetrics> {
    emHeightAscent: number;
    emHeightDescent: number;
}
export interface TextMeasurer {
    textWidth(text: string, estimate?: boolean): number;
    measureText(text: string): LineMetrics;
    measureLines(text: string | string[]): MultilineMetrics;
}
export declare class CachedTextMeasurerPool {
    private static readonly instanceMap;
    static measureText(text: string, options: MeasureOptions): LineMetrics;
    static measureLines(text: string | string[], options: MeasureOptions): MultilineMetrics;
    static getMeasurer(options: MeasureOptions): CachedTextMeasurer;
    static clear(): void;
    private static createFontMeasurer;
}
export declare class CachedTextMeasurer implements TextMeasurer {
    private readonly ctx;
    private readonly measureMap;
    private readonly textMeasurer;
    constructor(ctx: CanvasRenderingContext2D, options: MeasureOptions);
    textWidth(text: string, estimate?: boolean): number;
    measureText(text: string): LineMetrics;
    measureLines(text: string | string[]): MultilineMetrics;
    private cachedCtxMeasureText;
}
export declare class TextUtils {
    static readonly EllipsisChar = "\u2026";
    static readonly defaultLineHeight = 1.15;
    static readonly lineSplitter: RegExp;
    static toFontString({ fontSize, fontStyle, fontWeight, fontFamily }: FontOptions): string;
    static getLineHeight(fontSize: number): number;
    static getHorizontalModifier(textAlign?: CanvasTextAlign): number;
    static getVerticalModifier(textBaseline?: CanvasTextBaseline): number;
}
export declare class SimpleTextMeasurer implements TextMeasurer {
    private readonly measureTextFn;
    private readonly textBaseline;
    private readonly charMap;
    constructor(measureTextFn: (text: string) => LegacyTextMetrics, textBaseline?: CanvasTextBaseline);
    private getMetrics;
    private getMultilineMetrics;
    textWidth(text: string, estimate?: boolean): number;
    measureText(text: string): LineMetrics;
    measureLines(text: string | string[]): MultilineMetrics;
    private charWidth;
}
