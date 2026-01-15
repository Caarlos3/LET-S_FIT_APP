/** Types of chart-update, in pipeline execution order. */
export declare enum ChartUpdateType {
    FULL = 0,
    UPDATE_DATA = 1,
    PROCESS_DATA = 2,
    PROCESS_DOMAIN = 3,
    PERFORM_LAYOUT = 4,
    SERIES_UPDATE = 5,
    PRE_SCENE_RENDER = 6,
    SCENE_RENDER = 7,
    NONE = 8
}
