// function peakElement(arr, n) {
//   // code here
//   let heap = arr;
//   function maxHeapify(arr, size, index) {
//     if (arr == null) {
//       return 0;
//     }
//     let largest = index;
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;

//     if (left < arr.length && arr[largest] < arr[left]) {
//       largest = left;
//     }
//     if (right < arr.length && arr[largest] < arr[right]) {
//       largest = right;
//     }

//     if (largest != index) {
//       [arr[largest], arr[index]] = [arr[index], arr[largest]];
//       maxHeapify(arr, size, largest);
//     }
//   }

//   for (let i = Math.max(heap.length / 2 - 1); i >= 0; i--) {
//     maxHeapify(heap, heap.length, i);
//   }

//   let peak = heap.shift();
//   let index = arr.indexOf(peak);
//   if (index) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

let arr = [1, 2, 3, 4, 2, 5, 3];
// let heap = arr;

// function maxHeapify(arr, size, index) {
//   if (arr == null) {
//     return 0;
//   }
//   let largest = index;
//   let left = 2 * index + 1;
//   let right = 2 * index + 2;

//   if (left < arr.length && arr[largest] < arr[left]) {
//     largest = left;
//   }
//   if (right < arr.length && arr[largest] < arr[right]) {
//     largest = right;
//   }

//   if (largest != index) {
//     [arr[largest], arr[index]] = [arr[index], arr[largest]];
//     maxHeapify(arr, size, largest);
//   }
// }

// for (let i = Math.max(heap.length / 2 - 1); i >= 0; i--) {
//   maxHeapify(heap, heap.length, i);
// }

// function peakElement(arr, n) {
//   let peak = Math.max(...arr);
//   let index = arr.indexOf(peak);
//   if (index) {
//     return 1;
//   } else return 0;
// }

console.log(peakElement(arr, 4));
function peakElement(arr, n) {
  let index;
  for (let i = 0; i < n; i++) {
    if (i == 0) {
      if (arr[i] >= arr[i + 1]) {
        index = i;
      }
    } else if (i == n - 1) {
      if (arr[i] >= arr[i - 1]) {
        index = i;
      }
    } else {
      if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) {
        index = i;
      }
    }
  }

  return index;
}
