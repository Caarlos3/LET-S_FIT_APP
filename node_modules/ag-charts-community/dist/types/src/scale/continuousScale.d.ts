import { AbstractScale } from './abstractScale';
import type { NormalizedDomain } from './scale';
export declare abstract class ContinuousScale<D extends number | Date, I = number> extends AbstractScale<D, number, I> {
    domain: D[];
    range: number[];
    static is(value: unknown): value is ContinuousScale<any, any>;
    static readonly defaultTickCount = 5;
    readonly defaultTickCount = 5;
    protected defaultClamp: boolean;
    protected transform?(x: number): number;
    protected transformInvert?(x: number): D;
    protected constructor(domain?: D[], range?: number[]);
    abstract toDomain(value: number): D;
    normalizeDomains(...domains: D[][]): NormalizedDomain<D>;
    calcBandwidth(smallestInterval?: number, minWidth?: 1 | 0): number;
    convert(value: D | number, options?: {
        clamp?: boolean;
    }): number;
    invert(x: number, _nearest?: boolean): any;
    protected getPixelRange(): number;
}
export declare function normalizeContinuousDomains<D extends number | Date>(...domains: D[][]): NormalizedDomain<D>;
