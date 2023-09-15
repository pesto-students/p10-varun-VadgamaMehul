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

function mergeTwoTree(root1, root2) {
 if(root1 == null) return root2;
 if(root2 == null) return root1;
//  if(!tree2) return tree1;

  const newTree = new TreeNode(root1.val + root2.val);

  newTree.left = mergeTwoTree(root1.left, root2.left);
  newTree.right = mergeTwoTree(root1.right, root2.right);

  return newTree;
}

let input1 = [1,3,5,null,null,null,2] 
let input2 = [2,1,null,4,null,null,3,null,7] 

let tree1 = buildTree(input1)
let tree2 = buildTree(input2)

// console.log(tree1);
// console.log(tree2);

let mergedTree = mergeTwoTree(tree1,tree2);
console.log(mergedTree);