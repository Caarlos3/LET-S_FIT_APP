/**
 * The tree layout is calculated in abstract x/y coordinates, where the root is at (0, 0)
 * and the tree grows downward from the root.
 */
declare class TreeNode {
    label: string;
    parent?: TreeNode | undefined;
    refId?: number | undefined;
    position: number;
    subtreeLeft: number;
    subtreeRight: number;
    children: TreeNode[];
    leafCount: number;
    depth: number;
    prelim: number;
    mod: number;
    ancestor: this;
    change: number;
    shift: number;
    index: number;
    screen: number;
    constructor(label?: string, parent?: TreeNode | undefined, refId?: number | undefined);
    insertTick(tick: string[], index: number): void;
    getLeftSibling(): TreeNode | undefined;
    getLeftmostSibling(): TreeNode | undefined;
    nextLeft(): TreeNode | undefined;
    nextRight(): TreeNode | undefined;
    getSiblings(): TreeNode[];
}
export declare function treeLayout(ticks: string[][]): TreeLayout;
export declare class TreeLayout {
    private readonly dimensions;
    nodes: TreeNode[];
    depth: number;
    insertNode(node: TreeNode): void;
    scaling(extent: number, flip?: boolean): number;
}
export {};
