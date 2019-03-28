const BinarySearchTree = require('./bst');

describe('BinarySearchTree', () => {
  describe('insert', () => {
    it('inserts a root value', () => {
      const bst = new BinarySearchTree(10);

      expect(bst.value).toBe(10);
    });

    it('inserts left', () => {
      const bst = new BinarySearchTree(10);

      bst.insert(5);

      expect(bst.left.value).toBe(5);
    });

    it('inserts right', () => {
      const bst = new BinarySearchTree(10);

      bst.insert(15);

      expect(bst.right.value).toBe(15);
    });
  });

  describe('get', () => {
    it('Get a shallow value', () => {

    });
  });

  describe('max', () => {

  });

  describe('min', () => {

  });

  describe('contains', () => {

  });
});