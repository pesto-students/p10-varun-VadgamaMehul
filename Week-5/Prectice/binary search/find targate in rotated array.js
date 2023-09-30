let a = [4, 5, 6, 7, 8, 9, 0, 1, 2, 3];

function targetIndex(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let ans = -1;
  while (start <= end) {
    let midarr = arr[mid];
    let pivot = arr[0];
    if (target === arr[mid]) {
      return mid;
    } else if (target == pivot) {
      return 0;
    } else if (target > pivot && target < arr[mid]) {
      end = mid - 1;
    } else if (target > arr[mid] && target < end) {
      start = mid + 1;
    } else if (arr[mid] > pivot) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return ans;
}
for (let i = 0; i < 10; i++) {
  console.log(targetIndex(a, i));
}
