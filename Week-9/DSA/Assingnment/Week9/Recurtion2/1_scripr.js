let result = []
function indices(arr,target,index){
    let len = arr.length;
    if(index === arr.length){
        return;
    }
    if(arr[index]==target){
        result.push(index);
    }
    indices(arr,target,index+1)
    return result;
}
let a = [1, 2, 3, 2, 4, 2, 5];
console.log(indices(a,2,0));