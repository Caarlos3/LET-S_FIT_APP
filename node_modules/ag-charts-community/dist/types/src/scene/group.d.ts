import { BBox } from './bbox';
import type { ChildNodeCounts, IScene, RenderContext } from './node';
import { Node } from './node';
import { type CanvasContext } from './shape/shape';
import { type ZIndex } from './zIndex';
export declare class Group<TDatum = unknown> extends Node<TDatum> {
    static readonly className: string;
    static is(value: unknown): value is Group;
    static computeChildrenBBox(nodes: Iterable<Node>, skipInvisible?: boolean): BBox;
    private static compareChildren;
    private readonly childNodes;
    dirty: boolean;
    private dirtyZIndex;
    private clipRect;
    opacity: number;
    renderToOffscreenCanvas: boolean;
    optimizeForInfrequentRedraws: boolean;
    private layer;
    private image;
    constructor(opts?: {
        readonly name?: string;
        readonly zIndex?: ZIndex;
        readonly renderToOffscreenCanvas?: boolean;
    });
    containsPoint(_x: number, _y: number): boolean;
    protected computeBBox(): BBox | undefined;
    private computeSafeClippingBBox;
    private prepareSharedCanvas;
    setScene(scene?: IScene): void;
    markDirty(property?: string): void;
    markDirtyChildrenOrder(): void;
    /**
     * Appends one or more new node instances to this parent.
     * If one needs to:
     * - move a child to the end of the list of children
     * - move a child from one parent to another (including parents in other scenes)
     * one should use the {@link insertBefore} method instead.
     * @param nodes A node or nodes to append.
     */
    append(nodes: Iterable<Node> | Node): void;
    appendChild<T extends Node>(node: T): T;
    removeChild(node: Node): void;
    clear(): void;
    /**
     * Hit testing method.
     * Recursively checks if the given point is inside this node or any of its children.
     * Returns the first matching node or `undefined`.
     * Nodes that render later (show on top) are hit tested first.
     */
    pickNode(x: number, y: number): Node | undefined;
    pickNodes(x: number, y: number, into?: Node[]): Node[];
    private _lastWidth;
    private _lastHeight;
    private _lastDevicePixelRatio;
    private isDirty;
    preRender(renderCtx: RenderContext): ChildNodeCounts;
    render(renderCtx: RenderContext): void;
    protected applyClip(ctx: CanvasContext, clipRect: BBox): void;
    private renderInContext;
    private sortChildren;
    children(): Generator<Node, void, undefined>;
    excludeChildren(exclude: {
        instance?: any;
        name?: string;
    }): Generator<Node<unknown>, void, unknown>;
    descendants(): Generator<Node, void, undefined>;
    /**
     * Transforms bbox given in the canvas coordinate space to bbox in this group's coordinate space and
     * sets this group's clipRect to the transformed bbox.
     * @param bbox clipRect bbox in the canvas coordinate space.
     */
    setClipRect(bbox?: BBox): void;
    /**
     * Set the clip rect within the canvas coordinate space.
     * @param bbox clipRect bbox in the canvas coordinate space.
     */
    setClipRectCanvasSpace(bbox?: BBox): void;
    private getVisibility;
    toSVG(): {
        elements: SVGElement[];
        defs?: SVGElement[];
    } | undefined;
}
declare const ScalableGroup_base: new (...args: any[]) => import("./transformable").ScalableType<Group<unknown>>;
export declare class ScalableGroup extends ScalableGroup_base {
}
declare const RotatableGroup_base: new (...args: any[]) => import("./transformable").RotatableType<Group<unknown>>;
export declare class RotatableGroup extends RotatableGroup_base {
}
declare const TranslatableGroup_base: new (...args: any[]) => import("./transformable").TranslatableType<Group<unknown>>;
export declare class TranslatableGroup extends TranslatableGroup_base {
}
declare const TransformableGroup_base: new (...args: any[]) => import("./transformable").RotatableType<import("./transformable").TranslatableType<Group<unknown>>>;
export declare class TransformableGroup extends TransformableGroup_base {
}
export {};
