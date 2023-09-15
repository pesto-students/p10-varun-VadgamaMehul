let a = [5,3,6,7,2,3,4,1,0,2,34,2,-1];

function smallestElemetInArray(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>=arr[j]){
                [arr[i],arr[j]]=[arr[j],arr[i]];
            }
        }
    }
    return arr[0];
}

console.log(smallestElemetInArray(a));