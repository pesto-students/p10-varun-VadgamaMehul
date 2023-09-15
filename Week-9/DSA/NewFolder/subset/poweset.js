function product(arr, index, sub, ans) {
  if (index == arr.length) {
    ans.push(sub.slice());
    return;
  }

  product(arr, index + 1, sub, ans);

  sub.push(arr[index]);
  product(arr, index + 1, sub, ans);
  sub.pop();
}

let arr = [1, 2, 3];
let sub = [];
let ans = [];
let index = 0;
product(arr, index, sub, ans);
// console.log();


