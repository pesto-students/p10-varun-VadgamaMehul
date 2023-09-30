/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    return arr.map(fn);    
};

let  arre = [1,2,3]
function plusI(n, i) { return n + i; }

const newArray = map(arre, plusI);
console.log(newArray);