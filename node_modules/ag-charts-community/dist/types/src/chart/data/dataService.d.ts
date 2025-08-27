import type { AgDataSourceCallbackParams } from 'ag-charts-types';
import type { EventsHub } from '../../core/eventsHub';
import type { AnimationManager } from '../interaction/animationManager';
type DataSourceCallback = (params: AgDataSourceCallbackParams<unknown>) => Promise<unknown>;
export interface DataServiceRestoredData {
    params: AgDataSourceCallbackParams;
    data: unknown;
}
export declare class DataService<D extends object> {
    private readonly eventsHub;
    private readonly caller;
    private readonly animationManager;
    dispatchOnlyLatest: boolean;
    dispatchThrottle: number;
    requestThrottle: number;
    private dataSourceCallback?;
    private isLoadingInitialData;
    private isLoadingData;
    private latestRequest?;
    private freshRequests;
    private requestCounter;
    private pendingData;
    private readonly debug;
    private throttledFetch;
    private throttledDispatch;
    constructor(eventsHub: EventsHub, caller: {
        readonly context?: unknown;
    }, animationManager: AnimationManager);
    updateCallback(dataSourceCallback: DataSourceCallback): void;
    clearCallback(): void;
    load(params: AgDataSourceCallbackParams): void;
    isLazy(): boolean;
    isLoading(): boolean;
    getData(): Promise<DataServiceRestoredData | undefined>;
    restoreData(data: DataServiceRestoredData): void;
    private createThrottledFetch;
    private createThrottledDispatch;
    private dispatch;
    private fetch;
}
export {};
