function squrRoot(number) {
  let start = 0;
  let end = number;
  let mid = Math.floor((start + end) / 2);

while (start <= end) {
    if (mid * mid == number) {
      return mid;
    } else if (mid * mid > number) {
      end = mid - 1;
    } else if (mid * mid < number) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return mid;
}

function preciseRoot(number, decimal, tempAns) {
  let factor = 1;
  let ans = tempAns;
  for (let i = 0; i < decimal; i++) {
    factor /= 10;
    for (let j = ans; j * j < number; j += factor) {
      ans = j;
    }
  }
  return ans;
}

// console.log(squrRoot(34));

console.log(preciseRoot(34, 6, 5));
