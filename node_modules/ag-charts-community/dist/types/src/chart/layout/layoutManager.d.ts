import type { EventListener } from 'ag-charts-core';
import type { AxisLayout, EventsHub } from '../../core/eventsHub';
import type { LayoutContext as ILayoutContext } from '../../module/baseModule';
import { BBox } from '../../scene/bbox';
export interface LayoutState {
    axes?: AxisLayout[];
    clipSeries?: boolean;
    series: {
        rect: BBox;
        paddedRect: BBox;
        visible: boolean;
    };
}
export declare enum LayoutElement {
    Caption = 0,
    Legend = 1,
    ToolbarLeft = 2,
    ToolbarBottom = 3,
    Navigator = 4,
    Overlay = 5
}
export declare class LayoutManager {
    private readonly eventsHub;
    private readonly elements;
    constructor(eventsHub: EventsHub);
    registerElement(element: LayoutElement, listener: EventListener<LayoutContext>): () => boolean | undefined;
    createContext(width: number, height: number): LayoutContext;
    emitLayoutComplete(context: LayoutContext, options: LayoutState): void;
}
declare class LayoutContext implements ILayoutContext {
    readonly width: number;
    readonly height: number;
    readonly layoutBox: BBox;
    constructor(width: number, height: number);
}
export {};
