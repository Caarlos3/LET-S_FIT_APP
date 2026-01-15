import type { AgContextMenuItemLiteral, AgContextMenuItemShowOn } from 'ag-charts-types';
import type { ContextMenuEvent, EventsHub } from '../../core/eventsHub';
import type { MouseWidgetEvent } from '../../widget/widgetEvents';
import type { ContextMenuCallback, ContextShowOnMap } from './contextMenuTypes';
import { ContextMenuBuiltins } from './contextMenuTypes';
export declare class ContextMenuRegistry {
    private readonly eventsHub;
    readonly builtins: ContextMenuBuiltins;
    private readonly hiddenActions;
    constructor(eventsHub: EventsHub);
    static check<T extends AgContextMenuItemShowOn>(showOn: T, event: ContextMenuEvent): event is ContextMenuEvent<T>;
    static checkCallback<T extends AgContextMenuItemShowOn>(desiredShowOn: T, showOn: AgContextMenuItemShowOn, _callback: ContextMenuCallback<AgContextMenuItemShowOn>): _callback is ContextMenuCallback<T>;
    dispatchContext<T extends AgContextMenuItemShowOn>(showOn: T, pointerEvent: {
        widgetEvent: MouseWidgetEvent<'contextmenu'>;
        canvasX: number;
        canvasY: number;
    }, context: ContextShowOnMap[T]['context'], position?: {
        x: number;
        y: number;
    }): void;
    isVisible(id: AgContextMenuItemLiteral): boolean;
    setVisible(id: AgContextMenuItemLiteral, visible: boolean): void;
}
