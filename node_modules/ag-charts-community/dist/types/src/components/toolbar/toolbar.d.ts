import type { BoxBounds } from 'ag-charts-core';
import type { EventsHub } from '../../core/eventsHub';
import type { LocaleManager } from '../../locale/localeManager';
import type { ModuleContext } from '../../module/moduleContext';
import { BBox } from '../../scene/bbox';
import { Listeners } from '../../util/listeners';
import type { RovingDirection } from '../../widget/rovingDirection';
import { ToolbarWidget } from '../../widget/toolbarWidget';
import type { MouseWidgetEvent } from '../../widget/widgetEvents';
import { ToolbarButtonWidget, type ToolbarButtonWidgetOptions } from './toolbarButtonWidget';
export interface ToolbarButtonOptions extends ToolbarButtonWidgetOptions {
    section?: string;
}
export interface ToolbarEventMap<ButtonOptions extends ToolbarButtonOptions = ToolbarButtonOptions> {
    'button-pressed': {
        event: MouseWidgetEvent<'click'>;
        button: ButtonOptions & {
            index: number;
        };
        buttonBounds: BoxBounds;
    };
    'button-focused': {
        button: {
            index: number;
        };
    };
}
export declare abstract class BaseToolbar<ButtonOptions extends ToolbarButtonOptions = ToolbarButtonOptions, ButtonWidget extends ToolbarButtonWidget = ToolbarButtonWidget, EventMap extends ToolbarEventMap<ButtonOptions> = ToolbarEventMap<ButtonOptions>> extends ToolbarWidget {
    private ariaLabelId;
    horizontalSpacing: number;
    verticalSpacing: number;
    protected readonly events: Listeners<keyof EventMap & string, any>;
    protected hasPrefix: boolean;
    private readonly buttonWidgets;
    protected readonly eventsHub: EventsHub;
    protected readonly localeManager: LocaleManager;
    private readonly updateAriaLabel;
    constructor({ eventsHub, localeManager }: ModuleContext, ariaLabelId: string, orientation: RovingDirection);
    setAriaLabelId(ariaLabelId: string): void;
    addToolbarListener<K extends keyof EventMap & string>(eventType: K, handler: (event: EventMap[K]) => void): () => void;
    clearButtons(): void;
    updateButtons(buttons: Array<ButtonOptions>): void;
    updateButtonByIndex(index: number, button: ButtonOptions): void;
    clearActiveButton(): void;
    toggleActiveButtonByIndex(index: number): void;
    toggleButtonEnabledByIndex(index: number, enabled: boolean): void;
    toggleSwitchCheckedByIndex(index: number, checked: boolean): void;
    getButtonBounds(): BBox[];
    setButtonHiddenByIndex(index: number, hidden: boolean): void;
    protected getButtonWidgetBounds(buttonWidget: ButtonWidget): BBox;
    private refreshButtonClasses;
    private createButton;
    protected abstract createButtonWidget(): ButtonWidget;
}
export declare class Toolbar<ButtonOptions extends ToolbarButtonOptions> extends BaseToolbar<ButtonOptions> {
    protected createButtonWidget(): ToolbarButtonWidget;
}
