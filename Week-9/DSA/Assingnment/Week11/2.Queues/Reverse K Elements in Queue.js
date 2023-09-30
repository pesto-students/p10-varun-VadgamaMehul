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
reverseQueue(q, 3);
q.printQueue();

// function reverseQueue(que, counter, k) {
//   if (counter === k) {
//     return;
//   }

//   let num = que.front();
//   que.deQueue();
//   reverseQueue(que, counter + 1, k);

//   que.enQueue(num);
// }

function reverseQueue(que, k) {
  let s = [];
  //   let q = new Queue();

  if (que.size() !== 0) {
    for (let i = 0; i < k; i++) {
      let ele = que.deQueue();
      s.push(ele);
      // let el = s.pop();
      // q.enQueue(el)
    }
    for (let i = 0; i < k; i++) {
      let el = s.pop();
      que.enQueue(el);
    }
    let size = que.size() - k;
    for (let i = 0; i < size; i++) {
      let ele = que.deQueue();
      que.enQueue(ele);
    }
  }
}
