import { type BoxBounds } from 'ag-charts-core';
import type { AgAutoScaledAxes, AgZoomRange, AgZoomRatio } from 'ag-charts-types';
import type { AxisZoomState, EventsHub, ZoomState } from '../../core/eventsHub';
import { type Scale } from '../../scale/scale';
import type { BBox } from '../../scene/bbox';
import { BaseManager } from '../../util/baseManager';
import type { TypedEvent } from '../../util/observable';
import { ChartAxisDirection } from '../chartAxisDirection';
import type { ISeries } from '../series/seriesTypes';
export interface DefinedZoomState {
    x: ZoomState;
    y: ZoomState;
}
export type ZoomMemento = {
    rangeX?: AgZoomRange;
    rangeY?: AgZoomRange;
    ratioX?: AgZoomRatio;
    ratioY?: AgZoomRatio;
    autoScaledAxes?: AgAutoScaledAxes;
};
export type ChartAxisLike = {
    id: string;
    direction: ChartAxisDirection;
    visibleRange: [number, number];
    scale: Scale<any, any>;
    range: [number, number];
    boundSeries: ISeries<any, any, any>[];
    min?: number;
    max?: number;
};
/**
 * Manages the current zoom state for a chart. Tracks the requested zoom from distinct dependents
 * and handles conflicting zoom requests.
 */
export declare class ZoomManager extends BaseManager {
    private readonly eventsHub;
    private readonly fireChartEvent;
    mementoOriginatorKey: "zoom";
    private readonly axisZoomManagers;
    private readonly state;
    private axes;
    private didLayoutAxes;
    private readonly autoScaleYAxis;
    private lastRestoredState;
    private independentAxes;
    private navigatorModule;
    private zoomModule;
    private pendingMemento;
    constructor(eventsHub: EventsHub, fireChartEvent: <TEvent extends TypedEvent>(event: TEvent) => void);
    createMemento(): ZoomMemento;
    guardMemento(blob: unknown, messages: string[]): blob is ZoomMemento | undefined;
    restoreMemento(version: string, mementoVersion: string, memento: ZoomMemento | undefined): void;
    updateAxes(axes: Array<ChartAxisLike>): void;
    setIndependentAxes(independent?: boolean): void;
    setAutoScaleYAxis(enabled: boolean, padding: number): void;
    setNavigatorEnabled(enabled?: boolean): void;
    setZoomModuleEnabled(enabled?: boolean): void;
    isNavigatorEnabled(): boolean;
    isZoomEnabled(): boolean;
    updateZoom(callerId: string, newZoom?: AxisZoomState): void;
    updateAxisZoom(callerId: string, axisId: string, newZoom?: ZoomState): void;
    resetZoom(callerId: string): void;
    resetAxisZoom(callerId: string, axisId: string): void;
    setAxisManuallyAdjusted(_callerId: string, axisId: string): void;
    updatePrimaryAxisZoom(callerId: string, direction: ChartAxisDirection, newZoom?: ZoomState): void;
    panToBBox(callerId: string, seriesRect: BBox, target: BoxBounds): boolean;
    fireZoomPanStartEvent(callerId: string): void;
    extendToEnd(callerId: string, direction: ChartAxisDirection, extent: number): void;
    extendWith(callerId: string, direction: ChartAxisDirection, fn: (end: Date | number) => Date | number): void;
    updateWith(callerId: string, direction: ChartAxisDirection, fn: (start: Date | number, end: Date | number) => [Date | number, Date | number]): void;
    getZoom(): AxisZoomState | undefined;
    getAxisZoom(axisId: string): ZoomState;
    getAxisZooms(): Record<string, {
        direction: ChartAxisDirection;
        zoom: ZoomState | undefined;
    }>;
    getRestoredZoom(): AxisZoomState | undefined;
    getPrimaryAxisId(direction: ChartAxisDirection): string | undefined;
    isVisibleItemsCountAtLeast(zoom: DefinedZoomState, minVisibleItems: number): boolean;
    private getMementoRanges;
    private getAutoScaleYZoom;
    private autoScaleYZoom;
    private applyChanges;
    private readonly boundFireOnceChartEvent;
    private fireOnceChartEvent;
    private getRangeDirection;
    private rangeToRatio;
    private getPrimaryAxis;
    private getDomainExtents;
    private getDomainPixelExtents;
    private getDefinedZoom;
    private zoomBounds;
    private primaryAxisZoom;
    private combinedAxisZoom;
}
