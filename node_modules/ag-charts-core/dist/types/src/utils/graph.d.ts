/**
 * A graph that is optimised for vertex lookup and adjacency by edge value.
 */
export declare class AdjacencyListGraph<V, E = undefined> {
    private _vertexCount;
    private readonly cachedNeighboursEdge?;
    private readonly processedEdge?;
    protected pendingProcessingEdgesFrom: Vertex<V>[];
    protected pendingProcessingEdgesTo: Vertex<V>[];
    constructor(cachedNeighboursEdge?: E, processedEdge?: E);
    clear(): void;
    addVertex(value: V): Vertex<V>;
    addEdge(from: Vertex<V>, to: Vertex<V>, edge: E): void;
    removeVertex(vertex: Vertex<V>): void;
    removeEdge(from: Vertex<V>, to: Vertex<V>): void;
    removeEdges(from: Vertex<V>, edgeValue: E): void;
    getVertexValue(vertex: Vertex<V>): V;
    neighbours(from: Vertex<V>): Generator<Vertex<V>, void, unknown>;
    neighboursAndEdges(from: Vertex<V, E>): Generator<[Vertex<V>, E], void, unknown>;
    neighboursWithEdgeValue(from: Vertex<V>, edgeValue: E): Vertex<V, unknown>[] | undefined;
    findNeighbour(from: Vertex<V>, edgeValue: E): Vertex<V> | undefined;
    findNeighbourValue(from: Vertex<V>, edgeValue: E): V | undefined;
    findNeighbourWithValue(from: Vertex<V>, value: V, edgeValue?: E): Vertex<V> | undefined;
    findVertexAlongEdge(from: Vertex<V>, findValues: Array<V>, edgeValue: E): Vertex<V> | undefined;
    adjacent(from: Vertex<V>, to: Vertex<V>): boolean;
}
/**
 * A wrapper class to ensure each vertex is unique even if the value is the same object.
 */
export declare class Vertex<V, E = unknown> {
    value: V;
    edges: Map<E, Vertex<V>[]>;
    private _cachedNeighbours?;
    constructor(value: V);
    readCachedNeighbours(): Map<V, Vertex<V, unknown>> | undefined;
    updateCachedNeighbours(): Map<V, Vertex<V, unknown>>;
    clear(): void;
}
