import type { FormatterParams } from 'ag-charts-types';
import type { ModuleContext } from '../../module/moduleContext';
import { LinearScale } from '../../scale/linearScale';
import type { LogScale } from '../../scale/logScale';
import type { FormatDatumParams } from '../chartAxis';
import type { AxisTickFormatParams } from './axis';
import { CartesianAxis } from './cartesianAxis';
export declare class NumberAxis extends CartesianAxis<LinearScale | LogScale, number> {
    static readonly className: string;
    static readonly type: string;
    min?: number;
    max?: number;
    constructor(moduleCtx: ModuleContext, scale?: LinearScale | LogScale);
    hasDefinedDomain(): boolean;
    normaliseDataDomain(d: number[]): {
        domain: number[];
        clipped: boolean;
    };
    protected createDatumFormatter(_domain: number[], ticks: number[]): ((value: any) => string | undefined) | undefined;
    tickFormatParams(_domain: number[], _ticks: number[], fractionDigits?: number): AxisTickFormatParams;
    datumFormatParams(value: any, params: FormatDatumParams, fractionDigits?: number): FormatterParams<any>;
}
