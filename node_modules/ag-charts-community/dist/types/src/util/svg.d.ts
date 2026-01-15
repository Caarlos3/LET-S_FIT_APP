export type SVGCommand = 'z' | 'h' | 'v' | 'm' | 'l' | 't' | 's' | 'q' | 'c' | 'a';
export type SVGPathSegment = {
    command: SVGCommand;
    params: number[];
};
export declare function parseSvg(d?: string): SVGPathSegment[] | undefined;
export declare function parseSegment(command: SVGCommand, d: string, index: number): [number, SVGPathSegment] | undefined;
