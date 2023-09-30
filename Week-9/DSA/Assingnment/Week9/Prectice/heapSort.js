function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]];
}

function maxHeap(arr,i,n){
    let left =2*i+1;
    let right = 2*i+2;
    let max = 0;

    if(arr[max]<arr[left]){
        swap(arr,left,max);
    }
    if(arr[max]<arr[right]){
        swap(arr,right,max);
    }
    return arr;
}

let arr = [1,2,3,4,5,6];

maxHeap(arr,0,2);
console.log(arr);