import type { FontFamily, FontSize, FontStyle, FontWeight, Opacity, Padding, PixelSize, TextSegment } from 'ag-charts-types';
import { type MeasureOptions } from '../../util/textMeasurer';
import { BBox } from '../bbox';
import type { IScene, NodeOptions, RenderContext } from '../node';
import { Shape, type ShapeColor } from './shape';
export interface TextSizeProperties {
    fontFamily?: FontFamily;
    fontSize: FontSize;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    lineHeight?: number;
    textBaseline?: CanvasTextBaseline;
    textAlign?: CanvasTextAlign;
}
export interface TextBoxingProperties {
    cornerRadius?: PixelSize;
    padding?: Padding;
    fill?: ShapeColor;
    fillOpacity?: Opacity;
    border?: {
        enabled?: boolean;
        stroke?: ShapeColor;
        strokeWidth?: PixelSize;
        strokeOpacity?: Opacity;
    };
}
export declare class Text<D = any> extends Shape<D> {
    static readonly className = "Text";
    private static readonly debug;
    private static readonly defaultFontSize;
    private richText?;
    private textMap?;
    x: number;
    y: number;
    private lines;
    private onTextChange;
    text?: string | TextSegment[];
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    fontSize: number;
    fontFamily?: string;
    textAlign: CanvasTextAlign;
    textBaseline: CanvasTextBaseline;
    lineHeight?: number;
    private boxing?;
    private boxPadding;
    private readonly trimText;
    constructor(options?: NodeOptions & {
        trimText?: boolean;
    });
    static computeBBox(lines: string | string[], x: number, y: number, opts: MeasureOptions, useGlyphIndependentMeasurements?: boolean): BBox;
    protected computeBBox(useGlyphIndependentMeasurements?: boolean): BBox;
    getBBox(useGlyphIndependentMeasurements?: boolean): BBox;
    getPlainText(): string;
    getTextMeasureBBox(): BBox;
    isPointInPath(x: number, y: number): boolean;
    setScene(scene?: IScene): void;
    private generateTextMap;
    render(renderCtx: RenderContext): void;
    markDirty(property?: string): void;
    private renderText;
    protected executeFill(ctx: CanvasRenderingContext2D): void;
    protected executeStroke(ctx: CanvasRenderingContext2D): void;
    private renderLines;
    setFont(props: TextSizeProperties): void;
    setAlign(props: {
        textAlign: CanvasTextAlign;
        textBaseline: CanvasTextBaseline;
    }): void;
    setBoxing(props: TextBoxingProperties): void;
    getBoxingProperties(): TextBoxingProperties;
    toSVG(): {
        elements: SVGElement[];
        defs?: SVGElement[];
    } | undefined;
}
declare const RotatableText_base: new (...args: any[]) => import("../transformable").RotatableType<Text<any>>;
export declare class RotatableText extends RotatableText_base {
}
declare const TransformableText_base: new (...args: any[]) => import("../transformable").RotatableType<import("../transformable").TranslatableType<Text<any>>>;
export declare class TransformableText extends TransformableText_base {
}
export {};
