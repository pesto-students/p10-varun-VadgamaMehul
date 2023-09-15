function isMinHeap(array) {
  let len = array.length;
  let parent = 0;
  // let parent = Math.floor((len-1)/2)
  while (parent * 2 + 1 < len && parent * 2 + 2 < len) {
    if (array[parent * 2 + 1] == null) {
      return false;
    }
    if (array[parent * 2 + 2] == null) {
      return false;
    }
    if (array[parent] > array[parent * 2 + 1]) return false;
    if (array[parent] > array[parent * 2 + 1]) return false;
    parent++;
  }
  return true;
}

let heap = [5, 10, 15, 20, 25];
// let heap = [20,10,25,5,15];

console.log(isMinHeap(heap));
