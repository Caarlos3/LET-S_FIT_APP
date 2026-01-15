import type { DeepPartial } from 'ag-charts-core';
import type { AgChartInstance, AgChartOptions, AgChartState, DownloadOptions, ImageDataUrlOptions } from 'ag-charts-types';
import type { MementoCaretaker } from '../api/state/memento';
import type { LicenseManager } from '../module/enterpriseModule';
import { type ChartInternalOptionMetadata, type ChartSpecialOverrides } from '../module/optionsModule';
import type { Chart } from './chart';
import type { DataServiceRestoredData } from './data/dataService';
export interface AgChartProxy extends AgChartInstance {
    chart?: Chart;
}
export interface FactoryApi {
    caretaker: MementoCaretaker;
    create(userOptions: AgChartOptions, processedOverrides?: Partial<AgChartOptions>, specialOverrides?: ChartSpecialOverrides, optionsMetadata?: ChartInternalOptionMetadata, data?: DataServiceRestoredData): AgChartProxy;
    update(opts: AgChartOptions, chart?: AgChartInstance, specialOverrides?: ChartSpecialOverrides, apiStartTime?: number): AgChartProxy;
    updateUserDelta(chart: AgChartInstance, deltaOptions: DeepPartial<AgChartOptions>, apiStartTime?: number): void;
}
/**
 * Proxy class, to allow library users to keep a stable reference to their chart, even if we need
 * to switch concrete class (e.g. when switching between CartesianChart vs. PolarChart).
 */
export declare class AgChartInstanceProxy implements AgChartProxy {
    private readonly factoryApi;
    private readonly licenseManager?;
    static readonly chartInstances: WeakMap<Chart, AgChartInstanceProxy>;
    chart?: Chart;
    releaseChart?: () => void;
    constructor(chart: Chart, factoryApi: FactoryApi, licenseManager?: LicenseManager | undefined);
    update(options: AgChartOptions): Promise<void>;
    updateDelta(deltaOptions: DeepPartial<AgChartOptions>): Promise<void>;
    getOptions(): import("ag-charts-types").AgCartesianChartOptions<any, unknown> | import("ag-charts-types").AgPolarChartOptions<any, unknown> | import("ag-charts-types").AgTopologyChartOptions<any, unknown> | import("ag-charts-types").AgStandaloneChartOptions<any, unknown>;
    waitForUpdate(): Promise<void>;
    download(opts?: DownloadOptions): Promise<void>;
    __toSVG(opts?: DownloadOptions): Promise<string | undefined>;
    getImageDataURL(opts?: ImageDataUrlOptions): Promise<string>;
    getState(): Record<"version", string> & Record<string, any>;
    setState(state: AgChartState): Promise<void>;
    resetAnimations(): void;
    skipAnimations(): void;
    destroy(): void;
    private prepareResizedChart;
    private getEnabledOriginators;
    private setStateOriginators;
}
