type LinkedListItem<T> = {
    value: T;
    next: LinkedListItem<T> | null;
};
export type LinkedList<T> = LinkedListItem<T> | null;
export declare const insertListItemsSorted: <T>(list: LinkedList<T>, items: T[], cmp: (a: T, b: T) => number) => LinkedList<T>;
export {};
