import type { ButtonWidget } from './buttonWidget';
import type { MenuItemWidget } from './menuItemWidget';
import type { NativeWidget } from './nativeWidget';
import type { RovingDirection } from './rovingDirection';
import type { SliderWidget } from './sliderWidget';
import { Widget } from './widget';
type RovingChildWidgets = SliderWidget | ButtonWidget | MenuItemWidget | NativeWidget;
export declare abstract class RovingTabContainerWidget<TChildWidget extends RovingChildWidgets> extends Widget<HTMLDivElement, TChildWidget> {
    private focusedChildIndex;
    get orientation(): RovingDirection;
    set orientation(orientation: RovingDirection);
    constructor(initialOrientation: RovingDirection, role: 'toolbar' | 'list' | 'menu');
    focus(): void;
    clear(): void;
    private addChildListeners;
    private removeChildListeners;
    protected onChildAdded(child: RovingChildWidgets): void;
    protected onChildRemoved(removedChild: RovingChildWidgets): void;
    private readonly onChildFocus;
    private readonly onChildKeyDown;
}
export {};
