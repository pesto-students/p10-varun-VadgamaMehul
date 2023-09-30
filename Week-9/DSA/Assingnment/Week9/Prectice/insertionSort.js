function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let key = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    return arr;
}

let a = [9,8,7,6,5,4,3,2,1];
// let a = [175,200,250,300,275,325,150,350,225];
console.log(insertionSort(a));