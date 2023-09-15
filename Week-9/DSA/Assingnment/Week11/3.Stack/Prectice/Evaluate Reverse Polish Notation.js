function evalRPN(tokens) {
  let stack = [];
  let oprator = new Set(["+", "-", "*", "/"]);

  for (let i = 0; i < tokens.length; i++) {
    if (oprator.has(tokens[i])) {
      let left = stack.pop();
      let right = stack.pop();
      if (tokens[i] == "+") {
        let ans = parseInt(left) + parseInt(right);
        stack.push(ans);
      }
      if (tokens[i] == "-") {
        let ans = parseInt(left) - parseInt(right);
        stack.push(ans);
      }
      if (tokens[i] == "*") {
        let ans = parseInt(left) * parseInt(right);
        stack.push(ans);
      }
      if (tokens[i] == "/") {
        let ans = parseInt(right) / parseInt(left);
        stack.push(ans);
      }
    } else {
      stack.push(tokens[i]);
    }
  }
  return stack[stack.length - 1];
}

// let a = ["1", "2", "+", "3", "4", "5", "*", "+", "*"];
let a = ["4","13","5","/","+"];
console.log(evalRPN(a));
