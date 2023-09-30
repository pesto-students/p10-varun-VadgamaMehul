let a = "mehul";
function revers(str) {
  let i = 0;
  let j = a.length;

  while (i <= j) {
    // let temp = a[i]
    // a[i] = a[j]
    // a[j] = temp;
    // i++;
    // j--;
    // console.log(a[i]);
    swap(str,i,j);
    i++;
    j--;
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

revers(a)
console.log(a);
