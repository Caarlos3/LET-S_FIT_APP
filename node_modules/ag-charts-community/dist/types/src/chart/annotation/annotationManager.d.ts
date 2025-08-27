import type { AgAnnotation, AgAnnotationsThemeableOptions } from 'ag-charts-types';
import type { MementoOriginator } from '../../api/state/memento';
import type { EventsHub } from '../../core/eventsHub';
import type { Group } from '../../scene/group';
import type { Node } from '../../scene/node';
import type { TypedEvent } from '../../util/observable';
type AnnotationsMemento = AgAnnotation[];
export declare class AnnotationManager implements MementoOriginator<AnnotationsMemento> {
    private readonly eventsHub;
    private readonly annotationRoot;
    private readonly fireChartEvent;
    mementoOriginatorKey: "annotations";
    private annotations;
    private styles?;
    constructor(eventsHub: EventsHub, annotationRoot: Group, fireChartEvent: <TEvent extends TypedEvent>(event: TEvent) => void);
    createMemento(): AnnotationsMemento;
    guardMemento(blob: unknown): blob is AnnotationsMemento | undefined;
    restoreMemento(_version: string, _mementoVersion: string, memento: AnnotationsMemento | undefined): void;
    updateData(annotations?: AnnotationsMemento): void;
    fireChangedEvent(): void;
    attachNode(node: Node): () => this;
    setAnnotationStyles(styles: AgAnnotationsThemeableOptions): void;
    getAnnotationTypeStyles(type: keyof Omit<AgAnnotationsThemeableOptions, 'axesButtons' | 'enabled' | 'optionsToolbar' | 'toolbar' | 'snap'>): import("ag-charts-types").AgFibonacciAnnotationStyles | import("ag-charts-types").AgLineAnnotationStyles | import("ag-charts-types").AgCalloutAnnotationStyles | import("ag-charts-types").AgTextAnnotationStyles | import("ag-charts-types").AgCommentAnnotationStyles | import("ag-charts-types").AgNoteAnnotationStyles | import("ag-charts-types").AgCrossLineAnnotationStyles | import("ag-charts-types").AgDisjointChannelAnnotationStyles | import("ag-charts-types").AgParallelChannelAnnotationStyles | import("ag-charts-types").AgShapeAnnotationStyles | import("ag-charts-types").AgMeasurerAnnotationStyles | import("ag-charts-types").AgQuickMeasurerAnnotationStyles | undefined;
    private cleanData;
}
export {};
