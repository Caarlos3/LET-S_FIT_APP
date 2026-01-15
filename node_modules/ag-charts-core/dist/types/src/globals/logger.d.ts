export declare function log(...logContent: any[]): void;
export declare function warn(message: any, ...logContent: any[]): void;
export declare function error(message: any, ...logContent: any[]): void;
export declare function table(...logContent: any[]): void;
export declare function warnOnce(messageOrError: unknown, ...logContent: any[]): void;
export declare function errorOnce(messageOrError: unknown, ...logContent: any[]): void;
export declare function reset(): void;
export declare function logGroup<T>(name: string, cb: () => T): T;
