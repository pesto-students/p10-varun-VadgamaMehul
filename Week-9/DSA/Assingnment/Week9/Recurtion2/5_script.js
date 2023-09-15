let s = "hello";
let result = [];
const substr = "";

function Subsequence(str, index, substr) {
  if (index === str.length) {
    result.push(substr);
    return;
  }

  Subsequence(str, index + 1, substr);
  Subsequence(str, index + 1, substr + str.charAt(index));
  return result;
}

console.log(Subsequence(s, 0, substr));
