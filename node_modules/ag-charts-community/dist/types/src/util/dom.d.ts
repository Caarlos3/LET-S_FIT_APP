import { type BoxBounds } from 'ag-charts-core';
import type { AgIconName } from 'ag-charts-types';
export declare function setElementBBox(element: HTMLElement | undefined, bbox: Partial<BoxBounds>): void;
export declare function getElementBBox(element: HTMLElement): BoxBounds;
export declare function focusCursorAtEnd(element: HTMLElement): void;
export declare function isInputPending(): false | void;
export declare function getIconClassNames(icon: AgIconName): string;
