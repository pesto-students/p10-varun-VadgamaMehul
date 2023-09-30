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

// let list3 = new Linkedlist();

// function mergedSort(list1, list2,) {
//   let list1Len = list1.size;
//   let list2Len = list2.size;
//   let i = 1;
//   let j = 1;
//   while (i <= list1Len && j <= list2Len) {
//     if (list1.value(i) < list2.value(j)) {
//       list3.appendNode(list1.value(i));
//       i++;
//     } else {
//       list3.appendNode(list2.value(j));
//       j++
//     }
//   }
//   while (i <= list1Len) {
//     list3.appendNode(list1.value(i));
//     i++
//   }
//   while (i <= list2Len) {
//     list3.appendNode(list2.value(i));
//     j++
//   }
//   // return list3;
// }

let list1 = new Linkedlist();
list1.appendNode(1);
list1.appendNode(3);
list1.appendNode(5);
list1.print();
list1.deleteNode(1);
list1.print();
console.log(list1);

// let list2 = new Linkedlist();
// list2.appendNode(2);
// list2.appendNode(4);
// list2.appendNode(6);
// list2.print();

// // console.log(list);
// mergedSort(list1, list2);
// list3.print();
// console.log(list3);
