const rows = 4;
const cols = 3;

const array = [];

// Step 3 - Use nested loops to iterate through each element of the array and store the user-entered values
for (let i = 0; i < rows; i++) {
  const row = [];
  for (let j = 0; j < cols; j++) {
    const element = i;
    row.push(element);
  }
  array.push(row);
}

console.log(array);

