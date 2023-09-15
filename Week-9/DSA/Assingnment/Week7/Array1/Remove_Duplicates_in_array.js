function removeDuplicates(arr) {
  const map = new Map();
  const result = [];

  for (const num of arr) {
    if (!map.has(num)) {
      result.push(num);
      map.set(num,true);
    }
  }

  return result;
}

// Example usage:
const unsortedArray = [3, 1, 2, 2, 4, 1, 5];
const uniqueArray = removeDuplicates(unsortedArray);
console.log(uniqueArray); // Output: [3, 1, 2, 4, 5]
