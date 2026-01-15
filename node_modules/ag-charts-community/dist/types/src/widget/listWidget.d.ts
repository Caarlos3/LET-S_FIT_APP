import { RovingTabContainerWidget } from './rovingTabContainerWidget';
import type { SwitchWidget } from './switchWidget';
import { type BeforeWidget } from './widget';
type TChildWidget = SwitchWidget;
export declare class ListWidget extends RovingTabContainerWidget<TChildWidget> {
    constructor();
    protected destructor(): void;
    protected addChildToDOM(child: TChildWidget, before: BeforeWidget<TChildWidget> | undefined): void;
    protected removeChildFromDOM(child: TChildWidget): void;
    setHidden(hidden: boolean): void;
}
export {};
