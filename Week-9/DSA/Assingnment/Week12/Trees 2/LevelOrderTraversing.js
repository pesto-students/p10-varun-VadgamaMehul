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


function levelOrderTraverShing(treeRoot) {
  let Q = new Queue();
  Q.enQueue(treeRoot);
  Q.enQueue(null);
  let Level = 0;
  while (!Q.isEmpty()) {
    let temp = Q.deQueue();
    if (temp == null) {
      console.log("Level :", ++Level);
      if (!Q.isEmpty()) {
        Q.enQueue(null);
      }
    } else {
      if (temp.left) {
        Q.enQueue(temp.left);
      }
      if (temp.right) {
        Q.enQueue(temp.right);
      }
      console.log(temp.val);
    }
  }
} 

const input = [3, 9, null, null, 20, 15, null, null, 7, null, null];
// const input = [3, 9, 20, null, null, 15, 17];
// const input = [1, 2, 4, 5, 3];
const tree = buildTree(input);
levelOrderTraverShing(tree);

// console.log(tree);
