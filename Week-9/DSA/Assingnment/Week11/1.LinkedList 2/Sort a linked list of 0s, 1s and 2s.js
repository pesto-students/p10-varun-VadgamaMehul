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
list.appendNode(1);
list.appendNode(0);
list.appendNode(2);
list.appendNode(1);
list.appendNode(2);
list.appendNode(0);
// list.print()

function CountingSort(List){
    let res = [];
    let count = [0,0,0];
    let k = 2;
    let currentNode = List.head;
    while(currentNode){
        count[currentNode.value]++
        currentNode = currentNode.next;
    }

    for(let i = 1;i<=k;i++){
        count[i] += count[i-1]
    }

    for(let i = 1;i<=List.size;i++){
       res[--count[List.value(i)]] = List.value(i);
    } 

    for(let i = 0 ; i<List.size;i++){
        List.deleteNode(i+1);
        List.insertNode(res[i],i+1);
    }



}

list.print();
CountingSort(list);
list.print();
console.log(list);