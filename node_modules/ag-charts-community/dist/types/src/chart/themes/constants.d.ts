export declare enum FONT_SIZE {
    SMALLEST = 8,
    SMALLER = 10,
    SMALL = 12,
    MEDIUM = 13,
    LARGE = 14,
    LARGEST = 17
}
export declare const BASE_FONT_SIZE = FONT_SIZE.SMALL;
export declare enum FONT_SIZE_RATIO {
    SMALLEST = 0.6666666666666666,
    SMALLER = 0.8333333333333334,
    SMALL = 1,
    MEDIUM = 1.0833333333333333,
    LARGE = 1.1666666666666667,
    LARGEST = 1.4166666666666667
}
export declare enum CARTESIAN_POSITION {
    TOP = "top",
    TOP_RIGHT = "top-right",
    TOP_LEFT = "top-left",
    RIGHT = "right",
    RIGHT_TOP = "right-top",
    RIGHT_BOTTOM = "right-bottom",
    BOTTOM = "bottom",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_LEFT = "bottom-left",
    LEFT = "left",
    LEFT_TOP = "left-top",
    LEFT_BOTTOM = "left-bottom"
}
export declare enum CARTESIAN_AXIS_TYPE {
    CATEGORY = "category",
    GROUPED_CATEGORY = "grouped-category",
    ORDINAL_TIME = "ordinal-time",
    UNIT_TIME = "unit-time",
    TIME = "time",
    NUMBER = "number",
    LOG = "log"
}
export declare enum POLAR_AXIS_TYPE {
    ANGLE_CATEGORY = "angle-category",
    ANGLE_NUMBER = "angle-number",
    RADIUS_CATEGORY = "radius-category",
    RADIUS_NUMBER = "radius-number"
}
export declare enum POLAR_AXIS_SHAPE {
    CIRCLE = "circle",
    POLYGON = "polygon"
}
