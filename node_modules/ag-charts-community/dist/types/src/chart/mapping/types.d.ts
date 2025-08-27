import type { AgCartesianChartOptions, AgCartesianSeriesOptions, AgChartOptions, AgGaugeOptions, AgPolarChartOptions, AgPolarSeriesOptions, AgStandaloneChartOptions, AgStandaloneSeriesOptions, AgTopologyChartOptions, AgTopologySeriesOptions } from 'ag-charts-types';
export type SeriesOptionsTypes = AgCartesianSeriesOptions | AgPolarSeriesOptions | AgTopologySeriesOptions | AgStandaloneSeriesOptions | AgGaugeOptions;
export type SeriesType = SeriesOptionsTypes['type'];
export declare function isAgCartesianChartOptions(input: AgChartOptions): input is AgCartesianChartOptions;
export declare function isAgPolarChartOptions(input: AgChartOptions): input is AgPolarChartOptions;
export declare function isAgTopologyChartOptions(input: AgChartOptions): input is AgTopologyChartOptions;
export declare function isAgStandaloneChartOptions(input: AgChartOptions): input is AgStandaloneChartOptions;
