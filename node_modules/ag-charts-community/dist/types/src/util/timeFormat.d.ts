type FormattingFn = (dateTime: Date, paddingChar?: string) => string;
export declare function buildDateFormatter(formatString: string): FormattingFn;
export {};
