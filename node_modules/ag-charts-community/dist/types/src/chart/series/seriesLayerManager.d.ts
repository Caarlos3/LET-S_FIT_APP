import { Group } from '../../scene/group';
import type { SeriesGrouping } from './seriesStateManager';
interface SeriesConfig {
    internalId: string;
    seriesGrouping: SeriesGrouping | undefined;
    contentGroup: Group;
    bringToFront(): boolean;
    renderToOffscreenCanvas(): boolean;
    type: string;
}
export declare class SeriesLayerManager {
    private readonly seriesRoot;
    private readonly groups;
    private readonly series;
    private expectedSeriesCount;
    private mode;
    constructor(seriesRoot: Group);
    setSeriesCount(count: number): void;
    private getGroupIndex;
    private getGroupType;
    requestGroup(seriesConfig: SeriesConfig): Group<unknown>;
    changeGroup(seriesConfig: SeriesConfig): Group<unknown> | undefined;
    releaseGroup(seriesConfig: SeriesConfig): void;
    private _releaseGroup;
    updateLayerCompositing(): void;
    private lookupIdx;
    destroy(): void;
    private getLowestSeriesZIndex;
}
export {};
