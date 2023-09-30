class Queue {
  constructor() {
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    if (this.stack.length === 0) {
      return "Queue is empty";
    } else {
      return function frontElement(stack, size) {
        let a = stack[0];
        if (size === 0) {
          stack.pop();
          return;
        }
      
        let num = stack.pop();
      
        frontElement(stack, size - 1);
      
        stack.push(num);
        return a;
      }(this.stack,this.stack.length-1);
    }
  }

  front() {
    if (this.stack.length === 0) {
      return "Queue is empty";
    } else {
      return this.stack[0];
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  printQueue() {
    console.log(this.stack.join(" "));
  }
}

let q = new Queue();

let input = ['push(1)','push(2)','push(3)','pop()','pop()']

let ans = [];

console.log(ans);

// function frontElement(stack, size) {
//   let a = stack[0];
//   if (size === 0) {
//     stack.pop();
//     return;
//   }

//   let num = stack.pop();

//   frontElement(stack, size - 1);

//   stack.push(num);
//   return a;
// }

// let st = [1, 2, 3, 4, 5];
// frontElement(st, st.length - 1);
// console.log(st);
