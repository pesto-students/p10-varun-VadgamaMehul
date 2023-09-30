
function drawTriangle(triangleSize) {
   let string = "";
  // Your solution goes here

  for (let i = 0; i < triangleSize; i++) {
    for (let j=i;j>0;j--) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
drawTriangle(5);
