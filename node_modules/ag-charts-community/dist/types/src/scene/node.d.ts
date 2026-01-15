import { BBox } from './bbox';
import { SceneChangeDetection } from './changeDetectable';
import type { ImageLoader } from './image/imageLoader';
import type { LayersManager } from './layersManager';
import { type ZIndex } from './zIndex';
export { SceneChangeDetection };
export declare enum PointerEvents {
    All = 0,
    None = 1
}
export type RenderContext = {
    ctx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D;
    width: number;
    height: number;
    devicePixelRatio: number;
    clipBBox?: BBox;
    stats?: {
        opsPerformed: number;
        opsSkipped: number;
        nodesRendered: number;
        nodesSkipped: number;
        layersRendered: number;
        layersSkipped: number;
    };
    debugNodeSearch?: (string | RegExp)[];
    debugNodes: Record<string, Node>;
};
export interface NodeOptions {
    name?: string;
    tag?: number;
    zIndex?: ZIndex;
    debugDirty?: boolean;
    scene?: IScene;
}
export type NodeWithOpacity = Node & {
    opacity: number;
};
export type ChildNodeCounts = {
    groups: number;
    nonGroups: number;
    thisComplexity: number;
    complexity: number;
};
export interface IScene {
    layersManager: LayersManager;
    imageLoader: ImageLoader;
}
/**
 * Abstract scene graph node.
 * Each node can have zero or one parent and belong to zero or one scene.
 */
export declare abstract class Node<TDatum = unknown> {
    private static _nextSerialNumber;
    static _debugEnabled: boolean;
    static toSVG(node: Node, width: number, height: number): string | undefined;
    static extractBBoxes(nodes: Iterable<Node>, skipInvisible?: boolean): Generator<BBox, void, unknown>;
    /** Unique number to allow creation order to be easily determined. */
    readonly serialNumber: number;
    readonly childNodeCounts: ChildNodeCounts;
    /** Unique node ID in the form `ClassName-NaturalNumber`. */
    readonly id: string;
    readonly name: string | undefined;
    /**
     * Some number to identify this node, typically within a `Group` node.
     * Usually this will be some enum value used as a selector.
     */
    tag: number;
    transitionOut: boolean | undefined;
    pointerEvents: PointerEvents;
    protected _datum: TDatum | undefined;
    protected _previousDatum: TDatum | undefined;
    protected scene: IScene | undefined;
    private readonly _debugDirtyProperties;
    parentNode: Node | undefined;
    private cachedBBox;
    /**
     * To simplify the type system (especially in Selections) we don't have the `Parent` node
     * (one that has children). Instead, we mimic HTML DOM, where any node can have children.
     * But we still need to distinguish regular leaf nodes from container leafs somehow.
     */
    protected isContainerNode: boolean;
    visible: boolean;
    zIndex: ZIndex;
    protected batchLevel: number;
    private batchDirty;
    constructor(options?: NodeOptions);
    /**
     * Some arbitrary data bound to the node.
     */
    get datum(): any;
    set datum(datum: any);
    get previousDatum(): any;
    get layerManager(): LayersManager | undefined;
    protected get imageLoader(): ImageLoader | undefined;
    closestDatum(): any;
    /** Perform any pre-rendering initialization. */
    preRender(_renderCtx: RenderContext, thisComplexity?: number): ChildNodeCounts;
    /** Guaranteed isolated render - if there is any failure, the Cavans2D context is returned to its prior state. */
    isolatedRender(renderCtx: RenderContext): void;
    render(renderCtx: RenderContext): void;
    setScene(scene?: IScene): void;
    traverseUp(includeSelf?: boolean): Generator<Node, void, unknown>;
    /**
     * Checks if the node is the root (has no parent).
     */
    isRoot(): boolean;
    removeChild(node: Node): void;
    remove(): void;
    destroy(): void;
    batchedUpdate(fn: () => void): void;
    setProperties<T extends Node>(this: T, styles: {
        [K in keyof T]?: T[K];
    }): T;
    containsPoint(_x: number, _y: number): boolean;
    pickNode(x: number, y: number): Node | undefined;
    pickNodes(x: number, y: number, into?: Node<any>[]): Node<any>[];
    getBBox(): BBox;
    protected computeBBox(): BBox | undefined;
    onChangeDetection(property: string): void;
    markDirtyChildrenOrder(): void;
    markDirty(property?: string): void;
    private markDebugProperties;
    private debugDirtyProperties;
    protected onZIndexChange(): void;
    toSVG(): {
        elements: SVGElement[];
        defs?: SVGElement[];
    } | undefined;
}
