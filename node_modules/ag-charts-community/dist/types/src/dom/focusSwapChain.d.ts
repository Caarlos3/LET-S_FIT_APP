import { type BaseAttributeTypeMap, type StrictHTMLElement } from 'ag-charts-core';
type SwapChainEventMap = {
    focus: FocusEvent;
    blur: FocusEvent;
    swap: HTMLElement;
};
/**
 * The most reliable way to assertively announcer label changes on an element is
 * to fire a focus() change.  Therefore, this class uses a roving tab index on
 * two identical divs to accomplish this.
 */
export declare class FocusSwapChain {
    private label1;
    private label2;
    private inactiveAnnouncer;
    private activeAnnouncer;
    private focusOptions?;
    private hasFocus;
    private skipDispatch;
    private readonly listeners;
    private readonly onBlur;
    private readonly onFocus;
    private createAnnouncer;
    constructor(label1: StrictHTMLElement, label2: StrictHTMLElement, announcerRole: BaseAttributeTypeMap['role'], initialAltText: string);
    destroy(): void;
    focus(opts?: FocusOptions): void;
    update(newLabel: string): void;
    addListener<T extends keyof SwapChainEventMap>(type: T, handler: (param: SwapChainEventMap[T]) => unknown): void;
    private dispatch;
    private swap;
}
export {};
