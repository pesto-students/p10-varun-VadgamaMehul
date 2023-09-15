class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList{
  size = 0;
  constructor(){
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

  print(){
    let str = "";
    let currentNode = this.head;
    while(currentNode){
        str = str + currentNode.data +'->';
        currentNode = currentNode.next;
    }
    console.log(str);
  }
}

let LL = new LinkedList();
LL.insert(25);
LL.insert(24);
LL.insert(23);
LL.insert(22);
LL.insert(21);
LL.print();
function isPalidrom(LL){
    let oldLL = LL;
    reversLL(LL);
    let NewLL = LL;
    let currnt = oldLL.head;
    let newcurrent = NewLL.head;
    while(currnt){
        if(currnt.data != newcurrent.data){
            return false;
        }
        currnt = currnt.next;
        newcurrent = newcurrent.next;
    }
    return true;    
}

function reversLL(LL){
    let left = 1;
    let right = LL.size;
    while(left<right){
        swap(LL,left,right);
        left++;
        right--;
    }
}

function swap(LL,i,j){
    let currentNode = LL.head;
    let fistNode = null;
    let secondNode = null;
    let counter = 1;
    while(currentNode){
        if(counter == i){
            fistNode = currentNode;
        }
        if(counter == j){
            secondNode = currentNode;
        }
        currentNode = currentNode.next;
        counter++;
    }
    if(fistNode && secondNode){
        let temp = fistNode.data;
        fistNode.data = secondNode.data;
        secondNode.data = temp;
    }
}


// swap(LL,2,4);
// reversLL(LL);
// let newLL = LL;
// console.log(newLL);
// LL.print();
console.log(isPalidrom(LL));