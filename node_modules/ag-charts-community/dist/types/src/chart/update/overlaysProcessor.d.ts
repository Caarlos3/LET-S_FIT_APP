import type { EventsHub } from '../../core/eventsHub';
import type { DOMManager } from '../../dom/domManager';
import type { LocaleManager } from '../../locale/localeManager';
import type { DataService } from '../data/dataService';
import type { AnimationManager } from '../interaction/animationManager';
import type { ChartOverlays } from '../overlay/chartOverlays';
import type { ChartLike, UpdateProcessor } from './processor';
export declare class OverlaysProcessor<D extends object> implements UpdateProcessor {
    private readonly chartLike;
    private readonly overlays;
    private readonly eventsHub;
    private readonly dataService;
    private readonly localeManager;
    private readonly animationManager;
    private readonly domManager;
    private readonly cleanup;
    private readonly overlayElem;
    constructor(chartLike: ChartLike, overlays: ChartOverlays, eventsHub: EventsHub, dataService: DataService<D>, localeManager: LocaleManager, animationManager: AnimationManager, domManager: DOMManager);
    destroy(): void;
    private onLayoutComplete;
    private showOverlay;
    private hideOverlay;
}
