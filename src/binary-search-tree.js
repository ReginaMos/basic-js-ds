const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (!this.tree) this.tree = new Node(data);
    else {
      let curElem = this.tree;
      while(true) {
        if (data > curElem.data) {
          if (!curElem.right) {
            curElem.right = new Node(data);
            return;
          }
          curElem = curElem.right;
        } else {
          if (!curElem.left) {
            curElem.left = new Node(data);
            return;
          }
          curElem = curElem.left;
        }
      }
    }
  }

  has(data) {
    return this.find(data) ? true : false; 
  }

  find(data) {
    const notPassedElems = [this.tree];
    
    while (notPassedElems.length > 0) {
      const elem = notPassedElems.pop();
      if (elem.data === data) return elem;

      if (elem.right) notPassedElems.push(elem.right);
      if (elem.left) notPassedElems.push(elem.left);
    }

    return null;
  }

  remove(data) {
    if (!this.tree) return null;
    this.tree = this.removeElem(this.tree, data);
  }

  removeElem(subtree, value) {
    if (!subtree) return null;

    if (value > subtree.data) {
      subtree.right = this.removeElem(subtree.right, value);
    } else if (value < subtree.data) {
      subtree.left = this.removeElem(subtree.left, value);
    } else {
        if (!subtree.left && !subtree.right) return null;

        if (!subtree.left) return subtree.right;
        else if (!subtree.right) return subtree.left;
        
        let newRoot = subtree;
        while (newRoot.left !== null) {
          newRoot = newRoot.left;
        }

        subtree.data = newRoot.data;
        subtree.right = this.removeElem(subtree.right, newRoot.data);
    }
    return subtree;
  }

  min() {
    const notPassedElems = [this.tree];
    let minData = this.tree.data;
    
    while (notPassedElems.length > 0) {
      const elem = notPassedElems.pop();
      if (elem.data < minData) minData = elem.data;

      if (elem.right) notPassedElems.push(elem.right);
      if (elem.left) notPassedElems.push(elem.left);
    }

    return minData;
  }

  max() {
    const notPassedElems = [this.tree];
    let maxData = this.tree.data;
    
    while (notPassedElems.length > 0) {
      const elem = notPassedElems.pop();
      if (elem.data > maxData) maxData = elem.data;

      if (elem.right) notPassedElems.push(elem.right);
      if (elem.left) notPassedElems.push(elem.left);
    }

    return maxData;
  }
}

module.exports = {
  BinarySearchTree
};