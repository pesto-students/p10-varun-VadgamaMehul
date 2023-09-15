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

// let arr = [5, 3, 8, 4, 2, 7, 1];
let ar = [73,74,75,71,69,72,76,73]

function NextGretestNum(arr) {
  let st = new Stack(arr.length);
  st.push(-1);
  let ans = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    let currentEle = arr[i];
    let top = st.peek();
    while (st.peek() <= currentEle) {
      st.pop();
    }
    
    if (st.isEmpty()) {
      st.push(-1);
    }
    top = st.peek();
    ans[i] = st.peek();
    st.push(currentEle);
  }

  return ans;
}

let a = NextGretestNum(ar);
console.log(a);
