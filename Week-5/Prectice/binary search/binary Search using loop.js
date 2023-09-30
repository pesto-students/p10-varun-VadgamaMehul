function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[mid] === target) {
      return mid;
    }
    //right part
    if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(a, 6));
