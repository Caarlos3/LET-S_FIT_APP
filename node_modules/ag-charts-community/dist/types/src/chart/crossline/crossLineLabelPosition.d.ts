import type { BBox } from '../../scene/bbox';
export type CrossLineLabelPosition = 'top' | 'left' | 'right' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'inside' | 'inside-left' | 'inside-right' | 'inside-top' | 'inside-bottom' | 'inside-top-left' | 'inside-bottom-left' | 'inside-top-right' | 'inside-bottom-right';
export declare function calculateLabelTranslation({ yDirection, padding, position, bbox, }: {
    yDirection: boolean;
    padding: number;
    position: CrossLineLabelPosition;
    bbox: BBox;
}): {
    xTranslation: number;
    yTranslation: number;
};
