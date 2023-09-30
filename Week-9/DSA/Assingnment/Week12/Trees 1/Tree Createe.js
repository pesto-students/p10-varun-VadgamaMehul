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
// const input = [3, 9, null, null, 20, 15, null, null, 7, null, null];
const input =  [3,9,20,null,null,15,17];
// const input = [1, 2, 4, 5, 3];
const tree = buildTree(input);

console.log(tree);
