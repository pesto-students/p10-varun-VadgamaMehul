function nonDubplicateNum(arr) {
  let map = new Map(arr);
}

let arr = [5, 2, 3, 2, 5, 4, 6, 7];
let map = new Map();
let len = arr.length;

for (let i = 0; i < len; i++) {
  if (map.has(arr[i])) {
    let fre = map.get(arr[i]);
    map.set(arr[i], fre + 1);
  } else {
    map.set(arr[i], 1);
  }
}

for (let val of map) {
  if (val[1] == 1) {
    console.log(val[0]);
  }
}

// console.log(map);
