type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    /**
     * Adding a new node to the end of the queue.
     */
    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;

        // Empty queue
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }

        this.tail.next = node;
        this.tail = node;
    }

    /**
     * Remove the head node from
     * the queue and return its value.
     */
    deque(): T | undefined {
        // Empty queue
        if (!this.head) {
            return undefined;
        }

        this.length--;

        const removedNode = this.head;
        this.head = this.head.next;

        // Not necessary in JS but good practice
        removedNode.next = undefined;

        // Do we have any nodes left?
        if (this.length === 0) {
            this.tail = undefined;
        }

        return removedNode.value;
    }

    /**
     * Returning the value of the head node.
     */
    peek(): T | undefined {
        return this.head?.value;
    }
}
