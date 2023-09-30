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
list.appendNode(4);
list.appendNode(5);
list.appendNode(6);
list.appendNode(7);
list.appendNode(8);
// console.log(list.head);

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

list.print();
console.log("------------------------");
// swap(list, 2, 5);
// list.print();

function reverseKNode(list, k) {
  // k = intervel of index
  for (let i = 1; i <= list.size; i = i + k) {
      let start = i;
    let spanindex = start+k-1;
    while(start < spanindex) {
      swap(list, start, spanindex);
      start++;
      spanindex--;
    }
  }
}

reverseKNode(list, 3);

function reverseLL(list) {
  let start = 1;
  let end = list.size;
  if (list.head === null || list.head.next === null) {
    return list.head;
  } else {
    while (start < end) {
      swap(list, start, end);
      start++;
      end--;
    }
  }
}

// reverseLL(list);
list.print();
console.log(list);
