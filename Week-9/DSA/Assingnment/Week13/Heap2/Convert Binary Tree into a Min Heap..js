function BTtoHeap(tree) {
    let root = tree;
    console.log(BTArray);
}

let BTArray = [];
function inorder(root) {
  if (root == null) {
    return null;
  }
  inorder(root.left);
  BTArray.push(root.val);
  inorder(root.rigth);
}
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

let input = [1,2,3,4,5,6,7];
let tree = buildTree(input);
inorder(tree);
console.log(BTArray);

// console.log(tree);