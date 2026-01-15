interface CanvasOptions {
    width: number;
    height: number;
    pixelRatio: number;
    willReadFrequently?: boolean;
    canvasElement?: HTMLCanvasElement;
}
/**
 * Wraps the native Canvas element and overrides its CanvasRenderingContext2D to
 * provide resolution independent rendering based on `window.devicePixelRatio`.
 */
export declare class HdpiOffscreenCanvas {
    readonly canvas: OffscreenCanvas;
    readonly context: OffscreenCanvasRenderingContext2D & {
        verifyDepthZero?: () => void;
    };
    width: number;
    height: number;
    pixelRatio: number;
    constructor(options: CanvasOptions);
    drawImage(context: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D, dx?: number, dy?: number): void;
    transferToImageBitmap(): ImageBitmap;
    resize(width: number, height: number, pixelRatio: number): void;
    clear(): void;
    destroy(): void;
}
export {};
