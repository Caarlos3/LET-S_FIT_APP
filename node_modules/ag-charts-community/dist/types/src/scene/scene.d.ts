import { EventEmitter } from 'ag-charts-core';
import type { BBox } from './bbox';
import { type CanvasOptions, HdpiCanvas } from './canvas/hdpiCanvas';
import { Group } from './group';
import { ImageLoader } from './image/imageLoader';
import { LayersManager } from './layersManager';
import { Node } from './node';
type EventMap = {
    'scene-changed': object;
};
export declare class Scene extends EventEmitter<EventMap> {
    static readonly className = "Scene";
    private readonly debug;
    readonly id: string;
    readonly canvas: HdpiCanvas;
    readonly layersManager: LayersManager;
    readonly imageLoader: ImageLoader;
    private root;
    private pendingSize;
    private isDirty;
    private readonly cleanup;
    constructor(canvasOptions: CanvasOptions);
    waitingForUpdate(): boolean;
    get width(): number;
    get height(): number;
    get pixelRatio(): number;
    /** @deprecated v10.2.0 Only used by AG Grid Sparklines */
    setContainer(value: HTMLElement): this;
    setRoot(node: Group | null): this;
    updateDebugFlags(): void;
    clearCanvas(): void;
    attachNode<T extends Node>(node: T): () => this;
    appendChild<T extends Node>(node: T): this;
    removeChild<T extends Node>(node: T): this;
    download(fileName?: string, fileFormat?: string): void;
    /** NOTE: Integrated Charts undocumented image download method. */
    getDataURL(fileFormat?: string): string;
    resize(width: number, height: number, pixelRatio: number | undefined): boolean;
    render(opts?: {
        debugSplitTimes: Record<string, number>;
        extraDebugStats: Record<string, number>;
        seriesRect?: BBox;
    }): void;
    toSVG(): string | undefined;
    /** Alternative to destroy() that preserves re-usable resources. */
    strip(): void;
    destroy(): void;
}
export {};
