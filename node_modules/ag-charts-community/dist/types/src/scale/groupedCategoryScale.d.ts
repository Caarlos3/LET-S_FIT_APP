import { CategoryScale } from './categoryScale';
import type { NormalizedDomain } from './scale';
export declare class GroupedCategoryScale<D, I = number> extends CategoryScale<D, I> {
    static is(value: unknown): value is GroupedCategoryScale<any, any>;
    normalizeDomains(...domains: D[][]): NormalizedDomain<D>;
    findIndex(value: D): number | undefined;
    private getMatchIndex;
}
