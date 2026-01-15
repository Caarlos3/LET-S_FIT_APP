interface FormatterOptions {
    prefix?: string;
    fill?: string;
    align?: string;
    sign?: string;
    symbol?: string;
    zero?: string;
    width?: number;
    comma?: string;
    precision?: number;
    trim?: boolean;
    type?: string;
    suffix?: string;
}
export declare function isValidNumberFormat(value: unknown): boolean;
export declare function parseNumberFormat(format: string): FormatterOptions | undefined;
export declare function createNumberFormatter(format: FormatterOptions): (n: number, fractionDigits?: number) => string;
export declare function createNumberFormatter(format: string): ((n: number, fractionDigits?: number) => string) | undefined;
export {};
