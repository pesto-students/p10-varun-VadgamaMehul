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

let input1 = [1, 2, 4, null, null, 5, null, null, 3, 6];
// let input2 = [2, 4, null, null, 5];
let input2 = [3,6];

let tree = buildTree(input1);
let subtree = buildTree(input2);

function istreeIdentical(root1, root2) {
  if (!root1 && !root2) {
    return true;
  }
  if (!root1 || !root2) {
    return false;
  }
  return (
    root1.val === root2.val &&
    istreeIdentical(root1.left,root2.left) &&
    istreeIdentical(root1.right,root2.right)
  );
}

// console.log(istreeIdentical(tree,subtree));

function IsTreeSubtree(tree, subtree) {
  if (subtree == null) {
    return true;
  }
  if (tree == null) {
    return false;
  }

  if (istreeIdentical(tree, subtree)) {
    return true;
  }

  return (
    IsTreeSubtree(tree.left, subtree) || IsTreeSubtree(tree.right, subtree)
  );
}

console.log(IsTreeSubtree(tree,subtree));
