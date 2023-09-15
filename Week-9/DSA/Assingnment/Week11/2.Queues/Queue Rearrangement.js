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

let a = [5, 2, 8, 3, 9, 4];
for (let val of a) {
  q.enQueue(val);
}

q.printQueue();
reArrangemnet(q);
q.printQueue();

function reArrangemnet(que) {
  let evenQ = new Queue();
  let oddQ = new Queue();
  let len = que.size;
  for (let i = 0; i < len; i++) {
    if (que.frnt() % 2 === 0) {
      evenQ.enQueue(que.frnt());
      que.deQueue();
    } else {
      oddQ.enQueue(que.frnt());
      que.deQueue();
    }
  }

  let lenEven = evenQ.size;
  let lenodd = oddQ.size;
  for (let i = 0; i < lenEven; i++) {
    let elm = evenQ.deQueue();
    que.enQueue(elm);
  }
  for (let i = 0; i < lenodd; i++) {
    let elm = oddQ.deQueue();
    que.enQueue(elm);
  }
}
