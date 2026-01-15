import type { LayoutCompleteEvent } from '../core/eventsHub';
import type { LayoutContext } from '../module/baseModule';
import { Caption } from './caption';
export declare class ChartCaptions {
    readonly title: Caption;
    readonly subtitle: Caption;
    readonly footnote: Caption;
    positionCaptions(ctx: LayoutContext): void;
    positionAbsoluteCaptions(ctx: LayoutCompleteEvent): void;
    private computeX;
    private positionCaption;
    private shrinkLayoutByCaption;
}
