import type { NormalizedDomain, Scale, ScaleTickParams, ScaleType } from './scale';
import { ScaleAlignment } from './scale';
export declare abstract class AbstractScale<D, R, I = number> implements Scale<D, R, I> {
    abstract readonly type: ScaleType;
    abstract readonly defaultTickCount: number;
    abstract domain: D[];
    abstract range: R[];
    abstract normalizeDomains(...domains: D[][]): NormalizedDomain<D>;
    abstract toDomain(value: number): D | undefined;
    abstract convert(value: D, options: {
        clamp?: boolean;
        alignment?: ScaleAlignment;
    }): R;
    abstract invert(value: R, nearest?: boolean): D | undefined;
    ticks(_ticks: ScaleTickParams<I>, _domain?: D[], _visibleRange?: [number, number]): {
        ticks: D[];
        count: number | undefined;
    } | undefined;
    niceDomain(_ticks: ScaleTickParams<I>, domain?: D[]): D[];
    get bandwidth(): number | undefined;
    get step(): number | undefined;
    get inset(): number | undefined;
}
