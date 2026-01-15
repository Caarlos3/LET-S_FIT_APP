type FocusWidgetEventType = 'blur' | 'focus';
type KeyboardWidgetEventType = 'keyup' | 'keydown';
type KeyboardSyntheticMouseWidgetEventType = 'click';
type MouseWidgetEventType = 'contextmenu' | 'click' | 'dblclick' | 'mouseenter' | 'mousemove' | 'mouseleave';
type TouchWidgetEventType = 'touchstart' | 'touchmove' | 'touchend' | 'touchcancel';
type TouchSyntheticMouseWidgetEventType = 'click' | 'dblclick';
type DragWidgetEventType = 'drag-start' | 'drag-move' | 'drag-end';
export type WidgetEvent = {
    readonly type: keyof WidgetEventMap;
    readonly sourceEvent: Event;
};
export type FocusWidgetEvent<T extends FocusWidgetEventType = FocusWidgetEventType> = {
    readonly type: T;
    readonly sourceEvent: FocusEvent;
};
export type KeyboardWidgetEvent<T extends KeyboardWidgetEventType = KeyboardWidgetEventType> = {
    readonly type: T;
    readonly sourceEvent: KeyboardEvent;
};
export type KeyboardSyntheticMouseWidgetEvent<T extends MouseWidgetEventType & KeyboardSyntheticMouseWidgetEventType = KeyboardSyntheticMouseWidgetEventType> = {
    readonly type: T;
    readonly device: 'keyboard';
    readonly sourceEvent: KeyboardEvent;
};
export type TouchWidgetEvent<T extends TouchWidgetEventType = TouchWidgetEventType> = {
    readonly type: T;
    readonly sourceEvent: TouchEvent;
};
export type TouchSyntheticMouseWidgetEvent<T extends MouseWidgetEventType & TouchSyntheticMouseWidgetEventType = TouchSyntheticMouseWidgetEventType> = {
    readonly type: T;
    readonly device: 'touch';
    readonly offsetX: number;
    readonly offsetY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly currentX: number;
    readonly currentY: number;
    readonly sourceEvent: TouchEvent;
};
export type NativeMouseWidgetEvent<T extends MouseWidgetEventType = MouseWidgetEventType> = {
    readonly type: T;
    readonly device: 'mouse';
    readonly offsetX: number;
    readonly offsetY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly currentX: number;
    readonly currentY: number;
    readonly sourceEvent: MouseEvent;
};
export type MouseWidgetEvent<T extends MouseWidgetEventType = MouseWidgetEventType> = NativeMouseWidgetEvent<T> | (T extends TouchSyntheticMouseWidgetEventType ? TouchSyntheticMouseWidgetEvent<T> : never) | (T extends KeyboardSyntheticMouseWidgetEventType ? KeyboardSyntheticMouseWidgetEvent<T> : never);
export type WheelWidgetEvent = {
    readonly type: 'wheel';
    readonly offsetX: number;
    readonly offsetY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly deltaX: number;
    readonly deltaY: number;
    readonly sourceEvent: WheelEvent;
};
export type ClickLikeEvent = MouseWidgetEvent<'click' | 'dblclick'> & {
    device: 'mouse' | 'touch';
};
export type HoverLikeEvent = ClickLikeEvent | MouseWidgetEvent<'mousemove'> | DragWidgetEvent<'drag-move'>;
export type DragWidgetEvent<T extends DragWidgetEventType = DragWidgetEventType> = {
    readonly type: T;
    readonly device: 'mouse';
    readonly offsetX: number;
    readonly offsetY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly currentX: number;
    readonly currentY: number;
    readonly originDeltaX: number;
    readonly originDeltaY: number;
    readonly sourceEvent: MouseEvent;
} | {
    readonly type: T;
    readonly device: 'touch';
    readonly offsetX: number;
    readonly offsetY: number;
    readonly clientX: number;
    readonly clientY: number;
    readonly currentX: number;
    readonly currentY: number;
    readonly originDeltaX: number;
    readonly originDeltaY: number;
    readonly sourceEvent: TouchEvent;
};
export type CloseWidgetEvent = {
    type: 'close-widget';
    sourceEvent?: never;
};
export type OpenWidgetEvent = {
    type: 'open-widget';
    sourceEvent?: never;
};
export type WidgetEventMap = {
    'drag-start': DragWidgetEvent<'drag-start'>;
    'drag-move': DragWidgetEvent<'drag-move'>;
    'drag-end': DragWidgetEvent<'drag-end'>;
    'close-widget': CloseWidgetEvent;
    'open-widget': OpenWidgetEvent;
    blur: FocusWidgetEvent<'blur'>;
    change: WidgetEvent;
    contextmenu: MouseWidgetEvent<'contextmenu'>;
    focus: FocusWidgetEvent<'focus'>;
    keydown: KeyboardWidgetEvent<'keydown'>;
    keyup: KeyboardWidgetEvent<'keyup'>;
    click: MouseWidgetEvent<'click'>;
    dblclick: MouseWidgetEvent<'dblclick'>;
    mouseenter: MouseWidgetEvent<'mouseenter'>;
    mousemove: MouseWidgetEvent<'mousemove'>;
    mouseleave: MouseWidgetEvent<'mouseleave'>;
    wheel: WheelWidgetEvent;
    touchstart: TouchWidgetEvent<'touchstart'>;
    touchmove: TouchWidgetEvent<'touchmove'>;
    touchend: TouchWidgetEvent<'touchend'>;
    touchcancel: TouchWidgetEvent<'touchcancel'>;
};
export declare const WIDGET_HTML_EVENTS: readonly (keyof WidgetEventMap & keyof HTMLElementEventMap)[];
export type WidgetSourceEventMap = {
    [K in keyof WidgetEventMap]: WidgetEventMap[K]['sourceEvent'];
} & {
    click: MouseEvent;
    dblclick: MouseEvent;
};
export type WidgetEventMap_HTML = Pick<WidgetEventMap, (typeof WIDGET_HTML_EVENTS)[number]>;
export type WidgetEventMap_Internal = Omit<WidgetEventMap, (typeof WIDGET_HTML_EVENTS)[number]>;
export type WidgetSourceEventMap_HTML = Pick<WidgetSourceEventMap, (typeof WIDGET_HTML_EVENTS)[number]>;
export declare class WidgetEventUtil {
    static alloc<K extends keyof WidgetEventMap_HTML>(type: K, sourceEvent: WidgetSourceEventMap_HTML[K], current: HTMLElement): WidgetEventMap_HTML[K];
    static isHTMLEvent(type: keyof WidgetEventMap): type is keyof WidgetEventMap & keyof HTMLElementEventMap;
    static calcCurrentXY(current: HTMLElement, event: {
        clientX: number;
        clientY: number;
    }): {
        currentX: number;
        currentY: number;
    };
}
export {};
