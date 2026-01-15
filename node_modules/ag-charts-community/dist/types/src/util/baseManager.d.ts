import { CleanupRegistry } from 'ag-charts-core';
export declare abstract class BaseManager {
    protected readonly cleanup: CleanupRegistry;
    protected destroyed: boolean;
    destroy(): void;
}
