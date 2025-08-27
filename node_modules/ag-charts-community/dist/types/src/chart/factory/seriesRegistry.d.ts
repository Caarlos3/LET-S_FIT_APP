import type { SeriesModule } from '../../module/coreModules';
import type { ModuleContext } from '../../module/moduleContext';
import type { SeriesType } from '../mapping/types';
import type { ISeries } from '../series/seriesTypes';
declare class SeriesRegistry {
    private readonly seriesMap;
    private readonly themeTemplates;
    register(seriesType: NonNullable<SeriesType>, { chartTypes: [chartType], moduleFactory, defaultAxes, themeTemplate, solo, stackable, groupable, stackedByDefault, hidden, }: SeriesModule): void;
    create(seriesType: SeriesType, moduleContext: ModuleContext): ISeries<any, any, any>;
    cloneDefaultAxes(seriesType: SeriesType): {
        axes: ({
            type: "number" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            context?: {} | undefined;
            label?: {
                autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                format?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    format?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            nice?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            interval?: {
                step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            min?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            max?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
        } | {
            type: "log" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            base?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            context?: {} | undefined;
            label?: {
                autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                format?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    format?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            nice?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            interval?: {
                step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            min?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            max?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
        } | {
            type: "category" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            interval?: {
                placement?: import("packages/ag-charts-types/dist/types/src/main").Operation | ("on" | "between") | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            paddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            paddingOuter?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            groupPaddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            bandHighlight?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            context?: {} | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            label?: {
                autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
        } | {
            type: "ordinal-time" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            parentLevel?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    border?: {
                        enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    padding?: number | {
                        top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    format?: string | {
                        millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                } | undefined;
                tick?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            } | undefined;
            interval?: {
                placement?: import("packages/ag-charts-types/dist/types/src/main").Operation | ("on" | "between") | undefined;
                step?: number | "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | {
                    unit: import("packages/ag-charts-types/dist/types/src/main").AgTimeIntervalUnit | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    epoch?: {
                        toString: {};
                        toDateString: {};
                        toTimeString: {};
                        toLocaleString: {};
                        toLocaleDateString: {};
                        toLocaleTimeString: {};
                        valueOf: {};
                        getTime: {};
                        getFullYear: {};
                        getUTCFullYear: {};
                        getMonth: {};
                        getUTCMonth: {};
                        getDate: {};
                        getUTCDate: {};
                        getDay: {};
                        getUTCDay: {};
                        getHours: {};
                        getUTCHours: {};
                        getMinutes: {};
                        getUTCMinutes: {};
                        getSeconds: {};
                        getUTCSeconds: {};
                        getMilliseconds: {};
                        getUTCMilliseconds: {};
                        getTimezoneOffset: {};
                        setTime: {};
                        setMilliseconds: {};
                        setUTCMilliseconds: {};
                        setSeconds: {};
                        setUTCSeconds: {};
                        setMinutes: {};
                        setUTCMinutes: {};
                        setHours: {};
                        setUTCHours: {};
                        setDate: {};
                        setUTCDate: {};
                        setMonth: {};
                        setUTCMonth: {};
                        setFullYear: {};
                        setUTCFullYear: {};
                        toUTCString: {};
                        toISOString: {};
                        toJSON: {};
                        [Symbol.toPrimitive]: {};
                    } | undefined;
                    utc?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            paddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            paddingOuter?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            groupPaddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            bandHighlight?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    format?: string | {
                        millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            context?: {} | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            label?: {
                autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                format?: string | {
                    millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
        } | {
            type: "time" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            parentLevel?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    border?: {
                        enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    padding?: number | {
                        top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    format?: string | {
                        millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                } | undefined;
                tick?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            } | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            context?: {} | undefined;
            label?: {
                autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                format?: string | {
                    millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            } | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    format?: string | {
                        millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            nice?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            interval?: {
                step?: number | "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | {
                    unit: import("packages/ag-charts-types/dist/types/src/main").AgTimeIntervalUnit | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    epoch?: {
                        toString: {};
                        toDateString: {};
                        toTimeString: {};
                        toLocaleString: {};
                        toLocaleDateString: {};
                        toLocaleTimeString: {};
                        valueOf: {};
                        getTime: {};
                        getFullYear: {};
                        getUTCFullYear: {};
                        getMonth: {};
                        getUTCMonth: {};
                        getDate: {};
                        getUTCDate: {};
                        getDay: {};
                        getUTCDay: {};
                        getHours: {};
                        getUTCHours: {};
                        getMinutes: {};
                        getUTCMinutes: {};
                        getSeconds: {};
                        getUTCSeconds: {};
                        getMilliseconds: {};
                        getUTCMilliseconds: {};
                        getTimezoneOffset: {};
                        setTime: {};
                        setMilliseconds: {};
                        setUTCMilliseconds: {};
                        setSeconds: {};
                        setUTCSeconds: {};
                        setMinutes: {};
                        setUTCMinutes: {};
                        setHours: {};
                        setUTCHours: {};
                        setDate: {};
                        setUTCDate: {};
                        setMonth: {};
                        setUTCMonth: {};
                        setFullYear: {};
                        setUTCFullYear: {};
                        toUTCString: {};
                        toISOString: {};
                        toJSON: {};
                        [Symbol.toPrimitive]: {};
                    } | undefined;
                    utc?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            min?: number | {
                toString: {};
                toDateString: {};
                toTimeString: {};
                toLocaleString: {};
                toLocaleDateString: {};
                toLocaleTimeString: {};
                valueOf: {};
                getTime: {};
                getFullYear: {};
                getUTCFullYear: {};
                getMonth: {};
                getUTCMonth: {};
                getDate: {};
                getUTCDate: {};
                getDay: {};
                getUTCDay: {};
                getHours: {};
                getUTCHours: {};
                getMinutes: {};
                getUTCMinutes: {};
                getSeconds: {};
                getUTCSeconds: {};
                getMilliseconds: {};
                getUTCMilliseconds: {};
                getTimezoneOffset: {};
                setTime: {};
                setMilliseconds: {};
                setUTCMilliseconds: {};
                setSeconds: {};
                setUTCSeconds: {};
                setMinutes: {};
                setUTCMinutes: {};
                setHours: {};
                setUTCHours: {};
                setDate: {};
                setUTCDate: {};
                setMonth: {};
                setUTCMonth: {};
                setFullYear: {};
                setUTCFullYear: {};
                toUTCString: {};
                toISOString: {};
                toJSON: {};
                [Symbol.toPrimitive]: {};
            } | undefined;
            max?: number | {
                toString: {};
                toDateString: {};
                toTimeString: {};
                toLocaleString: {};
                toLocaleDateString: {};
                toLocaleTimeString: {};
                valueOf: {};
                getTime: {};
                getFullYear: {};
                getUTCFullYear: {};
                getMonth: {};
                getUTCMonth: {};
                getDate: {};
                getUTCDate: {};
                getDay: {};
                getUTCDay: {};
                getHours: {};
                getUTCHours: {};
                getMinutes: {};
                getUTCMinutes: {};
                getSeconds: {};
                getUTCSeconds: {};
                getMilliseconds: {};
                getUTCMilliseconds: {};
                getTimezoneOffset: {};
                setTime: {};
                setMilliseconds: {};
                setUTCMilliseconds: {};
                setSeconds: {};
                setUTCSeconds: {};
                setMinutes: {};
                setUTCMinutes: {};
                setHours: {};
                setUTCHours: {};
                setDate: {};
                setUTCDate: {};
                setMonth: {};
                setUTCMonth: {};
                setFullYear: {};
                setUTCFullYear: {};
                toUTCString: {};
                toISOString: {};
                toJSON: {};
                [Symbol.toPrimitive]: {};
            } | undefined;
        } | {
            type: "unit-time" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            parentLevel?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    border?: {
                        enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    padding?: number | {
                        top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    format?: string | {
                        millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                } | undefined;
                tick?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            } | undefined;
            unit?: "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | {
                unit: import("packages/ag-charts-types/dist/types/src/main").AgTimeIntervalUnit | import("packages/ag-charts-types/dist/types/src/main").Operation;
                step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                epoch?: {
                    toString: {};
                    toDateString: {};
                    toTimeString: {};
                    toLocaleString: {};
                    toLocaleDateString: {};
                    toLocaleTimeString: {};
                    valueOf: {};
                    getTime: {};
                    getFullYear: {};
                    getUTCFullYear: {};
                    getMonth: {};
                    getUTCMonth: {};
                    getDate: {};
                    getUTCDate: {};
                    getDay: {};
                    getUTCDay: {};
                    getHours: {};
                    getUTCHours: {};
                    getMinutes: {};
                    getUTCMinutes: {};
                    getSeconds: {};
                    getUTCSeconds: {};
                    getMilliseconds: {};
                    getUTCMilliseconds: {};
                    getTimezoneOffset: {};
                    setTime: {};
                    setMilliseconds: {};
                    setUTCMilliseconds: {};
                    setSeconds: {};
                    setUTCSeconds: {};
                    setMinutes: {};
                    setUTCMinutes: {};
                    setHours: {};
                    setUTCHours: {};
                    setDate: {};
                    setUTCDate: {};
                    setMonth: {};
                    setUTCMonth: {};
                    setFullYear: {};
                    setUTCFullYear: {};
                    toUTCString: {};
                    toISOString: {};
                    toJSON: {};
                    [Symbol.toPrimitive]: {};
                } | undefined;
                utc?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            interval?: {
                placement?: import("packages/ag-charts-types/dist/types/src/main").Operation | ("on" | "between") | undefined;
                step?: number | "millisecond" | "second" | "minute" | "hour" | "day" | "month" | "year" | {
                    unit: import("packages/ag-charts-types/dist/types/src/main").AgTimeIntervalUnit | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    epoch?: {
                        toString: {};
                        toDateString: {};
                        toTimeString: {};
                        toLocaleString: {};
                        toLocaleDateString: {};
                        toLocaleTimeString: {};
                        valueOf: {};
                        getTime: {};
                        getFullYear: {};
                        getUTCFullYear: {};
                        getMonth: {};
                        getUTCMonth: {};
                        getDate: {};
                        getUTCDate: {};
                        getDay: {};
                        getUTCDay: {};
                        getHours: {};
                        getUTCHours: {};
                        getMinutes: {};
                        getUTCMinutes: {};
                        getSeconds: {};
                        getUTCSeconds: {};
                        getMilliseconds: {};
                        getUTCMilliseconds: {};
                        getTimezoneOffset: {};
                        setTime: {};
                        setMilliseconds: {};
                        setUTCMilliseconds: {};
                        setSeconds: {};
                        setUTCSeconds: {};
                        setMinutes: {};
                        setUTCMinutes: {};
                        setHours: {};
                        setUTCHours: {};
                        setDate: {};
                        setUTCDate: {};
                        setMonth: {};
                        setUTCMonth: {};
                        setFullYear: {};
                        setUTCFullYear: {};
                        toUTCString: {};
                        toISOString: {};
                        toJSON: {};
                        [Symbol.toPrimitive]: {};
                    } | undefined;
                    utc?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            paddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            paddingOuter?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            groupPaddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            bandHighlight?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            context?: {} | undefined;
            label?: {
                autoRotate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                autoRotateAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                format?: string | {
                    millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            } | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    format?: string | {
                        millisecond?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        second?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        hour?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        day?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        month?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        year?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            min?: number | {
                toString: {};
                toDateString: {};
                toTimeString: {};
                toLocaleString: {};
                toLocaleDateString: {};
                toLocaleTimeString: {};
                valueOf: {};
                getTime: {};
                getFullYear: {};
                getUTCFullYear: {};
                getMonth: {};
                getUTCMonth: {};
                getDate: {};
                getUTCDate: {};
                getDay: {};
                getUTCDay: {};
                getHours: {};
                getUTCHours: {};
                getMinutes: {};
                getUTCMinutes: {};
                getSeconds: {};
                getUTCSeconds: {};
                getMilliseconds: {};
                getUTCMilliseconds: {};
                getTimezoneOffset: {};
                setTime: {};
                setMilliseconds: {};
                setUTCMilliseconds: {};
                setSeconds: {};
                setUTCSeconds: {};
                setMinutes: {};
                setUTCMinutes: {};
                setHours: {};
                setUTCHours: {};
                setDate: {};
                setUTCDate: {};
                setMonth: {};
                setUTCMonth: {};
                setFullYear: {};
                setUTCFullYear: {};
                toUTCString: {};
                toISOString: {};
                toJSON: {};
                [Symbol.toPrimitive]: {};
            } | undefined;
            max?: number | {
                toString: {};
                toDateString: {};
                toTimeString: {};
                toLocaleString: {};
                toLocaleDateString: {};
                toLocaleTimeString: {};
                valueOf: {};
                getTime: {};
                getFullYear: {};
                getUTCFullYear: {};
                getMonth: {};
                getUTCMonth: {};
                getDate: {};
                getUTCDate: {};
                getDay: {};
                getUTCDay: {};
                getHours: {};
                getUTCHours: {};
                getMinutes: {};
                getUTCMinutes: {};
                getSeconds: {};
                getUTCSeconds: {};
                getMilliseconds: {};
                getUTCMilliseconds: {};
                getTimezoneOffset: {};
                setTime: {};
                setMilliseconds: {};
                setUTCMilliseconds: {};
                setSeconds: {};
                setUTCSeconds: {};
                setMinutes: {};
                setUTCMinutes: {};
                setHours: {};
                setUTCHours: {};
                setDate: {};
                setUTCDate: {};
                setMonth: {};
                setUTCMonth: {};
                setFullYear: {};
                setUTCFullYear: {};
                toUTCString: {};
                toISOString: {};
                toJSON: {};
                [Symbol.toPrimitive]: {};
            } | undefined;
        } | {
            type: "grouped-category" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            paddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            groupPaddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            depthOptions?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                label?: {
                    wrapping?: import("packages/ag-charts-types/dist/types/src/main").TextWrap | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    truncate?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    padding?: number | {
                        top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    border?: {
                        enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                        strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    } | undefined;
                    spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                tick?: {
                    width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            tick?: {
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            bandHighlight?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            maxThicknessRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            keys?: string[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
            context?: {} | undefined;
            label?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            crosshair?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                snap?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                lineDashOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                label?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    xOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    yOffset?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    formatter?: {} | undefined;
                    renderer?: {} | undefined;
                } | undefined;
            } | undefined;
            position?: import("packages/ag-charts-types/dist/types/src/main").AgCartesianAxisPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            interval?: {
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    position?: import("packages/ag-charts-types/dist/types/src/main").AgCrossLineLabelPosition | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            thickness?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
        })[] | ({
            type: "angle-category" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            shape?: import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").AgPolarAxisShape | undefined;
            startAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            endAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            groupPaddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            paddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            context?: {} | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            label?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                orientation?: import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").AgAngleAxisLabelOrientation | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            interval?: {
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
        } | {
            type: "angle-number" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            startAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            endAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            context?: {} | undefined;
            label?: {
                format?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                orientation?: import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").AgAngleAxisLabelOrientation | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            nice?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            interval?: {
                step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            min?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            max?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
        } | {
            type: "radius-category" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            positionAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    positionAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            innerRadiusRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            groupPaddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            paddingInner?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            paddingOuter?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            context?: {} | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            label?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            interval?: {
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
        } | {
            type: "radius-number" | import("packages/ag-charts-types/dist/types/src/main").Operation;
            positionAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            shape?: import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").AgPolarAxisShape | undefined;
            title?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
            } | undefined;
            crossLines?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                type: "line" | "range" | import("packages/ag-charts-types/dist/types/src/main").Operation;
                value?: any;
                range?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                label?: {
                    positionAngle?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    text?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fontFamily?: string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    } | (string | {
                        googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                    })[] | undefined;
                    padding?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
            }[] | undefined;
            innerRadiusRatio?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            reverse?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            context?: {} | undefined;
            label?: {
                format?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                rotation?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                avoidCollisions?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                formatter?: {} | undefined;
                fontStyle?: import("packages/ag-charts-types/dist/types/src/main").FontStyle | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontWeight?: import("packages/ag-charts-types/dist/types/src/main").FontWeight | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontSize?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fontFamily?: string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                } | (string | {
                    googleFont: string | import("packages/ag-charts-types/dist/types/src/main").Operation;
                })[] | undefined;
                spacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                color?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                border?: {
                    enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                cornerRadius?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                padding?: number | {
                    top?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    right?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    bottom?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    left?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                } | undefined;
                fill?: import("packages/ag-charts-types/dist/types/src/main").AgColorType | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            line?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            gridLine?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                style?: import("packages/ag-charts-types/dist/types/src/main").Operation | {
                    fill?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    fillOpacity?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    strokeWidth?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                    lineDash?: number[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | undefined;
                }[] | undefined;
            } | undefined;
            tick?: {
                enabled?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                width?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                size?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                stroke?: string | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            nice?: boolean | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            interval?: {
                step?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                maxSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
                values?: any[] | import("packages/ag-charts-types/dist/types/src/main").Operation | import("packages/ag-charts-types/dist/types/src/main").Operation[] | {
                    [x: string]: any;
                }[] | undefined;
                minSpacing?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            } | undefined;
            min?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
            max?: number | import("packages/ag-charts-types/dist/types/src/main").Operation | undefined;
        })[];
    } | null;
    setThemeTemplate(seriesType: NonNullable<SeriesType>, themeTemplate: object): void;
    getThemeTemplate(seriesType: string): object | undefined;
    isSolo(seriesType: SeriesType): boolean;
    isGroupable(seriesType: SeriesType): boolean;
    isStackable(seriesType: SeriesType): boolean;
    isStackedByDefault(seriesType: SeriesType): boolean;
}
export declare const seriesRegistry: SeriesRegistry;
export {};
