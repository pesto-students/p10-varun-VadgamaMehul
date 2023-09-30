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

let input = [1, 2, 3, null, null, 4, null, null, 2, 4, null, null, 3];

let tree = buildTree(input);
console.log(tree);

function isTreeSymetric(nodeLeft, nodeRight) {
  if (nodeLeft === null && nodeRight === null) {
    return true;
  }
  if (nodeLeft === null || nodeRight === null) {
    return false;
  }

  return (
    nodeLeft.val === nodeRight.val &&
    isTreeSymetric(nodeLeft.left, nodeRight.right) &&
    isTreeSymetric(nodeLeft.right, nodeRight.left)
  );
}

function IsSymetric(node) {
  return isTreeSymetric(node, node);
}

console.log(IsSymetric(tree));
