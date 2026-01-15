import { type AttributeSet, type InputAttributeSet } from 'ag-charts-core';
import type { AgIconName } from 'ag-charts-types';
type LabelAndIcon = {
    label: string;
    icon?: AgIconName;
};
type IconOnly = {
    label?: never;
    icon: AgIconName;
    altText: string;
};
export type LabelIcon = LabelAndIcon | IconOnly;
export type ButtonOptions = LabelIcon & {
    onPress: (event: MouseEvent) => void;
};
export declare function createButton(options: ButtonOptions, attrs?: AttributeSet): HTMLButtonElement & HTMLElement & {
    id: import("ag-charts-core").ElementID;
};
export interface CheckboxOptions {
    checked: boolean;
    onChange: (checked: boolean, event: Event) => void;
}
export declare function createCheckbox(options: CheckboxOptions, attrs?: AttributeSet): HTMLInputElement & HTMLElement & {
    id: import("ag-charts-core").ElementID;
};
export interface SelectOptions {
    options: Array<{
        label: string;
        value: string;
    }>;
    value: string;
    onChange: (value: string, event: Event) => void;
}
export declare function createSelect(options: SelectOptions, attrs?: AttributeSet): HTMLSelectElement & HTMLElement & {
    id: import("ag-charts-core").ElementID;
};
export interface TextAreaOptions {
    value: string;
    onChange: (value: string, event: Event) => void;
}
export declare function createTextArea(options: TextAreaOptions, attrs?: InputAttributeSet): HTMLTextAreaElement & HTMLElement & {
    id: import("ag-charts-core").ElementID;
};
export declare function createIcon(icon?: AgIconName): HTMLSpanElement & HTMLElement & {
    id: import("ag-charts-core").ElementID;
};
export {};
