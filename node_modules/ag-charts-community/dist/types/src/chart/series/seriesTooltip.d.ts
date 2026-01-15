import type { RequireOptional } from 'ag-charts-core';
import type { AgSeriesTooltipRendererParams, AgTooltipRendererResult, ContextDefault, DatumDefault, InteractionRange } from 'ag-charts-types';
import { BaseProperties } from '../../util/properties';
import { type TooltipContent, TooltipPosition, type TooltipStructuredContent } from '../tooltip/tooltip';
type TooltipRenderer<P> = (params: P) => string | AgTooltipRendererResult;
declare class SeriesTooltipInteraction extends BaseProperties {
    enabled: boolean;
}
export declare class SeriesTooltip<P extends AgSeriesTooltipRendererParams<any>> extends BaseProperties {
    enabled?: boolean;
    showArrow?: boolean;
    renderer?: TooltipRenderer<RequireOptional<P>>;
    readonly interaction: SeriesTooltipInteraction;
    readonly position: TooltipPosition;
    range?: InteractionRange;
    class?: string;
    formatTooltip(callers: Array<{
        context?: unknown;
    }>, content: TooltipStructuredContent, params: RequireOptional<P>): TooltipContent;
}
export declare function makeSeriesTooltip<P extends AgSeriesTooltipRendererParams<DatumDefault, ContextDefault>>(): SeriesTooltip<Omit<P, "context">>;
export {};
