function kthLargeElemet(arr, k) {
  for (let i = Math.floor(k / 2 - 1); i >= 0; i--) {
    maxHeapify(arr, k, i);
  }

  let heap = arr.slice(0,k);
  for(let i=k;i<arr.length;i++){
    if(arr[i]>heap[0]){
        heap[0] = arr[i];
        maxHeapify(arr,k,0);
    }
  }

  return heap[0];
}

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

let arr = [5, 2, 9, 1, 7];
let k = 2;
console.log(kthLargeElemet(arr, 2));
