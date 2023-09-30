function LongestPalindromicSubstring(str) {
  let maxLen = 0;
  let start = 0;

  function expandFromCenter(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  for (let i = 0; i < str.length; i++) {
    let lenOdd = expandFromCenter(i, i);
    let leneven = expandFromCenter(i, i + 1);

    let len = Math.max(lenOdd, leneven);

    if (len > maxLen) {
      maxLen = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return str.slice(start,maxLen);
}

let s = "babad";
console.log(LongestPalindromicSubstring(s));
