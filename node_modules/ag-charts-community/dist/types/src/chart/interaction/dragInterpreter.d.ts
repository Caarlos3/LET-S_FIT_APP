import { EventEmitter } from 'ag-charts-core';
import type { Widget } from '../../widget/widget';
import type { NativeMouseWidgetEvent, TouchSyntheticMouseWidgetEvent, WidgetEventMap } from '../../widget/widgetEvents';
/**
 * A `DragInterpreterClickEvent` is either a native 'click' MouseEvent, or a sythetic click event fired by a single
 * finger 'touchstart' and 'touchend'.
 */
export type DragInterpreterClickEvent = NativeMouseWidgetEvent<'click'> | TouchSyntheticMouseWidgetEvent<'click'>;
/**
 * A `DragInterpreterDblClickEvent` is either a native 'dblclick' MouseEvent, or a sythetic click event fired by two
 * finger 'touchstart' and 'touchend' in quick succession (DOUBLE_TAP_TIMER_MS).
 */
export type DragInterpreterDblClickEvent = NativeMouseWidgetEvent<'dblclick'> | TouchSyntheticMouseWidgetEvent<'dblclick'>;
type EventMap = Omit<WidgetEventMap, 'click' | 'dblclick'> & {
    click: DragInterpreterClickEvent;
    dblclick: DragInterpreterDblClickEvent;
};
/**
 * In the interest of robustness (and simplicity), the Widget class always dispatches these events after mousedown &
 * mouseup events for the left-button:
 *
 * -   One 'drag-start'
 * -   Zero or more 'drag-move'
 * -   One 'drag-end'
 * -   Zero or one 'click' (only dispatched if the mouseup event is on target).
 *
 * To distinguish between drag and click actions, use this class. It ensure that for each mousedown-mouseup pair, it
 * dispatches either a set of 'drag-*' events or a single 'click' event but not both.
 */
export declare class DragInterpreter {
    private readonly cleanup;
    readonly events: EventEmitter<EventMap>;
    private dragStartEvent?;
    private isDragging;
    private lastClick?;
    private readonly touch;
    constructor(widget: Widget);
    destroy(): void;
    private onTouchStart;
    private onTouchMove;
    private onTouchEnd;
    private onMouseMove;
    private onDblClick;
    private onDragStart;
    private onDragMove;
    private onDragEnd;
}
export {};
