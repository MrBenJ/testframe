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

BinarySearchTree.prototype.min = function () {
  if (this.left) {
    return this.left.min();
  }

  return this.value;
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

BinarySearchTree.prototype.delete = function (value) {
  if (this.value === value) {
    if (this.left === null && this.right === null) {
      this.value = null;
    }

  }

  const subtree = value < this.value
    ? 'left'
    : 'right';

  this[subtree].delete(value);

}

module.exports = BinarySearchTree;
