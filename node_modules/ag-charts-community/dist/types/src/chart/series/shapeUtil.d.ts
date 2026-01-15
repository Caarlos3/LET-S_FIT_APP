import type { InternalAgColorType, RequiredInternalAgColorType, RequiredInternalAgGradientColor, RequiredInternalAgImageFill, RequiredInternalAgPatternColor } from 'ag-charts-core';
import type { BBox } from '../../scene/bbox';
import { type GradientParams } from '../../scene/gradient/gradient';
import type { Shape, ShapeColor } from '../../scene/shape/shape';
export type ShapeStyle = Partial<Pick<Shape, 'fill' | 'fillOpacity' | 'stroke' | 'strokeOpacity' | 'strokeWidth' | 'lineDash' | 'lineDashOffset' | 'opacity'>>;
export interface ShapeFillBBox {
    series: BBox;
    axis: BBox;
}
export declare function getShapeFill(fill: InternalAgColorType, defaultGradient: RequiredInternalAgGradientColor, defaultPattern: RequiredInternalAgPatternColor, defaultImage: RequiredInternalAgImageFill): RequiredInternalAgColorType;
export declare function getShapeFill(fill: InternalAgColorType | undefined, defaultGradient: RequiredInternalAgGradientColor, defaultPattern: RequiredInternalAgPatternColor, defaultImage: RequiredInternalAgImageFill): RequiredInternalAgColorType | undefined;
export declare function getShapeStyle<T extends {
    fill?: InternalAgColorType;
}>(style: T, defaultGradient: RequiredInternalAgGradientColor, defaultPattern: RequiredInternalAgPatternColor, defaultImage: RequiredInternalAgImageFill): T;
export declare function getShapeStyle<T extends {
    fill?: InternalAgColorType;
}>(style: T | undefined, defaultGradient: RequiredInternalAgGradientColor, defaultPattern: RequiredInternalAgPatternColor, defaultImage: RequiredInternalAgImageFill): T | undefined;
export declare function applyShapeFillBBox(shape: Shape, fill: ShapeColor | undefined, fillBBox?: ShapeFillBBox, fillParams?: GradientParams): void;
export declare function applyShapeStyle(shape: Shape, style?: ShapeStyle, fillBBox?: ShapeFillBBox, fillParams?: GradientParams): void;
