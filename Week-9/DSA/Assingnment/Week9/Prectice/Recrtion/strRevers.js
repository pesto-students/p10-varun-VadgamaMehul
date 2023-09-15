//  function strRevers(start,end,str){

//     if(str == ''){
//         return '';
//     }

//     let temp = str[start];
//     str[start]=str[end]
//     str[end]=temp;
//     start++;
//     end--;

//     // strRevers(start,end,str)

//     // console.log(str);
//     return strRevers(start,end,str);

//  }

function reverseString(str) {
  if (str === "") {
    return "";
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}
let str = "mehul";
let st = 0;
let en = str.length - 1;
//  console.log(str[0]);.
// let a = strRevers(st, en, str);
// console.log(strRevers(st, en, str));
// strRevers(st,en,str)
console.log(reverseString(str));
