let arr1 = [2,4,6,7,8,9];
let arr2 = [1,3,5];


function merg(arr1,arr2){
    let L1 = arr1.length;
    let L2 = arr2.length;
    let i = 0;
    let j = 0;
    let merged = []
    while(i<L1 && j<L2){
        if(arr1[i]<=arr2[j]){
            merged.push(arr1[i]);
            i++
        }
        merged.push(arr2[j])
        j++;
    }
    while(i<L1){
        merged.push(arr1[i]);
        i++
    }
    while(j<L2){
        merged.push(arr1[j]);
        j++
    }
 return merged
}

console.log(merg(arr1,arr2));