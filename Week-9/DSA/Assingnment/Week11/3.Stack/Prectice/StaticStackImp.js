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

  pop(){
    if(this.#top>=0){
        this.#arr[this.#top] = undefined
        this.#top--;
    }
    else{
        console.log("Stack is Empty");
    }
  }

  peek(){
    if(this.#top>=0){
        return (this.#arr[this.#top]);
    }
  }

  isEmpty(){
    if(this.#top>=0){
        return false;
    }else return true;
  }

  printStack(){
    let str = ""
    for(let i = 0; i<this.size;i++){
       str = str + this.#arr[i]+", ";
    }
    console.log("[ "+str.substring(0,str.length-2)+" ]");
  }
}

let st = new Stack(5);

st.push(5);
st.push(4);
st.push(3);
st.push(2);
st.push(1);
st.peek();
st.pop();
st.pop();
st.pop();
st.pop();
st.push(1);
st.push(5);
st.push(5);
st.push(5);
// st.push(5);
st.pop();
st.pop();
st.pop();
st.pop();
st.pop();
st.pop();
console.log(st.isEmpty());
st.isEmpty();
st.printStack();
// st.push(5);
// console.log(st);

