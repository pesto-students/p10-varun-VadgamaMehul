class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.size = 0;
  }

  enQueue(value) {
    let node = new Node(value);
    if (this.front == null && this.rear == null) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  deQueue() {
    let value;
    if (this.front == null && this.rear == null) {
      return "Queue is empty";
    } else if (this.front == this.rear) {
      value = this.front.value;
      this.front = this.rear = null;
    } else {
      value = this.front.value;
      this.front = this.front.next;
    }
    this.size--;
    return value;
  }

  frnt() {
    if (this.size === 0) {
      return "Queue is empty";
    } else {
      return this.front.value;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  printQueue() {
    let currNode = this.front;
    let ans = "";
    while (currNode) {
      ans = ans + currNode.value + "->";
      currNode = currNode.next;
    }
    console.log(ans);
  }
}

let q = new Queue();

q.enQueue(1);
q.enQueue(2);
q.enQueue(3);
q.printQueue();
q.deQueue();
// q.deQueue()
q.printQueue();
console.log(q);
console.log(q.frnt());
