const { size } = require("lodash");

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  insert(val) {
    let newNode = new Node(val);
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

function deletNode(LL, node) {
  let currentNode = LL.head;
  let conter = 1;
  if (node == 1) {
    currentNode = currentNode.next;
    LL.head = currentNode;
  } else if (node == LL.size) {
    while (LL.size - 1 > conter) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  } else {
    while (node - 1 > conter) {
      currentNode = currentNode.next;
      conter++;
    }
    let nextNode = currentNode.next.next;
    currentNode.next = nextNode;
  }
  LL.size--;
}

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(2);
ll.insert(1);
// deletNode(ll,3)
ll.print();

removeDublicateInLL(ll);
ll.print();
// console.log(ll);

function removeDublicateInLL(LL) {
  let map = new Map();
  let counter = 0;
  current = LL.head;
  while (current) {
    counter++;
    let val = current.data;
    if (map.has(val)) {
      deletNode(LL, counter);
      LL.size--;
      counter--;
    } else {
      map.set(current.data, true);
    }
    current = current.next;
  }
}
