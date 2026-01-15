import type { LayoutCompleteEvent } from '../../core/eventsHub';
import type { ModuleInstance } from '../../module/baseModule';
import { BaseModuleInstance } from '../../module/module';
import type { ModuleContext } from '../../module/moduleContext';
import { Group } from '../../scene/group';
import { Rect } from '../../scene/shape/rect';
import { Text } from '../../scene/shape/text';
export declare class Background<TImage = never> extends BaseModuleInstance implements ModuleInstance {
    protected readonly ctx: ModuleContext;
    protected readonly node: Group<unknown>;
    protected readonly rectNode: Rect<any>;
    protected readonly textNode: Text<any>;
    visible: boolean;
    fill?: string;
    image?: TImage;
    text?: string;
    constructor(ctx: ModuleContext);
    protected createNode(): Group<unknown>;
    protected onLayoutComplete(e: LayoutCompleteEvent): void;
}
