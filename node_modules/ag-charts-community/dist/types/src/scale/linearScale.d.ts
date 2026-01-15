import { ContinuousScale } from './continuousScale';
import type { ScaleTickParams } from './scale';
/**
 * Maps continuous domain to a continuous range.
 */
export declare class LinearScale extends ContinuousScale<number> {
    static is(value: unknown): value is LinearScale;
    protected static getTickStep(start: number, stop: number, ticks: ScaleTickParams<number>): number;
    readonly type = "number";
    constructor();
    toDomain(d: number): number;
    ticks({ interval, tickCount, minTickCount, maxTickCount }: ScaleTickParams<number>, domain?: number[], visibleRange?: [number, number]): {
        ticks: number[];
        count: number;
        firstTickIndex?: number;
    };
    niceDomain(ticks: ScaleTickParams<number>, domain?: number[]): number[];
}
