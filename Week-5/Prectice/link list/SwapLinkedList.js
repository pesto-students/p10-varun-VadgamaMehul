function swap(list, i, j) {
  let firstNode, secondNode;
  let currentNode = list.head;
  let k = 1;
  while (k <= list.size) {
    // console.log(k);
    if (i === k) {
      firstNode = currentNode;
    }
    if (j === k) {
      secondNode = currentNode;
    }
    currentNode = currentNode.next;
    k++;
  }
  //   console.log(firstNode);
  //   console.log(secondNode);
  if (firstNode && secondNode) {
    let temp = firstNode.value;
    firstNode.value = secondNode.value;
    secondNode.value = temp;
  }
}
