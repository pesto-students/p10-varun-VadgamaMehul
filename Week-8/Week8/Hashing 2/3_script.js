let arr = [1,0,-1,0,-2,2]
let target = 0;
const map = new Map();
let result =[];

for(let i=0;i<arr.length;i++){
    for(let j=1;j<arr.length;i++){
        let sum = a[i]-a[j];
        let compliment = target-sum
        if(map.has(compliment)){
            map.set([i,j],compliment);
        }
    }
}
