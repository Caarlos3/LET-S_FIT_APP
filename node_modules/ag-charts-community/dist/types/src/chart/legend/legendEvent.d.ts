import type { AgChartLegendClickEvent, AgChartLegendDoubleClickEvent } from 'ag-charts-types';
import type { CategoryLegendDatum } from './legendDatum';
type LegendEventState<T extends AgChartLegendClickEvent | AgChartLegendDoubleClickEvent> = {
    apiEvent: T;
    defaultPrevented: boolean;
};
export declare function makeLegendItemEvent<T extends 'click'>(type: T, datum: CategoryLegendDatum, event: Event): LegendEventState<AgChartLegendClickEvent>;
export declare function makeLegendItemEvent<T extends 'dblclick'>(type: T, datum: CategoryLegendDatum, event: Event): LegendEventState<AgChartLegendDoubleClickEvent>;
export {};
