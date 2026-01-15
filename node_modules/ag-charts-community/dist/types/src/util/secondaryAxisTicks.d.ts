interface SecondaryTickScale<D> {
    toDomain(d: number): D;
}
export interface AxisPrimaryTickCount {
    unzoomed: number;
    zoomed: number;
}
export declare function calculateNiceSecondaryAxis<D extends number>(scale: SecondaryTickScale<D>, domain: D[], primaryTickCount: AxisPrimaryTickCount, reverse: boolean, visibleRange: [number, number]): {
    domain: D[];
    ticks: number[];
};
export {};
