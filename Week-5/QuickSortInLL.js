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


let list = new LinkedList(3);
list.appendNode(4);
list.appendNode(5);
list.appendNode(0);
list.appendNode(1);
list.appendNode(2);
// list.print()

function partition(list,start,end){
    let pivot = list.value(start);
    let pivotIndex = start;

    for(let i = start+1;i<=end;i++){
        if(pivot>list.value(i)){
            pivotIndex++
        }
    }
    console.log(pivotIndex);
}

function swap(list,i,j){
    // [list.value(i),list.value(j)] = [list.value(j),list.value(i)];
    // let temp = list.value(i);
    // list.value(i) = list.value(j);
    // list.value(j) = temp;
    console.log(list.value(i));
    console.log(list.value(j));
}

function quickSortLL(list,start,end){

}

// partition(list,1,list.size)
list.print();
console.log("**********************************");
swap(list,1,3);
// list.print();