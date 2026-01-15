/**
 * Primitive to allow coordination between async processes.
 */
export declare class AsyncAwaitQueue {
    private readonly queue;
    /** Await another async process to call notify(). */
    await(timeout?: number): Promise<boolean>;
    /** Trigger any await()ing async processes to continue. */
    notify(): void;
}
export declare function pause(delayMilliseconds?: number): Promise<unknown>;
