class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Queue {
  constructor() {
    this.items = [];
  }

  enQueue(value) {
    this.items.push(value);
  }

  deQueue() {
    if (this.items.length === 0) {
      return "Queue is empty";
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.items.length === 0) {
      return "Queue is empty";
    } else {
      return this.items[0];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    console.log(this.items.join(" "));
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

let input = [1, 2, 4, null, null, 5, null, null, 3, null, 6];

let tree = buildTree(input);
// console.log(tree);

let count = 0;
function inOrder(root) {
  if (root == null) {
    return 0;
  }
  if (root.left == null && root.right == null) {
    count++;
  }
  inOrder(root.left);
  inOrder(root.right);
  return count;
}

console.log(inOrder(tree));
