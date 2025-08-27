import { type OptionsGraphInterface, type VertexInterface } from './optionsGraphUtils';
export type Operation = ColorOperation | FontOperation | LocationOperation | LogicOperation | NumericOperation | TransformOperation;
type OperationFns = {
    dependencies?: OperationDependenciesFactory;
    resolve: OperationResolver;
} | OperationResolver;
type OperationDependenciesFactory = (graph: OptionsGraphInterface, vertex: VertexInterface, values: Array<VertexInterface>) => void;
type OperationResolver = (graph: OptionsGraphInterface, vertex: VertexInterface, values: Array<VertexInterface>) => unknown;
export declare function getOperation(value: unknown, keys?: Array<string>): {
    operation: Operation;
    values: any;
} | undefined;
declare enum ColorOperation {
    ForegroundBackgroundMix = "$foregroundBackgroundMix",
    ForegroundOpacity = "$foregroundOpacity",
    Interpolate = "$interpolate",
    IsGradient = "$isGradient",
    IsImage = "$isImage",
    IsPattern = "$isPattern",
    Mix = "$mix"
}
declare enum FontOperation {
    Rem = "$rem"
}
declare enum LogicOperation {
    And = "$and",
    Eq = "$eq",
    GreaterThan = "$greaterThan",
    If = "$if",
    LessThan = "$lessThan",
    Not = "$not",
    Or = "$or",
    Switch = "$switch"
}
declare enum LocationOperation {
    IsUserOption = "$isUserOption",
    IsThemeOverride = "$isThemeOverride",
    MapPalette = "$mapPalette",
    Palette = "$palette",
    Path = "$path",
    PathString = "$pathString",
    Ref = "$ref"
}
declare enum TransformOperation {
    Apply = "$apply",
    ApplyTheme = "$applyTheme",
    FindFirstSiblingNotOperation = "$findFirstSiblingNotOperation",
    Map = "$map",
    Merge = "$merge",
    Omit = "$omit",
    Size = "$size",
    Shallow = "$shallow",
    Value = "$value"
}
declare enum NumericOperation {
    IsEven = "$isEven",
    Mul = "$mul",
    Round = "$round"
}
export declare const operations: Record<Operation, OperationFns>;
export declare function isOperation(value: unknown): value is Operation;
export {};
