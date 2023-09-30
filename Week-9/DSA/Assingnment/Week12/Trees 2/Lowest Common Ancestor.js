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

let input = [
  5,
  4,
  11,
  7,
  null,
  null,
  2,
  null,
  null,
  null,
  8,
  13,
  null,
  null,
  4,
  null,
  1,
];
let tree = buildTree(input);

function LowestCommanAnsester(root, n1, n2) {
  if (!root) {
    return null;
  }
  if (root.val == n1 || root.val == n2) {
    return root;
  }

  let left = LowestCommanAnsester(root.left, n1, n2);
  let right = LowestCommanAnsester(root.right, n1, n2);

  if (left !== null && right !== null) {
    return root.val;
  } else if (left !== null && right == null) {
    return left;
  } else if (left === null && right !== null) {
    return right;
  } else return null;
}

console.log(LowestCommanAnsester(tree,13, 4));
