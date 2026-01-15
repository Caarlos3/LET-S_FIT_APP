import type { AgBaseFinancialPresetOptions, AgCartesianChartOptions, AgPriceVolumePreset, DatumDefault } from 'ag-charts-types';
import type { ChartTheme } from '../../chart/themes/chartTheme';
export declare function priceVolume(opts: AgPriceVolumePreset & AgBaseFinancialPresetOptions, _presetTheme: any, getTheme: () => ChartTheme): AgCartesianChartOptions<DatumDefault, never>;
export declare function inlineSwitch<T extends string>(caseName: T, switchCases: {
    [K in T]?: object;
} & {
    default?: object;
}): object | undefined;
