import { AbstractScale } from './abstractScale';
import type { ScaleAlignment } from './scale';
/**
 * Maps a discrete domain to a continuous numeric range.
 */
export declare abstract class BandScale<D, I = number> extends AbstractScale<D, number, I> {
    static is(value: unknown): value is BandScale<any, any>;
    abstract readonly type: 'category' | 'unit-time' | 'ordinal-time';
    protected invalid: boolean;
    range: number[];
    round: boolean;
    private _bandwidth;
    get bandwidth(): number;
    private _step;
    get step(): number;
    private _inset;
    get inset(): number;
    private _rawBandwidth;
    get rawBandwidth(): number;
    set padding(value: number);
    get padding(): number;
    /**
     * The ratio of the range that is reserved for space between bands.
     */
    private _paddingInner;
    set paddingInner(value: number);
    get paddingInner(): number;
    /**
     * The ratio of the range that is reserved for space before the first
     * and after the last band.
     */
    private _paddingOuter;
    set paddingOuter(value: number);
    get paddingOuter(): number;
    abstract readonly bands: readonly D[];
    protected refresh(): void;
    convert(d: D, options?: {
        clamp?: boolean;
        alignment?: ScaleAlignment;
    }): number;
    protected invertNearestIndex(position: number): number;
    update(): void;
    protected ordinalRange(i: number): number;
    abstract findIndex(value: D, alignment?: ScaleAlignment): number | undefined;
}
