import type { AgChartTheme, AgChartThemePalette, AgChartThemeParams, AgPaletteColors, AgPresetOverrides, AgThemeOverrides, CssColor, WithThemeParams } from 'ag-charts-types';
import { type PaletteType } from '../../module/coreModulesTypes';
import { FONT_SIZE_RATIO } from './constants';
import { type DefaultColors } from './defaultColors';
export declare class ChartTheme {
    readonly palette: Required<AgChartThemePalette> & {
        sequentialColors: CssColor[][];
        altUp: AgPaletteColors;
        altDown: AgPaletteColors;
        altNeutral: AgPaletteColors;
    };
    readonly paletteType: PaletteType;
    readonly config: any;
    readonly presets: AgPresetOverrides;
    readonly overrides: AgThemeOverrides | undefined;
    readonly params: AgChartThemeParams;
    static getDefaultColors(): DefaultColors;
    static getDefaultPublicParameters(): Required<WithThemeParams<AgChartThemeParams>>;
    private static getAxisDefaults;
    protected getChartDefaults(): {
        minHeight: number;
        minWidth: number;
        background: {
            visible: boolean;
            fill: {
                $ref: string;
            };
        };
        padding: {
            top: {
                $ref: string;
            };
            right: {
                $ref: string;
            };
            bottom: {
                $ref: string;
            };
            left: {
                $ref: string;
            };
        };
        seriesArea: {
            border: {
                enabled: boolean;
                stroke: {
                    $ref: string;
                };
                strokeOpacity: number;
                strokeWidth: number;
            };
            cornerRadius: number;
            padding: {
                $if: (number | {
                    $eq: (boolean | {
                        $path: string;
                    })[];
                })[];
            };
        };
        keyboard: {
            enabled: boolean;
        };
        title: {
            enabled: boolean;
            text: string;
            spacing: {
                $if: (number | {
                    $path: string;
                })[];
            };
            fontWeight: {
                $ref: string;
            };
            fontSize: {
                $rem: FONT_SIZE_RATIO;
            };
            fontFamily: {
                $ref: string;
            };
            color: {
                $ref: string;
            };
            wrapping: string;
            layoutStyle: string;
            textAlign: string;
        };
        subtitle: {
            enabled: boolean;
            text: string;
            spacing: number;
            fontWeight: {
                $ref: string;
            };
            fontSize: {
                $rem: FONT_SIZE_RATIO;
            };
            fontFamily: {
                $ref: string;
            };
            color: {
                $ref: string;
            };
            wrapping: string;
            layoutStyle: string;
            textAlign: string;
        };
        footnote: {
            enabled: boolean;
            text: string;
            spacing: number;
            fontSize: {
                $rem: FONT_SIZE_RATIO;
            };
            fontFamily: {
                $ref: string;
            };
            fontWeight: {
                $ref: string;
            };
            color: {
                $ref: string;
            };
            wrapping: string;
            layoutStyle: string;
            textAlign: string;
        };
        legend: any;
        tooltip: {
            enabled: boolean;
            darkTheme: boolean;
            delay: number;
            pagination: boolean;
            mode: {
                $if: (string | {
                    $and: ({
                        $isChartType: string;
                        $not?: undefined;
                        $greaterThan?: undefined;
                        $lessThan?: undefined;
                    } | {
                        $not: {
                            $hasSeriesType: string;
                        };
                        $isChartType?: undefined;
                        $greaterThan?: undefined;
                        $lessThan?: undefined;
                    } | {
                        $greaterThan: (number | {
                            $size: {
                                $path: string;
                            }[];
                        })[];
                        $isChartType?: undefined;
                        $not?: undefined;
                        $lessThan?: undefined;
                    } | {
                        $lessThan: (number | {
                            $size: {
                                $path: string;
                            }[];
                        })[];
                        $isChartType?: undefined;
                        $not?: undefined;
                        $greaterThan?: undefined;
                    })[];
                })[];
            };
        };
        overlays: {
            darkTheme: boolean;
        };
        listeners: {};
        series: {
            tooltip: {
                range: {
                    $path: string[];
                };
                position: {
                    anchorTo: {
                        $path: string[];
                    };
                    placement: {
                        $path: (string | undefined)[];
                    };
                    xOffset: {
                        $path: (string | number)[];
                    };
                    yOffset: {
                        $path: (string | number)[];
                    };
                };
            };
        };
    };
    private static readonly axisDefault;
    constructor(options?: AgChartTheme);
    private processOverrides;
    private createChartConfigPerChartType;
    private getDefaults;
    private static applyTemplateTheme;
    templateTheme<T>(themeTemplate: T, clone?: boolean): T;
    protected getDefaultColors(): DefaultColors;
    getPublicParameters(): Required<WithThemeParams<AgChartThemeParams>>;
    getTemplateParameters(): Map<any, any>;
}
