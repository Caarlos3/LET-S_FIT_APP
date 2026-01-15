import { type PlainObject } from 'ag-charts-core';
export interface VertexInterface {
}
export interface OptionsGraphInterface {
    readonly palette: PlainObject;
    addEdge(from: VertexInterface, to: VertexInterface, edge?: string): void;
    addVertex(value: unknown): VertexInterface;
    findNeighbour(vertex: VertexInterface, edge: string): unknown;
    findNeighbourValue(vertex: VertexInterface, edge: string): unknown;
    findNeighbourWithValue(vertex: VertexInterface, value: unknown, edge?: string): VertexInterface | undefined;
    findVertexAtPath(path: Array<string>): VertexInterface | undefined;
    getResolvedPath(path: Array<string>): unknown;
    getParamValue(path: string): unknown;
    getPathArray(vertex: VertexInterface): Array<string>;
    getVertexValue(vertex: VertexInterface): unknown;
    graftAndResolveOrphan(context: VertexInterface, branch: VertexInterface): unknown;
    graftConfig(target: VertexInterface, configPathArray: Array<string>, ignorePaths: Set<string>): void;
    graftObject(target: VertexInterface, object: PlainObject, overridesPathArrays?: Array<Array<string> | undefined>): void;
    graftValue(target: VertexInterface, path: string, operation: unknown, value: unknown): void;
    hasThemeOverride(path: Array<string>): boolean;
    hasUserOption(path: Array<string>): boolean;
    neighboursWithEdgeValue(vertex: VertexInterface, edge: string): Array<VertexInterface> | undefined;
    removeEdges(vertex: VertexInterface, edge: string): void;
    resolveValue$1(path: Array<string>): unknown;
    resolveVertexValue(vertex: VertexInterface, valueVertex: VertexInterface): unknown;
}
export declare const PATH_EDGE = "path";
export declare const PATH_ARRAY_EDGE = "pathArray";
export declare const DEFAULTS_EDGE = "default";
export declare const OVERRIDES_EDGE = "override";
export declare const USER_OPTIONS_EDGE = "user";
export declare const OPERATION_EDGE = "operation";
export declare const OPERATION_VALUE_EDGE = "operationValue";
export declare const DEPENDENCY_EDGE = "dependency";
export declare const AUTO_ENABLE_EDGE = "autoEnable";
export declare const AUTO_ENABLE_VALUE_EDGE = "autoEnableValue";
export declare function isRatio(value: unknown): value is number;
export declare function hasPathSafe(object: PlainObject, path: string[]): boolean;
export declare function getPathSafe(object: PlainObject, path: string[]): unknown;
export declare function setPathSafe(object: PlainObject, path: (string | number)[], value: unknown): void;
export declare function getPathLastIndexIndex(pathArray: Array<string>): number;
export declare function getPathLastIndex(pathArray: Array<string>): number;
export declare function resolvePath(currentPath: string[], path: string, variables?: PlainObject): string[] | typeof UNRESOLVABLE_PATH;
export declare const UNRESOLVABLE_PATH: unique symbol;
export declare const RESOLVED_TO_BRANCH: unique symbol;
