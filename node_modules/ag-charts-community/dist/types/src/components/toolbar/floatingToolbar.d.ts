import { type BoxBounds } from 'ag-charts-core';
import type { ModuleContext } from '../../module/moduleContext';
import { BBox } from '../../scene/bbox';
import type { PopoverOptions } from '../popover/popover';
import { BaseToolbar, type ToolbarButtonOptions, type ToolbarEventMap } from './toolbar';
import type { ToolbarButtonWidget } from './toolbarButtonWidget';
export interface FloatingToolbarAnchor {
    x: number;
    y: number;
    position?: 'above' | 'above-left' | 'right' | 'below';
}
interface FloatingToolbarEventMap<ButtonOptions extends ToolbarButtonOptions> extends ToolbarEventMap<ButtonOptions> {
    'toolbar-moved': {
        buttonBounds: Array<BoxBounds>;
        popoverBounds: BoxBounds;
    };
}
export declare abstract class FloatingToolbar<ButtonOptions extends ToolbarButtonOptions, ButtonWidget extends ToolbarButtonWidget> extends BaseToolbar<ButtonOptions, ButtonWidget, FloatingToolbarEventMap<ButtonOptions>> {
    protected hasPrefix: boolean;
    private readonly popover;
    private popoverBounds?;
    private readonly dragHandle;
    constructor(ctx: ModuleContext, ariaLabelId: string, id: string);
    destroy(): void;
    show(options?: PopoverOptions): void;
    hide(): void;
    setAnchor(anchor: FloatingToolbarAnchor): void;
    hasBeenDragged(): boolean;
    ignorePointerEvents(): void;
    capturePointerEvents(): void;
    private onPopoverMoved;
    protected getButtonWidgetBounds(buttonWidget: ButtonWidget): BBox;
}
export {};
