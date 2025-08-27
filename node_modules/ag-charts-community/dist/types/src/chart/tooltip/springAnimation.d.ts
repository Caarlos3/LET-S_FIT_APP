import { EventEmitter } from 'ag-charts-core';
interface SpringAnimationUpdateEvent {
    readonly x: number;
    readonly y: number;
}
export declare class SpringAnimation {
    readonly events: EventEmitter<{
        update: SpringAnimationUpdateEvent;
    }>;
    private x1;
    private y1;
    x: number;
    y: number;
    private vx;
    private vy;
    private t0;
    private animationFrameHandle;
    reset(): void;
    update(x: number, y: number): void;
    private onFrame;
    private emitUpdate;
}
export {};
