const { isEmpty } = require("lodash");

class DynamicStack {
  constructor() {
    this.item = [];
  }

  push(element) {
    this.item.push(element);
  }

  pop() {
    if (this.item.length <= 0) {
      console.log("Stack is Empty");
    } else {
      this.item.pop();
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

  size() {
    return this.item.length;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.item.length; i++) {
      str = str + this.item[i] + ", ";
    }
    console.log("[ " + str.substring(0, str.length - 2) + " ]");
  }
}

let s = new DynamicStack();

s.push("M");
s.push("E");
s.push("H");
s.push("U");
s.push("L");
// s.printStack();
// console.log(s.size());

//using normal way
function reversStr(str) {
  let size = str.length;
  let stack = new DynamicStack();
  let ans = "";
  for (let i = 0; i < size; i++) {
    let ch = str[i];
    stack.push(ch);
  }

  while (!stack.isEmpty()) {
    ans += stack.peek();
    stack.pop();
  }

  return ans;
}

//Using Recourtion
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
  if (size === 0) {
    return;
  }

  let num = stack.peek();
  stack.pop();

  reversStackRecourtion(stack);

  AddElemetInBottom(stack,num);
}

let a = "mehul";

console.log(reversStr(a));
