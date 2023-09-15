// construct a tree using preOrder and inOrder traversing

// let preOrder = root,left,right
// inOrder = left, root, right;
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Node {
  constructor(root) {
    this.root = root;
    this.left = null;
    this.right = null;
  }
}

let inMap = new Map();

function constructTree(preorder, preStart, preEnd, inorder, inStrat, inEnd) {
  if (preStart > preEnd || inStrat > inEnd) {
    return null;
  }

  let value = preorder[preStart];
  let node = new Node(value);
  let inOrderIndex = inMap.get(value);
  let numLeft = inOrderIndex - inStrat;

  node.left = constructTree(
    preorder,
    preStart + 1,
    preStart + numLeft,
    inorder,
    inStrat,
    inOrderIndex - 1
  );
  node.right = constructTree(
    preorder,
    preStart + numLeft + 1,
    preEnd,
    inorder,
    inOrderIndex + 1,
    inEnd
  );
  return node;
}

function buildTree(preorder, inorder) {
  inorder.forEach((val, inx) => inMap.set(val, inx));
  return constructTree(
    preorder,
    0,
    preorder.lenght - 1,
    inorder,
    0,
    inorder.lenght - 1
  );
}

let pre = [10, 20, 40, 50, 30, 60];
let ino = [40, 20, 50, 10, 60, 30];
let tree = buildTree(pre, ino);
console.log(tree);
