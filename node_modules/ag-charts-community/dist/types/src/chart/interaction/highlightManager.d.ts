import type { EventsHub, HighlightNodeDatum } from '../../core/eventsHub';
/**
 * Manages the actively highlighted series/datum for a chart. Tracks the requested highlights from
 * distinct dependents and handles conflicting highlight requests.
 */
export declare class HighlightManager {
    private readonly eventsHub;
    private readonly highlightStates;
    constructor(eventsHub: EventsHub);
    updateHighlight(callerId: string, highlightedDatum?: HighlightNodeDatum): void;
    getActiveHighlight(): HighlightNodeDatum | undefined;
    private isEqual;
}
