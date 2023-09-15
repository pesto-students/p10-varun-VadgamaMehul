

function pivot(arr,start,end){
    let pivo = arr[start];
    let pivotIndex = start;
    for(let i = start+1;i<=end;i++){
        if(pivo>arr[i]){
            pivotIndex++
            swap(arr,i,pivotIndex)
        }
    }
    // console.log(pivotIndex);
    swap(arr,start,pivotIndex)
    
   return pivotIndex;

    // return arr;
}

function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}

function quickSort(arr,start,end){
    if(start>=end){
        return;
    }

    let pivotIndex = pivot(arr,start,end);

    quickSort(arr,start,pivotIndex-1);
    quickSort(arr,pivotIndex+1,end);
}

let ar = [3,4,5,0,1,2];
// pivot(ar,0,ar.length-1)
quickSort(ar,0,ar.length-1);
console.log(ar);

