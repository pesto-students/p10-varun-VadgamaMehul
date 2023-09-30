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

function isValidPeranthisis(str) {
  let s = str.length;
  let st = new Stack(s);
  for (let i = 0; i < s; i++) {
    let ch = str[i];

    if (ch === "{" || ch === "[" || ch === "(") {
      st.push(ch);
    } else {
      if (!st.isEmpty()) {
        let top = st.peek();
        if (
          (ch === "}" && top === "{") ||
          (ch === "]" && top === "[") ||
          (ch === ")" && top === "(")
        ) {
          st.pop();
        }
        else return false;
      }
      else return false;
    }
  }
  if(st.isEmpty()) return true;
  else return false;
}

let s = '[{()}][{()}]'

console.log(isValidPeranthisis(s));