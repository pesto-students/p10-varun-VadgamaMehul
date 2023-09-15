function powerSet(input) {
  // Convert the input string into an array of integers
  const nums = input.split(" ").map(Number);

  // Initialize the powerSet array
  const powerSet = [];
  const subset = [];
  const index = 0;
  generateSubsets(index, subset, powerSet);
  return powerSet;

  // Function to generate subsets using recursion
  function generateSubsets(index, Subset, powerSet) {
    // Base case: If the index is equal to the length of the array, add the Subset to the powerSet
    if (index === nums.length) {
        // console.log(Subset);
      powerSet.push(Subset);
      return;
    }

    // Recursive call without including the current element
    generateSubsets(index + 1, Subset, powerSet);

    // Recursive call including the current element
    Subset.push(nums[index]);
    generateSubsets(index + 1, Subset, powerSet);

    // Backtrack to remove the current element and explore other possibilities
    // Subset.pop();
  }

  // Start generating subsets from index 0 and an empty Subset
//   generateSubsets(0, [], powerSet);

  
}

// Test cases
const test1Input = "1 2 3";
//   const test2Input = "4 7 1 9";
// powerSet(test1Input)
console.log(powerSet(test1Input));
//   console.log(powerSet(test2Input));
