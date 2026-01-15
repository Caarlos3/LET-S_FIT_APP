import type { ProcessedData } from '../../data/dataModel';
import type { CartesianSeriesNodeDataContext, CartesianSeriesNodeDatum } from './cartesianSeries';
export declare function calculateDataDiff<N extends CartesianSeriesNodeDatum>(seriesId: string, datumSelection: Iterable<{
    datum: N;
}>, getDatumId: (datum: N) => string, contextNodeData: CartesianSeriesNodeDataContext<N, any>, previousContextNodeData?: CartesianSeriesNodeDataContext<N, any>, processedData?: ProcessedData<unknown>): import("../../data/dataModel").ProcessedOutputDiff | undefined;
