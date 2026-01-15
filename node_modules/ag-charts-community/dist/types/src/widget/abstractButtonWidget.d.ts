import { Widget } from './widget';
import type { WidgetEventMap as EventMap } from './widgetEvents';
type R = ReturnType<Widget['addListener']>;
export declare class AbstractButtonWidget<TElement extends HTMLElement> extends Widget<TElement> {
    constructor(element: TElement, role?: 'menuitem');
    protected destructor(): void;
    setEnabled(enabled: boolean): void;
    addListener<K extends keyof EventMap>(type: K, listener: (ev: EventMap[K], current: this) => unknown): R;
}
export {};
