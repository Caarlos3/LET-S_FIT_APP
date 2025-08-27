import type { Formatter, MessageFormatterParams } from 'ag-charts-types';
import type { EventsHub } from '../core/eventsHub';
export declare class LocaleManager {
    private readonly eventsHub;
    private localeText;
    private getLocaleText;
    constructor(eventsHub: EventsHub);
    setLocaleText(localeText: Record<string, string> | undefined): void;
    setLocaleTextFormatter(getLocaleText: Formatter<MessageFormatterParams> | undefined): void;
    t(key: string, variables?: Record<string, any>): string;
}
