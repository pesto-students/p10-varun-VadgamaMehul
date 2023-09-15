function sumCount(arr){
    let subArray = [];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            subArray.push(subarray(arr,i,j));
        }
    }
    return subArray;
}

function subarray(arr,i,j){
    let ans = []
    for(let k=i;k<=j;k++){
        ans.push(arr[k])
    }
    return ans
}
console.log(sumCount([1,2,3]));
