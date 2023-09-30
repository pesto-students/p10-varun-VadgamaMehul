class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  size = 0;
  constructor() {
    this.head = null;
    this.tail = this.head;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  print() {
    let str = "";
    let currentNode = this.head;
    while (currentNode) {
      str = str + currentNode.data + "->";
      currentNode = currentNode.next;
    }
    console.log(str);
  }
}


let LL = new LinkedList();
LL.insert(21);
LL.insert(22);
LL.insert(23);
LL.insert(24);
LL.insert(25);
LL.insert(26);
// console.log(LL);

function revers(LL){
    let prev = null;
    let currentNode = LL.head;
    let frw = null;
    while(currentNode){
        frw = currentNode.next;
        currentNode.next = prev;
        prev = currentNode;
        currentNode = frw;          
    }
    return prev;
}

console.log(revers(LL));
// LL.print();