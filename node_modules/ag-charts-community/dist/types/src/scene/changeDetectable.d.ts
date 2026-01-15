type Target = {
    [K in string]: any;
} & {
    onChangeDetection(privateKey: string): void;
};
interface SceneChangeDetectionOptions<T = any> {
    convertor?: (o: any) => any;
    changeCb?: (o: T) => any;
    checkDirtyOnAssignment?: boolean;
    equals?: (newValue: T, oldValue: T) => boolean;
}
interface SceneObjectChangeDetectionOptions<T = any> {
    convertor?: (o: any) => any;
    changeCb?: (o: T) => any;
    checkDirtyOnAssignment?: boolean;
    equals: (newValue: T, oldValue: T) => boolean;
}
interface SceneArrayChangeDetectionOptions<T = any> {
    convertor?: (o: any) => any;
    changeCb?: (o: T) => any;
    checkDirtyOnAssignment?: boolean;
    equals?: never;
}
export declare const TRIPLE_EQ: (lhs: unknown, rhs: unknown) => boolean;
export declare function SceneChangeDetection<T extends Target = any>(opts?: SceneChangeDetectionOptions): (target: T, key: string) => void;
export declare function SceneRefChangeDetection<T extends Target = any>(opts?: SceneChangeDetectionOptions): (target: T, key: string) => void;
export declare function SceneObjectChangeDetection<T extends Target = any>(opts: SceneObjectChangeDetectionOptions): (target: T, key: string) => void;
export declare function SceneArrayChangeDetection<T extends Target = any>(opts?: SceneArrayChangeDetectionOptions): (target: T, key: string) => void;
export {};
