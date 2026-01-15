import { addFakeTransformToInstanceProperty } from './decorator';
export declare const Property: typeof addFakeTransformToInstanceProperty;
export declare class BaseProperties<T extends object = object> {
    handleUnknownProperties(_unknownKeys: Set<unknown>, _properties: T): void;
    set(properties: T): this;
    clear(): this;
    toJson<J>(this: J): T;
}
export declare class PropertiesArray<T extends BaseProperties> extends Array<T> {
    private readonly itemFactory;
    constructor(itemFactory: (new () => T) | ((params: any) => T), ...properties: object[]);
    set(properties: object[]): this;
    reset(properties: object[]): PropertiesArray<T> | undefined;
    toJson(): object[];
}
export declare function isProperties<T extends object>(value: unknown): value is BaseProperties<T>;
