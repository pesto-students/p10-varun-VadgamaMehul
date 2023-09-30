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

let list = new Linkedlist();
// let input = [4, 3, 7, 8, 6, 2, 1];
let input = [1, 2, 3, 4, 5];
for (let i = 0; i < input.length; i++) {
  list.appendNode(input[i]);
}

function swap(list, i, j) {
  let firstNode, secondNode;
  let currentNode = list.head;
  let k = 1;
  while (k <= list.size) {
    // console.log(k);
    if (i === k) {
      firstNode = currentNode;
    }
    if (j === k) {
      secondNode = currentNode;
    }
    currentNode = currentNode.next;
    k++;
  }
  //   console.log(firstNode);
  //   console.log(secondNode);
  if (firstNode && secondNode) {
    let temp = firstNode.value;
    firstNode.value = secondNode.value;
    secondNode.value = temp;
  }
}

function zigZag(list) {
  for (let i = 2; i <= list.size; i = i + 2) {
    if (
      list.value(i - 1) > list.value(i) ||
      list.value(i + 1) > list.value(i)
    ) {
      if (list.value(i - 1) > list.value(i + 1)) {
        swap(list, i - 1, i);
      }
      else 
      swap(list, i + 1, i);
    }
  }
}


zigZag(list);
list.print();
