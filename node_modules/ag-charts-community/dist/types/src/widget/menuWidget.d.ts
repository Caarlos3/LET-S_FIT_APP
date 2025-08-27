import { MenuItemWidget } from './menuItemWidget';
import type { RovingDirection } from './rovingDirection';
import { RovingTabContainerWidget } from './rovingTabContainerWidget';
import type { WidgetEvent } from './widgetEvents';
export declare class MenuWidget extends RovingTabContainerWidget<MenuItemWidget> {
    private openScope?;
    constructor(orientation?: RovingDirection);
    protected destructor(): void;
    addSeparator(): Element;
    protected onChildAdded(child: MenuItemWidget): void;
    protected onChildRemoved(child: MenuItemWidget): void;
    addSubMenu(): {
        subMenuButton: MenuItemWidget;
        subMenu: MenuWidget;
    };
    private readonly closeSubMenu;
    private openSubMenu;
    open(event: WidgetEvent, opts?: {
        overrideFocusVisible?: boolean;
    }): void;
    private selfClose;
    close(): void;
}
