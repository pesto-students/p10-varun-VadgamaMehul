function maxHeapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }
  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (largest != i) {
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    maxHeapify(arr, n, largest);
  }
}

let heap = [20, 10, 25, 5, 15];
for (let i = Math.floor(heap.length / 2) - 1; i >= 0; i--) {
  maxHeapify(heap, heap.length, i);
}
console.log(heap);
