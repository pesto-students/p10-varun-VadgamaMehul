class Tree {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newnode = new Tree(data);
    if (this.root === null) {
      this.root = newnode;
    } else {
      this.insertNewNode(this.root, newnode);
    }
  }

  insertNewNode(node, newnode) {
    if (node.data >= newnode.data) {
      if (node.left === null) {
        node.left = newnode;
      } else {
        this.insertNewNode(node.left, newnode);
      }
    } else {
      if (node.right === null) {
        node.right = newnode;
      } else {
        this.insertNewNode(node.right, newnode);
      }
    }
  }

  serch(value) {
    return this.serchnode(value, this.root);
  }

  serchnode(value, root) {
    if (!root) {
      return;
    }
    if (value > root.data) {
      return this.serch(value, root.right);
    } else if (value <= root.data) {
      return this.serch(value, root.left);
    } else {
      return node;
    }
  }

  delet(data) {
    this.root = this.deletnode(data, this.root);
  }

  deletnode(data, node) {
    // root node is null
    if (node === null) {
      return null;
    }

    if (node.data === data) {
      //leaf node
      if (node.left === null && node.right === null) {
        return null;
      }
      //other case
      else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        //two children
        //left most of the right sub tree
        let minNode = this.findMinNode(node.right);
        node.data = minNode.data;
        node.right = this.deletnode(minNode.data, node.right);
        return node;
      }
    }
    //data is right side
    else if (data > node.data) {
      node.right = this.deletnode(data, node.right);
      return node;
    } else {
      //data is on left side
      node.left = this.deletnode(data, node.left);
      return node;
    }
  }

  findMinNode(node) {
    if (!node.left) {
      return node;
    }
    return this.findMinNode(node.left);
  }
}

let inp = [4, 2, 1, 3, 6, 5, 7];

let tree = new BST();

for (let val of inp) {
  tree.insert(val);
}

let root = tree.root;

// let count = 0;
function kthSmallestElement(root, k) {
  if (root == null) {
    return -1;
  }
  let ans = [];
  function inorder(root) {
    if (root == null) {
      return;
    }
    inorder(root.left);
    ans.push(root.data);
    inorder(root.right);
  }
  inorder(root, count);
  return k<ans.length?ans[k]:-1;
}

console.log(kthSmallestElement(root, 1));
