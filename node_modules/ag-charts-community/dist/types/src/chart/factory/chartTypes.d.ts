export type ChartType = 'cartesian' | 'polar' | 'topology' | 'standalone';
declare class ChartTypes extends Map<string, ChartType | 'unknown'> {
    get(seriesType: string): "unknown" | ChartType;
    isCartesian(seriesType: string): boolean;
    isPolar(seriesType: string): boolean;
    isTopology(seriesType: string): boolean;
    isStandalone(seriesType: string): boolean;
    get seriesTypes(): string[];
    get cartesianTypes(): string[];
    get polarTypes(): string[];
    get topologyTypes(): string[];
    get standaloneTypes(): string[];
}
declare class ChartDefaults extends Map<ChartType, object> {
    set(chartType: ChartType, defaults: object): this;
}
export declare const chartTypes: ChartTypes;
export declare const publicChartTypes: ChartTypes;
export declare const chartDefaults: ChartDefaults;
export {};
