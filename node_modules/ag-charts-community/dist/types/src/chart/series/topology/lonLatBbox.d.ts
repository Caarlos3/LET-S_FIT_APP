export declare class LonLatBBox {
    lon0: number;
    lat0: number;
    lon1: number;
    lat1: number;
    constructor(lon0: number, lat0: number, lon1: number, lat1: number);
    extend(lon0: number, lat0: number, lon1: number, lat1: number): this;
    merge(other: LonLatBBox): this;
    static extend(into: LonLatBBox | undefined, lon0: number, lat0: number, lon1: number, lat1: number): LonLatBBox;
}
