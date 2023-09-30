class Queue {
  constructor() {
    this.items = [];
  }

  enQueue(value) {
    this.items.push(value);
  }

  deQueue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    console.log(this.items.join(" "));
  }

  size() {
    return this.items.length;
  }
}

let q = new Queue();
let input = [1, 2, 3, 4, 5];
for (let val of input) {
  q.enQueue(val);
}
q.printQueue();
reverseQueue(q, q.size() - 1);
q.printQueue();

function reverseQueue(que, size) {
  if (que.size() === 0) {
    return;
  }

  let num = que.front();
  que.deQueue();
  reverseQueue(que, size - 1);

  que.enQueue(num);
}
