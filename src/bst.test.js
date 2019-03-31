const { BinarySearchTree } = require('./bst');

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

    it('does not allow duplicates', () => {
      const bst = new BinarySearchTree(5);

      const resp = bst.insert(5);

      expect(resp).toBe('Value 5 already exists in tree');
    });
  });

  describe('get', () => {
    it('Returns a leaf node', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(1);
      bst.insert(4);
      bst.insert(6);
      bst.insert(9);

      const result = bst.get(4);
      expect(result.value).toBe(4);
      expect(result.left).toBe(null);
      expect(result.right).toBe(null);
      expect(result).toBeInstanceOf(BinarySearchTree);
    });

    it('Returns a node with children', () => {
      const bst = new BinarySearchTree(50);
      bst.insert(55);
      bst.insert(53);
      bst.insert(56);

      const result = bst.get(55);
      expect(result.value).toBe(55);
      expect(result.left).toBeInstanceOf(BinarySearchTree);
      expect(result.right).toBeInstanceOf(BinarySearchTree);
      expect(result.left.value).toBe(53);
    });
  });

  describe('max', () => {
    it('Returns the maximum size value in the tree', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(10);
      bst.insert(100);
      bst.insert(150);
      bst.insert(99);
      bst.insert(201);
      bst.insert(13);
      bst.insert(3);
      bst.insert(75);

      const resp = bst.max();

      expect(resp).toBe(201);
    });
  });

  describe('getMaxNode', () => {
    it('Returns max size node', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(10);
      bst.insert(100);
      bst.insert(150);
      bst.insert(99);
      bst.insert(201);
      bst.insert(13);
      bst.insert(3);
      bst.insert(75);

      const resp = bst.getMaxNode();

      expect(resp).toBeInstanceOf(BinarySearchTree);
      expect(resp.value).toBe(201);
    });
  })

  describe('min', () => {
    it('Returns the minimum size value in the tree', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(10);
      bst.insert(-5);
      bst.insert(-100);
      bst.insert(-50);
      bst.insert(100);
      bst.insert(150);
      bst.insert(99);
      bst.insert(201);
      bst.insert(13);
      bst.insert(3);
      bst.insert(75);

      const resp = bst.min();

      expect(resp).toBe(-100);
    });
  });

  describe('getMinNode', () => {
    it('Returns the minimum size value in the tree', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(10);
      bst.insert(-5);
      bst.insert(-100);
      bst.insert(-50);
      bst.insert(100);
      bst.insert(150);
      bst.insert(99);
      bst.insert(201);
      bst.insert(13);
      bst.insert(3);
      bst.insert(75);

      const resp = bst.getMinNode();

      expect(resp).toBeInstanceOf(BinarySearchTree);
      expect(resp.value).toBe(-100);
    });
  });

  describe('contains', () => {
    it('Returns true if the tree has the value', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(10);
      bst.insert(-5);
      bst.insert(-100);
      bst.insert(-50);
      bst.insert(100);
      bst.insert(150);

      expect(bst.contains(-50)).toBe(true);
    });

    it('Returns false if the tree does not have the value', () => {
      const bst = new BinarySearchTree(5);
      bst.insert(10);
      bst.insert(-5);
      bst.insert(-100);
      bst.insert(-50);
      bst.insert(100);
      bst.insert(150);

      expect(bst.contains(-90)).toBe(false);
    });
  });

  describe('hasChildren', () => {
    it('Returns false if a node has no children', () => {
      const bst = new BinarySearchTree(50);

      expect(bst.hasChildren()).toBe(false);
    });

    it('Returns true if node has children', () => {
      const bst = new BinarySearchTree(50);
      bst.insert(10);

      expect(bst.hasChildren()).toBe(true);

    });
  });

  describe('delete', () => {
    it('deletes a childless node', () => {
      const bst = new BinarySearchTree(50);
      bst.insert(10);
      bst.insert(70);
      bst.insert(55);
      bst.insert(20);

      bst.delete(20);
      expect(bst.contains(20)).toBe(false);
    });

    it('deletes a node with 1 child (left)', () => {
      const bst = new BinarySearchTree(50);
      bst.insert(60);
      bst.insert(70);
      bst.insert(10);
      bst.insert(5);

      bst.delete(10);

      expect(bst.contains(10)).toBe(false);
      expect(bst.contains(5)).toBe(true);
    });

    it('deletes a node with 1 child (right)', () => {
      const bst = new BinarySearchTree(50);
      bst.insert(60);
      bst.insert(70);
      bst.insert(10);
      bst.insert(5);

      bst.delete(60);

      expect(bst.contains(60)).toBe(false);
      expect(bst.contains(70)).toBe(true);
    });

    xit('deletes a node with 2 children', () => {
      const bst = new BinarySearchTree(50);

      bst.insert(100);
      bst.insert(75);
      bst.insert(125);

      bst.delete(100);

      expect(bst.contains(100)).toBe(false);
      expect(bst.contains(75)).toBe(true);
      expect(bst.contains(125)).toBe(true);
    })


  });
});


