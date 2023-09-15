// let dimention = 4;
// let a = [];
// let topRow = 0,
//   bottomRow = dimention - 1,
//   leftCol = 0,
//   rightCol = dimention - 1;

// for (let i = topRow; i <= rightCol; i++) {
//   a.push(i);
// }
// function spiralArray(dimention) {
//   while (1) {
//     //1.L-R
//     //2.T-B
//     //3.R-L
//     //4.B-T
//   }
// }

// console.log(a);

function spiralArray(dimensions) {
  // Create an empty 2D array
  const spiral = [];
  for (let i = 0; i < dimensions; i++) {
    spiral.push([]);
    for (let j = 0; j < dimensions; j++) {
      spiral[i].push(0);
    }
  }

  let value = 1; // Initial value for the spiral
  let minRow = 0; // Minimum row index
  let maxRow = dimensions - 1; // Maximum row index
  let minCol = 0; // Minimum column index
  let maxCol = dimensions - 1; // Maximum column index

  while (value <= dimensions * dimensions) {
    // Fill top row
    for (let col = minCol; col <= maxCol; col++) {
      spiral[minRow][col] = value++;
    }
    minRow++;

    // Fill right column
    for (let row = minRow; row <= maxRow; row++) {
      spiral[row][maxCol] = value++;
    }
    maxCol--;

    // Fill bottom row
    for (let col = maxCol; col >= minCol; col--) {
      spiral[maxRow][col] = value++;
    }
    maxRow--;

    // Fill left column
    for (let row = maxRow; row >= minRow; row--) {
      spiral[row][minCol] = value++;
    }
    minCol++;
  }

  return spiral;
}

// Example usage
// const dimensions = 4;
// const result = spiralArray(dimensions);
// console.log(result);

const spiral = [];
for (let i = 0; i < 4; i++) {
  spiral.push([]);
  for (let j = 0; j < 4; j++) {
    spiral[i].push(0);
  }
}

console.log(spiral);