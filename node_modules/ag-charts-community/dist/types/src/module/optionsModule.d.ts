import { type ChartModuleDefinition, type DeepPartial } from 'ag-charts-core';
import { type AgChartOptions, type AgChartThemeParams } from 'ag-charts-types';
import { type ChartTheme } from '../chart/themes/chartTheme';
import { type CloneOptions } from '../util/json';
export interface ChartSpecialOverrides {
    document: Document;
    window: Window;
    styleContainer?: HTMLElement;
}
export interface ChartInternalOptionMetadata {
    presetType?: 'price-volume' | 'gauge-preset' | 'sparkline';
    pool?: boolean;
    domMode?: 'normal' | 'minimal';
    withDragInterpretation?: boolean;
}
export declare class ChartOptions<T extends AgChartOptions = AgChartOptions> {
    static readonly OPTIONS_CLONE_OPTS_SLOW: CloneOptions;
    static readonly OPTIONS_CLONE_OPTS_FAST: CloneOptions;
    static readonly JSON_DIFF_OPTS: Set<any>;
    private static readonly perfDebug;
    private static readonly FAST_PATH_OPTIONS;
    private static isFastPathDelta;
    activeTheme: ChartTheme;
    processedOptions: T;
    userOptions: Partial<T>;
    processedOverrides: Partial<T>;
    specialOverrides: ChartSpecialOverrides;
    optionMetadata: ChartInternalOptionMetadata;
    themeParameters: AgChartThemeParams;
    annotationThemes: any;
    googleFonts?: Set<string>;
    fastDelta?: DeepPartial<T>;
    chartDef?: ChartModuleDefinition<any>;
    optionsProcessingTime?: number;
    private static readonly debug;
    constructor(currentUserOptions: T | ChartOptions<T> | undefined, newUserOptions: T, processedOverrides: Partial<T>, specialOverrides: Partial<ChartSpecialOverrides>, metadata: ChartInternalOptionMetadata, deltaOptions?: DeepPartial<T> | null, stripSymbols?: boolean, apiStartTime?: number);
    private fastSetup;
    private fastSeriesSetup;
    private slowSetup;
    private validatePluginOptions;
    private validateSeriesOptions;
    private validateAxesOptions;
    diffOptions(other?: ChartOptions): Partial<T>;
    private optionsType;
    private processSeriesOptions;
    private processMiniChartSeriesOptions;
    private getSeriesGroupingOptions;
    private setSeriesGroupingOptions;
    private getSeriesGroupId;
    private getSeriesGrouping;
    private soloSeriesIntegrity;
    private static processFontOptions;
    private processFonts;
    private static removeDisabledOptionJson;
    private removeDisabledOptions;
    private static removeLeftoverSymbolsJson;
    private removeLeftoverSymbols;
    private specialOverridesDefaults;
}
