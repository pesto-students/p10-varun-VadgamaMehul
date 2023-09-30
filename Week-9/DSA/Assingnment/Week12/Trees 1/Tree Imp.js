class node {
  constructor(root) {
    this.root = root;
    this.left = null;
    this.right = null;
  }
}
//if tree is
//1
//2 3
//4 5

function inOrder(node) {
  if (node != null) {
    inOrder(node.left);
    console.log(node.root);
    inOrder(node.right);
  }
}
//4 2 5 1 3 

function preOrder(node) {
  if (node != null) {
    console.log(node.root);
    preOrder(node.left);
    preOrder(node.right);
  }
}
//1 2 4 5 3

function postOrder(node) {
  if (node != null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.root);
  }
}
//4 5 2 3 1