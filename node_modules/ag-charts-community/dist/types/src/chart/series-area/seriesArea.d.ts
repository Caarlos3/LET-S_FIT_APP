import { CleanupRegistry } from 'ag-charts-core';
import type { Padding } from 'ag-charts-types';
import type { LayoutCompleteEvent } from '../../core/eventsHub';
import type { ModuleContext } from '../../module/moduleContext';
import { Group } from '../../scene/group';
import { Rect } from '../../scene/shape/rect';
import { Border } from '../../util/border';
import { BaseProperties } from '../../util/properties';
export declare class SeriesArea extends BaseProperties {
    protected readonly ctx: ModuleContext;
    protected readonly node: Group;
    protected readonly rectNode: Rect<any>;
    border: Border;
    clip?: boolean;
    cornerRadius: number;
    padding: Padding;
    protected readonly cleanup: CleanupRegistry;
    constructor(ctx: ModuleContext);
    destroy(): void;
    getPadding(): {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    protected createNode(): Group<unknown>;
    protected onLayoutComplete(event: LayoutCompleteEvent): void;
}
