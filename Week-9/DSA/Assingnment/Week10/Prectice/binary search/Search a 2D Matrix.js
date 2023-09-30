// const { flatMap } = require("lodash");

// function Search2D(array,row,col,target){
//     let k = target;
//     for(let i = 0;i<col;i++){
//         for(let j = 0;j<row;j++){
//             if(array[i][j] === target){
//                 return true
//             }
//         }
//     }
//     return false;
// }

let a = [
  [1, 3, 5],
  [7, 10, 11],
  [13, 20, 23],
  [30, 34, 60],
];
console.log(searchMatrix(a, 13));

function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return false;
  }

  const m = matrix.length;
  const n = matrix[0].length;

  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}
