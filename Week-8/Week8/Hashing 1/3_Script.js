// Longest Palindromic Substring

let start = 3,
  maxlength = 7;

let str = 'bsfbccbasf'

console.log(str.substring(start,maxlength));

function expandFromCenter(left,right){
    while(left==right){
        left--;
        right++
    }
}