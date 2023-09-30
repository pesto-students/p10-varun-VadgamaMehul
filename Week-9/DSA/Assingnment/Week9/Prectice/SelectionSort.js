function selectionSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minindex = i;
    for (let j = i + 1; j < len; j++) {
      if(arr[j]<arr[minindex]){
        minindex = j;
      }
    }
    if(minindex!==i){
        [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
    }
  }
  return arr
}

let a = [9,8,7,6,5,4,3,2,1]
// let a = [5,3,6,7,2,3,4,1,0,2,34,2,-1];
console.log(selectionSort(a));