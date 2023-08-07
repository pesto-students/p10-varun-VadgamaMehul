function binarySearch(arr, start, end, target) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      return binarySearch(arr, start, mid - 1, target);
    } else {
      return binarySearch(arr, mid + 1, end, target);
    }
  }
  return -1;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8];
target = 6;

console.log(binarySearch(a, 0, a.length - 1, 6));
