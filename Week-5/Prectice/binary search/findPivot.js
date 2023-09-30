function minPivot(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
  let pivot = arr[0];
  while (start < end) {
    let midarr  = arr[mid];
    if (arr[mid] >= pivot) {
      start = mid + 1;
    } else {
      end = mid;
    }
    mid = Math.floor((start + end) / 2);
  }
  return start;
}


let arr = [3,4,5,6,7,8,9,0,1,2]
console.log(minPivot(arr));