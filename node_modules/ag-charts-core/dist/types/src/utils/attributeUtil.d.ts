import type { Direction } from 'ag-charts-types';
import type { Nullable } from '../interfaces/globalTypes';
import type { ElementID } from './id';
export type StrictHTMLElement = HTMLElement & {
    id: ElementID;
};
type AriaRole = 'figure' | 'group' | 'img' | 'list' | 'listitem' | 'menu' | 'menuitem' | 'radio' | 'radiogroup' | 'separator' | 'status' | 'switch' | 'tab' | 'tablist' | 'tabpanel' | 'textbox' | 'toolbar';
export type BaseAttributeTypeMap = {
    role: AriaRole;
    'aria-checked': boolean;
    'aria-controls': ElementID;
    'aria-describedby': ElementID;
    'aria-disabled': boolean;
    'aria-expanded': boolean;
    'aria-haspopup': 'true' | 'false' | 'menu' | 'dialog' | 'grid' | 'listbox' | 'tree';
    'aria-hidden': boolean;
    'aria-label': string;
    'aria-labelledby': ElementID;
    'aria-live': 'assertive' | 'polite';
    'aria-orientation': Direction;
    'aria-selected': boolean;
    'data-focus-override': boolean;
    'data-focus-visible-override': boolean;
    'data-preventdefault': boolean;
    class: string;
    for: ElementID;
    id: ElementID;
    tabindex: 0 | -1;
    title: string;
};
type InputAttributeTypeMap = BaseAttributeTypeMap & {
    placeholder: string;
};
export type AttributeSet = Partial<{
    [K in keyof BaseAttributeTypeMap]: BaseAttributeTypeMap[K];
}>;
export type InputAttributeSet = Partial<{
    [K in keyof InputAttributeTypeMap]: InputAttributeTypeMap[K];
}>;
export type BaseStyleTypeMap = {
    cursor: 'default' | 'pointer' | 'ew-resize' | 'ns-resize' | 'grab' | 'grabbing';
    display: 'none';
    position: 'absolute';
    'pointer-events': 'auto' | 'none';
    width: '100%';
    height: '100%';
};
type StyleSet = Partial<{
    [K in keyof BaseStyleTypeMap]: BaseStyleTypeMap[K];
}>;
export declare function setAttribute<A extends keyof BaseAttributeTypeMap>(e: Nullable<HTMLElement>, qualifiedName: A, value: BaseAttributeTypeMap[A] | undefined): void;
export declare function setAttribute<A extends keyof InputAttributeTypeMap>(e: Nullable<HTMLTextAreaElement>, qualifiedName: A, value: InputAttributeTypeMap[A] | undefined): void;
export declare function setAttributes(e: Nullable<HTMLElement>, attrs: AttributeSet | undefined): void;
export declare function setAttributes(e: Nullable<HTMLTextAreaElement>, attrs: InputAttributeTypeMap | undefined): void;
export declare function getAttribute<A extends keyof BaseAttributeTypeMap, DefaultType extends BaseAttributeTypeMap[A] | undefined>(e: Nullable<HTMLElement | EventTarget>, qualifiedName: A, defaultValue?: DefaultType): BaseAttributeTypeMap[A] | (DefaultType extends undefined ? undefined : never);
export declare function getAttribute<A extends keyof InputAttributeTypeMap, DefaultType extends InputAttributeTypeMap[A] | undefined>(e: Nullable<HTMLTextAreaElement>, qualifiedName: A, defaultValue?: DefaultType): InputAttributeTypeMap[A] | (DefaultType extends undefined ? undefined : never);
export declare function setElementStyle<P extends keyof BaseStyleTypeMap>(e: Nullable<Pick<HTMLElement, 'style'>>, property: P, value: BaseStyleTypeMap[P] | undefined): void;
export declare function setElementStyles(e: Nullable<HTMLElement>, styles: StyleSet): void;
export {};
