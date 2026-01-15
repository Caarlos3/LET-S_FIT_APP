import { EventEmitter } from 'ag-charts-core';
type NotifiableNode = {
    markDirty: () => void;
};
type EventMap = {
    'image-loaded': {
        uri: string;
    };
    'image-error': {
        uri: string;
    };
};
export declare class ImageLoader extends EventEmitter<EventMap> {
    private readonly cache;
    private imageLoadingCount;
    loadImage(uri: string, affectedNode?: NotifiableNode): HTMLImageElement | undefined;
    waitingToLoad(): boolean;
    destroy(): void;
}
export {};
