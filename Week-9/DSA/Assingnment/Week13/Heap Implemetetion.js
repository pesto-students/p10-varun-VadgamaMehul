class Maxheap {
  constructor(data) {
    this.heap = [];
  }

  percoluteUp() {
   let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let element = this.heap[index];
      let parent = this.heap[parentIndex];
      if (parent > element) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  insert(val) {
    this.heap.push(val);
    this.percoluteUp();
  }

  delet(num){
    if(this.heap.length == 0){
        console.log("Heap is empty");
    }
    if(this.heap[this.heap.indexOf(num)] !== num){
        console.log("invalid number");
    }
    let deletIndex = this.heap.indexOf(num);
    let lastIndex = this.heap.length-1 
    let lastEl = this.heap[lastIndex];
    [this.heap[lastIndex],this.heap[deletIndex]] = [this.heap[deletIndex],this.heap[lastIndex]];
    this.heap.pop();
    if(this.heap[deletIndex]<this.heap[2*deletIndex+1] || this.heap[deletIndex]<this.heap[2*deletIndex+2]){
        let maxchil = Math.max(this.heap[2*deletIndex+1],this.heap[2*deletIndex+2])
        if(maxchil == this.heap[2*deletIndex+1]){
            [this.heap[deletIndex],this.heap[2*deletIndex+1]] = [this.heap[2*deletIndex+1],this.heap[deletIndex]];
        }
        else{
            [this.heap[deletIndex],this.heap[2*deletIndex+2]] = [this.heap[2*deletIndex+2],this.heap[deletIndex]];
        }
    }
  }
}


let hp = new Maxheap();

hp.insert(3);
hp.insert(5);
hp.insert(7);
hp.insert(8);
hp.insert(9);
hp.insert(4);
hp.insert(10);
hp.delet(8);
console.log(hp);
