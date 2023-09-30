//max_sum using hasing
//isSumOfSubArrayZero()
//isSumOfSubArrayK()

function isSumOfSubArrayZero(arr) {
  const n = arr.length;
  let sum = 0;
  const prefixSumset = new Set();
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (prefixSumset.has(sum) || sum === 0) {
      return true;
    }
    prefixSumset.add(sum);
  }
  return false;
}

console.log(isSumOfSubArrayZero([2,4,6,-4,5]));