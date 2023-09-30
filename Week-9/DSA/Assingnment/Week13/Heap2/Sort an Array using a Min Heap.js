function minHeapify(arr, n, i) {
  let smallest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[smallest] > arr[left]) {
    smallest = left;
  }
  if (right < n && arr[smallest] > arr[right]) {
    smallest = right;
  }

  if (smallest != i) {
    [arr[smallest], arr[i]] = [arr[i], arr[smallest]];
    minHeapify(arr, n, smallest);
  }
}

function heapSort(arr, size) {
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    minHeapify(arr, arr.length, i);
  }

  while (size) {
    let firstel = arr.shift();
    arr.push(firstel);
    size--;
    minHeapify(arr, size, 0);
  }
}

let heap = [20, 10, 25, 5, 15];

console.log(heap);
heapSort(heap, heap.length);
console.log(heap);
