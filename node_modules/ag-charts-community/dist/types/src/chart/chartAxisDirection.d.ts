export declare enum ChartAxisDirection {
    X = "x",
    Y = "y",
    Angle = "angle",
    Radius = "radius"
}
export declare function isChartAxisDirection(d: string): d is ChartAxisDirection;
export type CartesianAxisDirection = ChartAxisDirection.X | ChartAxisDirection.Y;
