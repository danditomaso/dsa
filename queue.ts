type Node<T> = {
  value: T;
  next?: Node<T>;
  prev?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head?: Node<T> | undefined;
  private tail?: Node<T> | undefined;

  constructor() {
    this.head = this.tail = undefined;
  }

  enqueue(item: T): T | undefined {
    const node = { value: item } as Node<T>;
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }
    this.length--;

    const head = this.head;
    this.head = this.head.next;
    return head.value;
  }

  peak(): T | undefined {
    return this.head?.value;
  }
}
