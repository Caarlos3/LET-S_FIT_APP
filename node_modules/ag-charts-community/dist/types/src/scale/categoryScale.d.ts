import { BandScale } from './bandScale';
import type { NormalizedDomain, ScaleTickParams, ScaleTickResult } from './scale';
export declare class CategoryScale<D, I = number> extends BandScale<D, I> {
    static is(value: unknown): value is CategoryScale<any, any>;
    readonly type: "category";
    readonly defaultTickCount = 0;
    /**
     * Maps datum to its index in the {@link domain} array.
     * Used to check for duplicate data (not allowed).
     */
    protected index: Map<D, number>;
    protected indexInitialized: boolean;
    /**
     * Contains unique data only.
     */
    protected _domain: D[];
    set domain(values: D[]);
    get domain(): D[];
    get bands(): D[];
    normalizeDomains(...domains: D[][]): NormalizedDomain<D>;
    toDomain(_value: number): D | undefined;
    invert(position: number, nearest?: boolean): D | undefined;
    ticks(params: ScaleTickParams<I>, domain?: D[], visibleRange?: [number, number]): ScaleTickResult<D>;
    findIndex(value: D): number | undefined;
}
