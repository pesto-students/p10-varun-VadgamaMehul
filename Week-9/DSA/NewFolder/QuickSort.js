let arr = [4, 3, 5, 1, 2, 6, 7, 8, 0];

quickSort(arr,0,arr.length-1);
console.log(arr);

function pivot(arr, start, end) {
  let pivot = arr[start];
  let pivotIndex = start;
  for (let i = start+1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex++;
      [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
    }
  }
  [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
  return pivotIndex;
}


function quickSort(arr, start, end) {
  if (start > end) {
    return;
  }

  let pivotindex = pivot(arr,start,end);
  quickSort(arr,start,pivotindex-1);
  quickSort(arr,pivotindex+1,end);
}
