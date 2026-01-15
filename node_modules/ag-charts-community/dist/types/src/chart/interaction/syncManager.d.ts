import type { EventEmitter } from 'ag-charts-core';
import type { EventsHubMap } from '../../core/eventsHub';
import type { BBox } from '../../scene/bbox';
import type { ChartAxisDirection } from '../chartAxisDirection';
import type { ISeries } from '../series/seriesTypes';
import type { TooltipContent } from '../tooltip/tooltip';
import type { UpdateService } from '../updateService';
import type { HighlightManager } from './highlightManager';
import type { TooltipManager } from './tooltipManager';
import type { ZoomManager } from './zoomManager';
type GroupId = string | symbol;
/** Breaks circular dependencies which occur when importing ChartAxis. */
export type SyncAxisLike = {
    boundSeries: ISeries<any, any, any>[];
    direction: ChartAxisDirection;
    keys: string[];
    reverse?: boolean;
    nice: boolean;
    min?: number;
    max?: number;
};
export type SyncStatus = 'init' | 'domains-calculated' | 'ready';
/** Breaks circular dependencies which occur when importing Chart. */
export type SyncChartLike = {
    id: string;
    axes: SyncAxisLike[];
    series: ISeries<any, any, any>[];
    syncStatus: SyncStatus;
    modulesManager: {
        getModule<R>(module: string): R | undefined;
    };
    seriesAreaBoundingBox: BBox;
    tooltip: {
        enabled: boolean;
    };
    ctx: {
        eventsHub: EventEmitter<EventsHubMap>;
        highlightManager: HighlightManager;
        tooltipManager: TooltipManager;
        updateService: UpdateService;
        zoomManager: ZoomManager;
    };
    getTooltipContent(series: ISeries<unknown, unknown, unknown>, datumIndex: unknown, removeThisDatum: unknown): TooltipContent[];
};
type ChartDomainState = {
    [id: string]: Record<string, unknown[]>;
};
export type SyncDerivedDomain = {
    derived: unknown[];
    sources: ChartDomainState;
    dirty: boolean;
};
export type SyncGroupState = {
    members: Set<SyncChartLike>;
    domains?: {
        [key in 'x' | 'y']?: SyncDerivedDomain;
    };
    domainsByKey?: {
        [key: string]: SyncDerivedDomain;
    };
    domainsByPosition?: {
        [key: string]: SyncDerivedDomain;
    };
};
export declare class SyncManager {
    protected chart: SyncChartLike;
    private static readonly chartsGroups;
    private static readonly DEFAULT_GROUP;
    constructor(chart: SyncChartLike);
    subscribe(groupId?: GroupId): this;
    unsubscribe(groupId?: GroupId): this;
    getChart(): SyncChartLike;
    getGroupState(groupId?: GroupId): SyncGroupState | undefined;
    getGroupMembers(groupId?: GroupId): SyncChartLike[];
    getGroupSiblings(groupId?: GroupId): SyncChartLike[];
    getGroupSyncMode(groupId?: GroupId): "multi-series" | "single-series";
    private get;
}
export {};
