function dirPath(str) {
  let arr = str.split("/");
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "") continue;
    if (arr[i] == ".") continue;
    if (arr[i] == "..") {
      if (stack.length !== 0) {
        stack.pop();
      } else continue;
    } else {
      stack.push(arr[i]);
    }
  }

  let ans = "";
  for (let i = 0; i < stack.length; i++) {
    ans = ans + "/" + stack[i];
  }
  return ans;
}

// let str = "/home/.././user//foo/../../bar";
let str = "/a/b/c";

console.log(dirPath(str));
