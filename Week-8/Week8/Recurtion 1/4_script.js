let str = 'abcd';
// console.log(str.slice(1));
function reversStr(str){
    if(str.length===0 || str.length === 1){
        return str;
    }
    else{
        sum = str[0] + reversStr(str.slice(1));
        return sum;
    }
}

console.log(reversStr(str));