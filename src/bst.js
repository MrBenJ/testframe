function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  const subtree = value < this.value
    ? 'left'
    : 'right';

  if (value === this.value) {
    return `Value ${value} already exists in tree`;
  }

  if (this[subtree]) {
    this[subtree].insert(value);
  } else {
    this[subtree] = new BinarySearchTree(value);
  }
}

BinarySearchTree.prototype.get = function (value) {
  if (this.value === value) {
    return this;
  }

  if (this.left === null & this.right === null) {
    return null;
  }

  const subtree = value < this.value
    ? 'left'
    : 'right';

  return this[subtree].get(value);

}

BinarySearchTree.prototype.max = function () {
  if (this.right) {
    return this.right.max();
  }

  return this.value;

}

BinarySearchTree.prototype.getMaxNode = function () {
  if (this.right) {

    return this.right.getMaxNode();
  }
  return this;
}

BinarySearchTree.prototype.min = function () {
  if (this.left) {
    return this.left.min();
  }

  return this.value;
}

BinarySearchTree.prototype.getMinNode = function () {
  if (this.left) {
    return this.left.getMinNode();
  }

  return this;
}

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  if (value < this.value) {
    return Boolean(this.left) && this.left.contains(value);
  } else {
    return Boolean(this.right) && this.right.contains(value);
  }
}

BinarySearchTree.prototype.hasChildren = function () {
  return Boolean((this.left || this.right));
}

BinarySearchTree.prototype.delete = function (value) {
  const subtree = value < this.value
    ? 'left'
    : 'right';

  if (this[subtree].value === value) {

    // Leaf node? Delete this node
    if (!this[subtree].hasChildren()) {
      this[subtree] = null;

    // Node with 2 children? Replate with left max, or right min
    } else if (this[subtree].left && this[subtree].right) {
      let auxNode = this[subtree].left.getMaxNode();

      if (!auxNode) {
        auxNode = this[subtree].right.getMinNode();
      }

      this[subtree] = auxNode;
      this[subtree].left
    } else if (this[subtree].left) {
      this[subtree] = this[subtree].left;
    } else if (this[subtree].right) {
      this[subtree] = this[subtree].right;
    }
  } else {
    return this[subtree].delete(value);
  }
}

function getEvenValues(tree) {

}

function getOddValues(tree) {

}


module.exports = {
  BinarySearchTree,
  getEvenValues,
  getOddValues
};
