export declare class SimpleCache<T> {
    protected readonly getter: () => T;
    protected result?: T;
    constructor(getter: () => T);
    get(): T;
    clear(): void;
}
export declare class WeakCache<T extends WeakKey> {
    protected readonly getter: () => T;
    protected result?: WeakRef<T>;
    constructor(getter: () => T);
    get(): T;
    clear(): void;
}
