

function countingSort(arr){
    // ini result array to store result
    const result = [];

    //find max element of arr
    let k = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(k<arr[i])
        k = arr[i];
    }
    
    // ini count arr to store count of element of array ex. 1,1,1,1 count = 4
    const count = [];
    for(let i=0;i<=k;i++){
        count.push(0);
    }

    for(let i=0;i<arr.length;i++){
        count[arr[i]]++;
    }

    for(let i=1;i<=k;i++){
        count[i] += count[i-1];
    }

    for(let i =arr.length-1;i>=0;i--){
        let a = --count[arr[i]];
        // let b = --a;
       result[a] = arr[i]
    }

    for(let i=0;i<arr.length;i++){
        arr[i] = result[i]
    }
}

// let a1 = [1,2,4]
// let a2 = [0,1,2]

// a1[0] = a2[0]
// console.log(a1);

let a = [1,2,3,4,5,1,2,3,4,5,2,3,1,4,5];
countingSort(a);
console.log(a);
// console.log(countingSort(a));