function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  const subtree = value < this.value
    ? 'left'
    : 'right';

    if(this[subtree]) {
      this[subtree].insert(value);
    } else {
      this[subtree] = new BinarySearchTree(value);
    }
}

BinarySearchTree.prototype.get = function (value) {
  if(this.value === value) {
    return this;
  }

  if (this.left === null & this.right === null) {
    return null;
  }
  const subTree = value < this.value
    ? 'left'
    : 'right';

  this[subtree].get(value);

}

BinarySearchTree.prototype.max = function (value) {

}

BinarySearchTree.prototype.min = function (value) {

}

BinarySearchTree.prototype.contains = function (value) {

}



module.exports = BinarySearchTree;