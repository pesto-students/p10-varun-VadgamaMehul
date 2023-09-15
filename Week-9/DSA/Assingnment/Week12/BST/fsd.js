class TreeNode {
  constructor(value) {
    this.value = value;

    this.left = null;

    this.right = null;
  }
}

function isBST(root,min = Number.MIN_SAFE_INTEGER,max = Number.MAX_SAFE_INTEGER) {
  if (root === null) {
    return true;
  }

  if (root.value <= min || root.value >= max) {
    return false;
  }

  return (
    isBST(root.left, min, root.value) && isBST(root.right, root.value, max)
  );
}

function buildTree(input) {
  const nodes = input.split(" ").map(Number);

  const n = nodes[0];

  const treeNodes = nodes.slice(1);

  const root = new TreeNode(treeNodes[0]);

  const queue = [root];

  for (let i = 1; i < n * 3; i += 3) {
    const node = queue.shift();

    if (treeNodes[i] !== -1) {
      node.left = new TreeNode(treeNodes[i]);

      queue.push(node.left);
    }

    if (treeNodes[i + 1] !== -1) {
      node.right = new TreeNode(treeNodes[i + 1]);

      queue.push(node.right);
    }
  }

  return root;
}

function main(input) {
  const root = buildTree(input);

  const result = isBST(root);

  return result;
}

// Sample Input: 5 5 3 7 2 4 1 2 3 4 -1 -1 -1 -1 -1 -1

// Sample Output: true

const sampleInput1 = "5 5 3 7 2 4 1 2 3 4 -1 -1 -1 -1 -1 -1";

console.log(main(sampleInput1));

// Sample Input: 4 3 2 5 1 2 3 4 -1 -1 -1 -1 -1

// Sample Output: false

const sampleInput2 = "4 3 2 5 1 2 3 4 -1 -1 -1 -1 -1";

console.log(main(sampleInput2));
