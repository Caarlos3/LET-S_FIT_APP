import type { RequireOptional } from 'ag-charts-core';
import type { AgContextMenuItem, AgContextMenuItemAlways, AgContextMenuItemLegendItem, AgContextMenuItemSeriesArea, AgContextMenuItemShowOn } from 'ag-charts-types';
import type { CategoryLegendDatum } from '../legend/legendDatum';
import type { ISeries, SeriesNodeDatum } from '../series/seriesTypes';
type InferTEvent<T extends AgContextMenuItemShowOn> = Extract<AgContextMenuItem, {
    showOn?: T;
    action?: (...args: any[]) => any;
}> extends {
    action?: (event: infer E) => any;
} ? E : never;
type ContextShowOnMapRule = {
    [K in AgContextMenuItemShowOn]: {
        event: InferTEvent<K>;
        callback: (param: InferTEvent<K>) => void;
    };
};
export interface ContextShowOnMap extends ContextShowOnMapRule {
    always: {
        event: InferTEvent<'always'>;
        callback: (param: InferTEvent<'always'>) => void;
        context: undefined;
    };
    'legend-item': {
        event: InferTEvent<'legend-item'>;
        callback: (param: InferTEvent<'legend-item'>) => void;
        context: {
            legendItem: CategoryLegendDatum | undefined;
        };
    };
    'series-area': {
        event: InferTEvent<'series-area'>;
        callback: (param: InferTEvent<'series-area'>) => void;
        context: undefined;
    };
    'series-node': {
        event: InferTEvent<'series-node'>;
        callback: (param: InferTEvent<'series-node'>) => void;
        context: {
            pickedSeries: ISeries<any, any, any> | undefined;
            pickedNode: SeriesNodeDatum<unknown> | undefined;
        };
    };
}
export type ContextMenuCallback<K extends AgContextMenuItemShowOn> = ContextShowOnMap[K]['callback'];
/**
 * Merge a union of objects into one object with all the properties. This is just to check at compile-time that
 * ContextMenuItem implements all properties of AgContextMenuItem API contract.
 */
type MergeUnion<T, CanBeUndefined extends keyof T> = {
    [K in T extends any ? keyof T : never]: T extends {
        [P in K]?: infer V;
    } ? K extends CanBeUndefined ? V | undefined : V : never;
};
/**
 * The type of `contextMenu.items[]` recursively references its own type, but our compile-time check only needs a depth
 * of 1. Therefore, limit this depth to 1:
 */
export type ContextMenuItemContractNonRecursive = Omit<MergeUnion<Extract<AgContextMenuItem, object>, 'action'>, 'items'>;
export type ContextMenuItemContract = ContextMenuItemContractNonRecursive & {
    items: ContextMenuItemContractNonRecursive[];
};
type BuiltinItemListKeys = 'defaults';
type ContextMenuBuiltinItemsRules = {
    readonly [K in Exclude<AgContextMenuItem, object | BuiltinItemListKeys>]: RequireOptional<AgContextMenuItem>;
};
type ContextMenuBuiltinItemListsRules = {
    readonly [K in BuiltinItemListKeys]: readonly (keyof ContextMenuBuiltinItemsRules)[];
};
declare class ContextMenuBuiltinItems implements ContextMenuBuiltinItemsRules {
    readonly download: RequireOptional<AgContextMenuItemAlways>;
    readonly 'zoom-to-cursor': RequireOptional<AgContextMenuItemSeriesArea>;
    readonly 'pan-to-cursor': RequireOptional<AgContextMenuItemSeriesArea>;
    readonly 'reset-zoom': RequireOptional<AgContextMenuItemSeriesArea>;
    readonly 'toggle-series-visibility': RequireOptional<AgContextMenuItemLegendItem>;
    readonly 'toggle-other-series': RequireOptional<AgContextMenuItemLegendItem>;
    readonly 'separator': RequireOptional<AgContextMenuItemAlways>;
}
declare class ContextMenuBuiltinItemLists implements ContextMenuBuiltinItemListsRules {
    readonly defaults: readonly (keyof ContextMenuBuiltinItemsRules)[];
}
export declare class ContextMenuBuiltins {
    readonly items: ContextMenuBuiltinItems;
    readonly lists: ContextMenuBuiltinItemLists;
}
export {};
