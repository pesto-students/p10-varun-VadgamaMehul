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

  size() {
    return this.item.length;
  }

  peek(){
    if(this.isEmpty()){
        console.log("Stack is Empty");
    }
    else{
        console.log(this.item[this.item.length-1]);
    }
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
s.printStack();
console.log(s.isEmpty());
s.push(1)
s.push(1)
s.push(1)
s.pop()
s.printStack();
s.peek()
console.log(s.isEmpty());
