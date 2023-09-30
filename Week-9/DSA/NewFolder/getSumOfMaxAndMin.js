let arr = [5, 2, 9, 1, 7];

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;
let maxMap = new Map(); 
let minMap = new Map(); 

for(let i=0;i<arr.length-1;i++){
    max = Math.max(arr[i],arr[i+1])
    min = Math.min(arr[i],arr[i+1])
    maxMap.set(max);
    minMap.set(min);
}

console.log(Math.max(...arr));
console.log(Math.min(...arr));
// console.log(minMap);