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

const input = [
  3,
  9,
  10,
  11,
  null,
  null,
  null,
  null,
  20,
  15,
  8,
  null,
  null,
  null,
  7,
];
const tree = buildTree(input);
console.log(heightOfTree(tree));
console.log(deiameterOfTree(tree));
// console.log(tree);

function heightOfTree(root) {
  let height = 0;
  if (root === null) {
    return 0;
  }

  let L = heightOfTree(root.left);
  let R = heightOfTree(root.right);

  height = Math.max(L, R) + 1;

  return height;
}

function deiameterOfTree(root) {
  // let diemeter = 0;
  if (root == null) {
    return 0;
  }

  let op1 = deiameterOfTree(root.left);
  let op2 = deiameterOfTree(root.right);
  let op3 = heightOfTree(root.left)+heightOfTree(root.right)+1;

  let ans = Math.max(op1,op2,op3);
  return ans;
}
