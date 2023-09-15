let arr = [1, 1, 1, 1, 1];
let sum = 2;

//First Approc O(n^2)
function findPair(arr, targetSum) {
  const pairArry = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairArry.push([arr[i], arr[j]]);
      }
    }
  }
  return pairArry;
}

// console.log(findPair(arr, sum));

//Second Approc O(n)

console.log(pairSum([2, 4, 6, 8, 10], 12)); //[ [ 2, 10 ], [ 4, 8 ] ]
// console.log(pairSum([1, 1, 1, 1, 1], 2)); //[ [ 1, 1 ], [ 1, 1 ] ]

function pairSum(arr, value) {
  let myArr = arr;
  let ans = [];

  for (let i = 0; i < myArr.length / 2; i++) {
    let diff = value - myArr[i];
    if (myArr.includes(diff) && myArr.indexOf(diff) != i) {
      ans.push([myArr[i], diff]);
    }
  }

  return ans;
}

//Third Approce using has which is more affective O(n)