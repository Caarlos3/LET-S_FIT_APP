import type { ButtonWidget } from './buttonWidget';
import type { NativeWidget } from './nativeWidget';
import type { RovingDirection } from './rovingDirection';
import { RovingTabContainerWidget } from './rovingTabContainerWidget';
import type { SliderWidget } from './sliderWidget';
export declare class ToolbarWidget extends RovingTabContainerWidget<ButtonWidget | SliderWidget | NativeWidget> {
    constructor(orientation?: RovingDirection);
    protected destructor(): void;
}
