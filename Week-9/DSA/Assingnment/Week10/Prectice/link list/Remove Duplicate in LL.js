class LinkedList {
  //make cons. to call head by default
  //in start next is null and head = tail bcz only one node is there and size is one
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }

  //for insert a new node
  appendNode(nodeData) {
    let newNode = {
      value: nodeData,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  //traversing linked list
  traversing() {
    let counter = 0;
    let currentNode = this.head;
    while (counter < this.size) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
      counter++;
    }
  }

  //delet node
  deleteNode(index) {
    let counter = 1;
    let lead = this.head;
    if (index === 1) {
      this.head = this.head.next;
      this.size--;
    } else if (index === this.size) {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      lead.next = null;
      //   console.log(lead);
      this.tail = lead;
      this.size--;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      let nextNode = lead.next.next;
      lead.next = nextNode;
      this.size--;
      //   console.log(lead);
    }
  }

  //Insert Node
  insertNode(data, index) {
    let counter = 1;
    let newNode = {
      value: data,
      next: null,
    };
    let lead = this.head;
    if (index === 1) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    } else if (index === this.size + 1) {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      lead.next = newNode;
      this.tail = newNode;
      //   console.log(lead);
      this.size++;
    } else {
      while (counter < index - 1) {
        lead = lead.next;
        counter++;
      }
      newNode.next = lead.next;
      lead.next = newNode;
      this.size++;
      //   console.log(lead.value);
    }
  }

  //print Linked list
  print() {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== this.size) {
      console.log(currentNode.value);
      counter++;
      currentNode = currentNode.next;
    }
  }

  value(index) {
    let counter = 1;
    let currentNode = this.head;
    while (counter !== index) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
}

let list = new LinkedList(1);
list.appendNode(2);
list.appendNode(3);
list.appendNode(2);
list.appendNode(4);
list.appendNode(1);

// list.print();
let lis = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
function removeDuplicate(list) {
  let map = new Map();
  let index = 1;
  for (let i = 1; i <= list.size; i++) {
    let val = list.value(i);
    if (map.has(val)) {
      list.deleteNode(i);
    } else {
      map.set(list.value(i), true);
    }
  }
}

list.print();
console.log("-------------------");
// removeDuplicate(list);
list.deleteNode(1);
list.print();
console.log(list);
