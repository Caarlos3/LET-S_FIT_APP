declare const elementIDBrand: unique symbol;
export type ElementID = string & {
    readonly [elementIDBrand]: true;
};
export declare function resetIds(): void;
export declare function createId(instance: any): string;
export declare function createElementId(): ElementID;
export declare function generateUUID(): string;
export {};
