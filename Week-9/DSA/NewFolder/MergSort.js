function mergSort(arr, start, end) {
  if (start >= end) {
    return;
  }

  let mid = Math.floor((end - start) / 2);
  mergSort(arr, start, mid);
  mergSort(arr, mid + 1, end);
  merg(arr,start,end);
}

function merg(arr, strat, end) {
  let mid = Math.floor((end - strat) / 2);
  let arr1 = [];
  let arr2 = [];
  for (let i = strat; i <= mid; i++) {
    arr1.push(arr[i]);
  }
  for (let i = mid + 1; i <= end; i++) {
    arr2.push(arr[i]);
  }
  let L1 = arr1.length;
  let L2 = arr2.length;
  let i = 0;
  let j = 0;
  let merged = [];
  while (i < L1 && j < L2) {
    if (arr1[i] <= arr2[j]) {
      merged.push(arr1[i]);
      i++;
    }
    merged.push(arr2[j]);
    j++;
  }
  while (i < L1) {
    merged.push(arr1[i]);
    i++;
  }
  while (j < L2) {
    merged.push(arr1[j]);
    j++;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = merged[i];
  }
  return arr;
}

let arr = [3, 4, 5, 1, 2];

// mergSort(arr, 0, arr.length - 1);
console.log(merg(arr, 0, arr.length - 1));
