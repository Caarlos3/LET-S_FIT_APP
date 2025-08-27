import { ContinuousScale } from './continuousScale';
import type { ScaleTickParams } from './scale';
export declare class LogScale extends ContinuousScale<number> {
    static is(value: unknown): value is LogScale;
    readonly type = "log";
    protected defaultClamp: boolean;
    constructor(d?: number[], r?: number[]);
    transform(this: LogScale, x: number): number;
    transformInvert(this: LogScale, x: number): number;
    toDomain(d: number): number;
    base: number;
    private readonly log;
    private readonly pow;
    niceDomain(_ticks: ScaleTickParams<number>, domain?: number[]): number[];
    ticks({ interval, tickCount }: ScaleTickParams<number>, domain?: number[], visibleRange?: [number, number]): {
        ticks: number[];
        count: number;
        firstTickIndex: number | undefined;
    } | undefined;
}
