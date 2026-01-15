import type { EventsHub } from '../../core/eventsHub';
import type { AxisContext } from '../../module/axisContext';
import { Group } from '../../scene/group';
import { Node } from '../../scene/node';
import type { ChartAxisDirection } from '../chartAxisDirection';
interface AxisNodes {
    axisNode: Node;
    gridNode: Node;
    crossLineRangeNode: Node;
    crossLineLineNode: Node;
    crossLineLabelNode: Node;
    labelNode: Node;
}
interface Axis {
    createAxisContext(): AxisContext;
    attachAxis(nodes: AxisNodes): void;
    detachAxis(nodes: AxisNodes): void;
    destroy(): void;
}
export declare class AxisManager {
    private readonly eventsHub;
    private readonly sceneRoot;
    private readonly axes;
    readonly axisGridGroup: Group<unknown>;
    readonly axisGroup: Group<unknown>;
    readonly axisLabelGroup: Group<unknown>;
    readonly axisCrosslineRangeGroup: Group<unknown>;
    readonly axisCrosslineLineGroup: Group<unknown>;
    readonly axisCrosslineLabelGroup: Group<unknown>;
    constructor(eventsHub: EventsHub, sceneRoot: Group);
    updateAxes(oldAxes: Axis[], newAxes: Axis[]): void;
    getAxisContext(direction: ChartAxisDirection): AxisContext[];
    destroy(): void;
}
export {};
