import { AdjacencyListGraph, type PlainObject, type Vertex } from 'ag-charts-core';
import type { ChartTheme } from '../chart/themes/chartTheme';
import { type OptionsGraphInterface } from './optionsGraphUtils';
export declare const createOptionsGraph: (theme: ChartTheme, options: PlainObject) => OptionsGraph;
export declare function createOptionsGraphFn(theme: ChartTheme, options: PlainObject): OptionsGraph;
/**
 * The OptionsGraph combines the theme config, params, palette, overrides and user options into a graph which can then
 * be resolved down into an object.
 */
export declare class OptionsGraph extends AdjacencyListGraph<unknown, string> implements OptionsGraphInterface {
    private readonly config;
    private readonly userOptions;
    private readonly overrides;
    private readonly internalParams;
    private static readonly EDGE_PRIORITY;
    private static readonly SHALLOW_KEYS;
    private static readonly COMPLEX_KEYS;
    private static readonly ANNOTATIONS_OPTIONS_KEYS;
    readonly palette: PlainObject;
    private readonly root;
    private readonly params;
    private readonly annotations;
    private resolved;
    private resolvedParams;
    private resolvedAnnotations;
    private value$1;
    private readonly cachedPathVertices;
    constructor(config?: PlainObject, userOptions?: PlainObject, params?: PlainObject | undefined, palette?: PlainObject | undefined, overrides?: PlainObject, internalParams?: Map<unknown, unknown>);
    clear(): void;
    resolve(): PlainObject;
    resolveParams(): PlainObject;
    resolveAnnotationThemes(): PlainObject;
    findVertexAtPath(path: Array<string>): Vertex<unknown, unknown> | undefined;
    hasUserOption(path: Array<string>): boolean;
    hasThemeOverride(path: Array<string>): boolean;
    getParamValue(path: string): any;
    getPathArray(vertex: Vertex<unknown>): Array<string>;
    getResolvedPath(path: Array<string>): unknown;
    resolveVertexValue(vertex: Vertex<unknown>, valueVertex: Vertex<unknown>): unknown;
    resolveValue$1(pathArray: Array<string>): unknown;
    graftConfig(target: Vertex<unknown>, configPathArray: Array<string>, ignorePaths: Set<string>): void;
    graftObject(target: Vertex<unknown>, object: PlainObject, overridesPathArrays?: Array<Array<string> | undefined>): void;
    graftValue(target: Vertex<unknown>, path: string, operation: unknown, value: unknown): void;
    graftAndResolveOrphan(context: Vertex<unknown>, branch: Vertex<unknown>): unknown;
    private buildGraphFromObject;
    private buildGraphAutoEnable;
    private getVertexChildrenByKey;
    private buildGraphFromValue;
    private buildShallowGraphFromValue;
    private buildGraphFromOperation;
    private readonly EMPTY_PATH_ARRAY_VERTEX;
    private buildGraphFromOperationValue;
    private buildDependencyGraph;
    private resolveVertex;
    private resolveVertexInEdgePriority;
    private resolveVertexValueInternal;
    private resolveVertexAutoEnable;
    private resolveVertexChildren;
    private resolveVertexDependencies;
    private graftAndResolveChildren;
    private resolveValueOrSymbol;
}
