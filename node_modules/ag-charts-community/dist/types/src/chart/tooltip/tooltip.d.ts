import type { AgTooltipAnchorTo, AgTooltipMode, AgTooltipPlacement, InteractionRange, TextWrap } from 'ag-charts-types';
import type { DOMManager } from '../../dom/domManager';
import type { LocaleManager } from '../../locale/localeManager';
import { BaseProperties } from '../../util/properties';
import { type TooltipContent, type TooltipPaginationState } from './tooltipContent';
export { DEFAULT_TOOLTIP_CLASS, DEFAULT_TOOLTIP_DARK_CLASS, tooltipHtml, tooltipContentAriaLabel, type TooltipContent, type TooltipPaginationState, type TooltipContentDataRow, type TooltipStructuredContent, } from './tooltipContent';
type TooltipOffsets = {
    canvasX: number;
    canvasY: number;
    nodeCanvasX?: number;
    nodeCanvasY?: number;
};
export type TooltipEventType = 'pointermove' | 'click' | 'dblclick' | 'keyboard';
export type TooltipPointerEvent<T extends TooltipEventType = TooltipEventType> = Readonly<TooltipOffsets> & {
    readonly type: T;
};
export interface TooltipMetaPosition {
    anchorTo?: AgTooltipAnchorTo;
    placement?: AgTooltipPlacement | AgTooltipPlacement[];
    xOffset?: number;
    yOffset?: number;
}
export interface TooltipMeta extends TooltipOffsets {
    showArrow?: boolean;
    position?: TooltipMetaPosition;
    enableInteraction?: boolean;
}
export declare class TooltipPosition extends BaseProperties {
    /** The horizontal offset in pixels for the position of the tooltip. */
    xOffset: number;
    /** The vertical offset in pixels for the position of the tooltip. */
    yOffset: number;
    anchorTo?: AgTooltipAnchorTo;
    placement?: AgTooltipPlacement | AgTooltipPlacement[];
}
export declare class Tooltip extends BaseProperties {
    enabled: boolean;
    mode: AgTooltipMode;
    showArrow?: boolean;
    delay: number;
    range?: InteractionRange;
    wrapping: TextWrap;
    readonly position: TooltipPosition;
    readonly pagination = false;
    darkTheme: boolean;
    /** Escape-hatch for changes in AG-11645. */
    bounds: 'extended' | 'canvas';
    private readonly cleanup;
    private readonly springAnimation;
    private enableInteraction;
    private readonly wrapTypes;
    private element?;
    private readonly sizeMonitor;
    private interactiveLeave?;
    private _elementSize;
    private _showTimeout;
    private arrowPosition;
    private _visible;
    private positionParams;
    get interactive(): boolean;
    constructor();
    private localeManager;
    setup(localeManager: LocaleManager, domManager: DOMManager): () => void;
    isVisible(): boolean;
    contains(node: Node | null): boolean;
    private updateTooltipPosition;
    /**
     * Shows tooltip at the given event's coordinates.
     * If the `html` parameter is missing, moves the existing tooltip to the new position.
     */
    show(boundingRect: DOMRect, canvasRect: DOMRect, meta: TooltipMeta, content: TooltipContent[] | null, pagination?: TooltipPaginationState, instantly?: boolean): void;
    hide(): void;
    maybeEnterInteractiveTooltip({ relatedTarget }: FocusEvent | MouseEvent, callback: () => void): boolean;
    private popInteractiveLeaveCallback;
    private toggle;
    private toggleCallback;
    private updateClassModifiers;
    private getTooltipBounds;
}
