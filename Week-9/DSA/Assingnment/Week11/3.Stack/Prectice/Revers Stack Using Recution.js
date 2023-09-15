class DynamicStack {
  constructor() {
    this.item = [];
  }

  size = 0;

  push(element) {
    this.item.push(element);
    this.size++;
  }

  pop() {
    if (this.item.length <= 0) {
      console.log("Stack is Empty");
    } else {
      this.item.pop();
      this.size--;
    }
  }

  isEmpty() {
    return this.item.length <= 0 ? true : false;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
    } else {
      return this.item[this.item.length - 1];
    }
  }
  //   size() {
  //     return this.item.length;
  //   }

  printStack() {
    let str = "";
    for (let i = 0; i < this.item.length; i++) {
      str = str + this.item[i] + ", ";
    }
    console.log("[ " + str.substring(0, str.length - 2) + " ]");
  }
}

class Stack {
  #arr;
  #top;
  constructor(size) {
    this.size = size;
    this.#arr = [];
    this.#top = -1;
  }

  push(item) {
    if (this.size - this.#top > 1) {
      this.#top++;
      this.#arr[this.#top] = item;
    } else console.log("Stack is over-flow!!");
  }

  pop() {
    if (this.#top >= 0) {
      this.#arr[this.#top] = undefined;
      this.#top--;
    } else {
      console.log("Stack is Empty");
    }
  }

  peek() {
    if (this.#top >= 0) {
      return this.#arr[this.#top];
    }
  }

  isEmpty() {
    if (this.#top >= 0) {
      return false;
    } else return true;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.size; i++) {
      str = str + this.#arr[i] + ", ";
    }
    console.log("[ " + str.substring(0, str.length - 2) + " ]");
  }
}

let s = new DynamicStack();
// let s = new Stack(5);
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.push(5);
s.printStack();
// s.peek()
console.log(s.size);
reversStackRecourtion(s);
s.printStack();
console.log(s.size);

function AddElemetInBottom(stack, size, element) {
  //base condition
  if (size === 0) {
    stack.push(element);
    return;
  }

  let num = stack.peek();
  stack.pop();

  AddElemetInBottom(stack, size - 1, element);

  stack.push(num);
}

function reversStackRecourtion(stack) {
  if (stack.size === 0) {
    return;
  }

  let num = stack.peek();
  stack.pop();

  reversStackRecourtion(stack);

  AddElemetInBottom(stack, stack.size, num);
}
