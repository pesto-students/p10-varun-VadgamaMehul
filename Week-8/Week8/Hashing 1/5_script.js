let arr = ["a", "b", "c", "d", "e", "i", "o", "u", "i", "o", "p"];
arr = ['a','e','i','o','u','A','E','I','O','U']
let vowl = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let maxLen = 0,
  consonantCount = 0,
  vowelCount = 0;

const charCheck = new Map();
charCheck.set(0, -1);

for (let i = 0; i < arr.length; i++) {
  if (vowl.includes(arr[i])) {
    vowelCount++;
  } else {
    consonantCount++;
  }
  let diff = vowelCount - consonantCount;
  if (charCheck.has(diff)) {
    maxLen = Math.max(maxLen, i - charCheck.get(diff));
  }
  {
    charCheck.set(diff, i);
  }
}

console.log(maxLen);
