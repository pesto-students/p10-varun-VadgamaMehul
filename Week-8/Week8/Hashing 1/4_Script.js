let arr = [1,1,0,1,1,1,1,0,1,0,1,0];
const diffmap = new Map();
let maxLen = 0;
let diff = 0;
diffmap.set(0,-1)
for (let i = 0; i < arr.length; i++) {
  arr[i] === 0 ? diff-- : diff++;
  if(diffmap.has(diff)){
    maxLen = Math.max(maxLen,i-diffmap.get(diff))
  }
  else{
    diffmap.set(diff,i);
  }
}
console.log(maxLen);
