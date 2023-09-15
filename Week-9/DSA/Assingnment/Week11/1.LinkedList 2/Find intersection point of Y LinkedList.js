class Linkedlist {
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
    if (this.head.value === undefined) {
      this.head.value = newNode.value;
      return;
    }
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
    // let counter = 0;
    let currentNode = this.head;
    let Likedlist = "";
    while (currentNode) {
      Likedlist += currentNode.value;
      Likedlist += "->";
      //   counter++;
      currentNode = currentNode.next;
    }
    console.log(Likedlist);
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

function intersectionPointOfTwoList(List1, List2) {
  let L1Len = List1.size;
  let L2Len = List2.size;

  if (L1Len > L2Len) {
    for (let i = 1; i <= L1Len - L2Len; i++) {
      List1.deleteNode(i);
    }
  } else {
    for (let i = 1; i <= L2Len - L1Len; i++) {
      List2.deleteNode(i);
    }
  }
  L1Len = List1.size;
  L2Len = List2.size;
  for (let i = 1; i <= L1Len; i++) {
    if (List1.value(i) == List2.value(i)) {
      return List1.value(i);
    }
    // continue;
  }
  return "No intersection point";
}

let list2 = new Linkedlist();
list2.appendNode(1);
list2.appendNode(2);
list2.appendNode(3);
list2.appendNode(4);
list2.appendNode(5);
list2.appendNode(6);
list2.appendNode(7);
list2.appendNode(8);

let list1 = new Linkedlist();
list1.appendNode(1);
list1.appendNode(2);
list1.appendNode(3);
list1.appendNode(6);
list1.appendNode(7);
list1.appendNode(8);

list1.print();
let a = intersectionPointOfTwoList(list1, list2);
console.log(a);
list1.print();
list2.print();
