import { CleanupRegistry } from 'ag-charts-core';
export declare function addEscapeEventListener(elem: HTMLElement, onEscape: (event: KeyboardEvent) => void, keyCodes?: readonly string[]): () => void;
export declare function addMouseCloseListener(menu: HTMLElement, hideCallback: () => void): () => void;
export declare function addTouchCloseListener(menu: HTMLElement, hideCallback: () => void): () => void;
export declare function addOverrideFocusVisibleEventListener(menu: HTMLElement, buttons: HTMLElement[], overrideFocusVisible: boolean): () => void;
export declare function hasNoModifiers(event: KeyboardEvent | MouseEvent): boolean;
export declare const PREV_NEXT_KEYS: {
    readonly horizontal: {
        readonly nextKey: "ArrowRight";
        readonly prevKey: "ArrowLeft";
    };
    readonly vertical: {
        readonly nextKey: "ArrowDown";
        readonly prevKey: "ArrowUp";
    };
};
export declare function initRovingTabIndex(opts: {
    orientation: 'horizontal' | 'vertical';
    buttons: HTMLElement[];
    wrapAround?: boolean;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
    onEscape?: (event: KeyboardEvent) => void;
}): CleanupRegistry;
export interface MenuCloser {
    close(): void;
    finishClosing(): void;
}
export declare function initMenuKeyNav(opts: {
    orientation: 'vertical';
    sourceEvent: Event;
    menu: HTMLElement;
    buttons: HTMLElement[];
    overrideFocusVisible?: false;
    closeCallback: () => void;
}): MenuCloser;
export declare function makeAccessibleClickListener(element: HTMLElement, onclick: (event: MouseEvent) => unknown): (event: MouseEvent) => void;
export declare function isButtonClickEvent(event: KeyboardEvent | MouseEvent): boolean;
export declare function getLastFocus(sourceEvent: Event | undefined): HTMLElement | undefined;
export declare function stopPageScrolling(element: HTMLElement): () => void;
