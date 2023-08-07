//pre condiition arr is sorted

function numberOfOccurence(arr, target) {
  let start = 0,
    end = arr.length - 1;
  let firstOcc = firstOccurence(arr, start, end, target);
  let lastOcc = lastOccurence(arr, firstOcc, end, target);
  //   let firstOcc = first_Occur(arr, start, end, target);
  //   let lastOcc = last_Occur(arr, firstOcc, end, target);
//   console.log(firstOcc);
//   console.log(lastOcc);

  if (firstOcc === -1 && lastOcc === -1) {
    return 0;
  }

  return lastOcc - firstOcc + 1;
}

function firstOccurence(arr, start, end, target) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    //first
    if ((mid === 0 || arr[mid - 1] !== target) && arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      return firstOccurence(arr, mid + 1, end, target);
    } else {
      return firstOccurence(arr, start, mid - 1, target);
    }
  }
  return -1;
}

function lastOccurence(arr, start, end, target) {
  if (start <= end) {
    let mid = Math.floor((start + end) / 2);
    //first
    if (
      (mid === arr.length - 1 || arr[mid + 1] !== target) &&
      arr[mid] === target
    ) {
      return mid;
    } else if (arr[mid] > target) {
      return lastOccurence(arr, start, mid - 1, target);
    } else {
      return lastOccurence(arr, mid + 1, end, target);
    }
  }
  return -1;
}

function first_Occur(arr, start, end, target) {
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if ((mid === 0 || arr[mid - 1] !== target) && arr[mid] === target) {
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

function last_Occur(arr, start, end, target) {
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
    if (
      (mid === arr.length - 1 || arr[mid + 1] !== target) &&
      arr[mid] === target
    ) {
      return mid;
    }
    //right part
    if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

let a = [11, 11, 11, 21, 33, 33, 33, 33, 33, 33, 44, 44, 45];
// numberOfOccurence(a, 33);
console.log(numberOfOccurence(a,33));
