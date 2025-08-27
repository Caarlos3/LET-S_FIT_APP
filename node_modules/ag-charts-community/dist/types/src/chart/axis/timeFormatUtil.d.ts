import type { AgTimeIntervalUnit } from 'ag-charts-types';
export declare const defaultTimeFormats: Record<AgTimeIntervalUnit, string>;
export declare function deriveTimeSpecifier(format: string | Partial<Record<string, string>> | undefined, unit: AgTimeIntervalUnit, truncateDate?: 'year' | 'month' | 'day'): string;
