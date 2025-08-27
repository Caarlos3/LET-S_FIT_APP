export declare const BREAK_TRANSFORM_CHAIN: unique symbol;
type TransformFn = (target: any, key: string | symbol, value: any, oldValue?: any) => any | typeof BREAK_TRANSFORM_CHAIN;
type ObserveFn = (target: any, value: any, oldValue?: any) => void;
interface TransformConfig {
    setters: TransformFn[];
    getters: TransformFn[];
    observers: ObserveFn[];
    optional?: boolean;
}
type ConfigMetadata = Omit<TransformConfig, 'setters' | 'getters' | 'observers'>;
type DecoratedObject = {
    __decorator_config: Record<string, TransformConfig>;
};
export declare function addFakeTransformToInstanceProperty(target: any, propertyKeyOrSymbol: string | symbol): void;
export declare function addTransformToInstanceProperty(setTransform: TransformFn, getTransform?: TransformFn, configMetadata?: ConfigMetadata): PropertyDecorator;
export declare function addObserverToInstanceProperty(setObserver: TransformFn): PropertyDecorator;
export declare function isDecoratedObject(target: any): target is DecoratedObject;
export declare function listDecoratedProperties<T>(target: T): (keyof T)[];
export declare function extractDecoratedProperties(target: any): Record<string, any>;
export {};
