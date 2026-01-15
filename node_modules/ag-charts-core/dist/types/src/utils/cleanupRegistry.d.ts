import type { AnyFn } from '../interfaces/globalTypes';
type RegisteredCallback = AnyFn | false | null | undefined;
export declare class CleanupRegistry {
    protected readonly callbacks: Set<AnyFn>;
    flush(): void;
    merge(registry: CleanupRegistry): void;
    register(...callbacks: RegisteredCallback[]): void;
}
export {};
