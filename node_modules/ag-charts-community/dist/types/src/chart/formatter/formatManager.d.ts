import { type AgTimeIntervalUnit, type CategoryFormatterParams, type DateFormatterParams, type DateFormatterStyle, type FormatterConfiguration, type NumberFormatterParams } from 'ag-charts-types';
import { Listeners } from '../../util/listeners';
export type GlobalContextlessFormatterParams = Omit<NumberFormatterParams<any, any>, 'context'> | Omit<DateFormatterParams<any, any>, 'context'> | Omit<CategoryFormatterParams<any, any>, 'context'>;
export type GlobalContextFormatter = (fn: (params: GlobalContextlessFormatterParams) => string | undefined, params: GlobalContextlessFormatterParams, contextProvider?: {
    context?: unknown;
}) => string | undefined;
type Specifier = Record<AgTimeIntervalUnit, string> | string;
interface FormatParams {
    specifier?: Record<string, string> | string;
    truncateDate?: 'year' | 'month' | 'day';
}
export declare class FormatManager extends Listeners<'format-changed', () => void> {
    private readonly formats;
    private readonly dateFormatter;
    formatter: FormatterConfiguration<any> | undefined;
    static mergeSpecifiers(a: Specifier | undefined, ...specifiers: Array<Specifier>): Specifier;
    static mergeSpecifiers(a: Specifier, ...specifiers: Array<Specifier | undefined>): Specifier;
    static mergeSpecifiers(...specifiers: Array<Specifier | undefined>): Specifier | undefined;
    static getFormatter(type: 'number' | 'date' | 'category', specifier: string | Partial<Record<AgTimeIntervalUnit, string>>, unit?: AgTimeIntervalUnit, style?: DateFormatterStyle, { truncateDate }?: {
        truncateDate?: FormatParams['truncateDate'];
    }): ((value: any, fractionDigits?: number) => string) | undefined;
    setFormatter(formatter: FormatterConfiguration<any> | undefined): void;
    format(formatInContext: GlobalContextFormatter, params: GlobalContextlessFormatterParams, { specifier, truncateDate }?: FormatParams): string | undefined;
    defaultFormat(params: GlobalContextlessFormatterParams, { specifier, truncateDate }?: FormatParams): string;
}
export {};
