import { BaseProperties } from '../../util/properties';
import type { TickInterval } from './axisTick';
export declare class AxisInterval<S> extends BaseProperties {
    placement?: 'on' | 'between';
    step?: TickInterval<S>;
    values?: any[];
    minSpacing?: number;
    maxSpacing?: number;
}
