class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const buildTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  const rootVal = arr.shift();
  if (rootVal === null) {
    return null;
  }

  const root = new TreeNode(rootVal);
  root.left = buildTree(arr);
  root.right = buildTree(arr);

  return root;
};

let input = [5,4,11,7,null,null,2,null,null,null,8,13,null,null,4,null,1]
let tree = buildTree(input);


function solve(root, len, maxLen, sum, maxSum) {
  if (root === null) {
    if (len > maxLen) {
      maxLen = len;
      maxSum = sum;
    }
    else if (len === maxLen) {
      maxSum = Math.max(sum, maxSum);
    }
    return;
  }

  sum = sum + root.val;
  solve(root.left, len + 1, maxLen, sum, maxSum);
  solve(root.right, len + 1, maxLen, sum, maxSum);
//   return maxSum;
}

let maxSum = Number.MIN_SAFE_INTEGER;
function sumOfLongRootToLeafPath(root) {
  let len = 0;
  let maxLen = 0;
  let sum = 0;

  maxSum = solve(root, len, maxLen, sum, maxSum);
  return maxSum;
  
}

console.log(sumOfLongRootToLeafPath(tree));
