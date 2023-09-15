let str = '1 2 4 6 5'
function checkDuplicate(str){
    let arrNum = str.split(" ").map(Number);
    let len = arrNum.length;
    const map = new Map();
    for(let i=0;i<len;i++){
        if(map.has(arrNum[i])){
            return 'There are duplicate elements in the array.';
        }
        else{
            map.set(arrNum[i],i);
        }
    }
    return 'There are no duplicate elements in the array';
}

console.log(checkDuplicate(str));