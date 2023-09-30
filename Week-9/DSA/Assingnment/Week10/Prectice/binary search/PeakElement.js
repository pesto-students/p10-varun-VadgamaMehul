let a = [1, 2, 1, 3, 5, 6, 4];
// let a1 = [1,7,8,6,5,4,3,2,1];

function peakPoint(array){
    let start = 0;
    let end = array.length-1;
    let mid = Math.floor((start+end)/2);

    while(start<end){
        if(array[mid]<array[mid+1]){
            start = mid + 1;
        }
        else{
            end = mid;
        }
        mid = Math.floor((start+end)/2);
    }
    return start;
}

console.log(peakPoint(a));

