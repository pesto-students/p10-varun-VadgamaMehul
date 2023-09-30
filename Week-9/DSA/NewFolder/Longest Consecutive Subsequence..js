function LongestConsecutiveSubsequence(arr){
    let set = new Set(arr);
    console.log(set);
    let maxLen = 0;
    for(let i=0;i<arr.length;i++){
        const num = arr[i];
        if(!set.has(num-1)){
            length=1;
           let currntNum = num+1
            while(set.has(currntNum)){
                length++
                currntNum++;
            }
            maxLen = Math.max(maxLen, length);
        }
    }
    return maxLen
}
let a = [100,1,200,2,3,4,8,9]
let ans = LongestConsecutiveSubsequence(a);
console.log(ans);