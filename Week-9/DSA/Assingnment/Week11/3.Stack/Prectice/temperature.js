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

let ar = [73, 74, 75, 71, 69, 72, 76, 73];

function dailyTemp(array) {
  let len = array.length;
  let s = new Stack(len);
  s.push(0);
  let ans = [];

  for (let i = len - 1; i >= 0; i--) {
    let currentEle = array[i];
    let top = st.peek();
    while(s.peek() !== -1 && array[s.top] <= currentEle){
        s.pop();
    }
    

  }
  return ans;
}

let a = dailyTemp(ar);
console.log(a);

// function dailyTemperatureIncrease(temperatures) {
//   const n = temperatures.length;
//   const ans = new Array(n).fill(0);
//   const stack = [];

//   for (let i = 0; i < n; i++) {
//     while (
//       stack.length &&
//       temperatures[i] > temperatures[stack[stack.length - 1]]
//     ) {
//       const index = stack.pop();
//       ans[index] = i - index;
//     }
//     stack.push(i);
//   }

//   return ans;
// }

// const input = [5,4,3,2,1,6];
// const output = dailyTemperatureIncrease(input);
// console.log(output); // [1, 1, 4, 2, 1, 1, 0, 0]
