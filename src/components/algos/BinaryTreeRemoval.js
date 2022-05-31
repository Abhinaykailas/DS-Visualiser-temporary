import React from "react";

// ---- not sure of this 
class BinaryTreeNode {
    constructor() {
      this.root = null;
    } // not sure of this ----

    remove(key) {
        if (!Number.isInteger(key)) return;
        this.root = this.removeNode(this.root, key);
    }
    
    removeNode(node, key) {
        if (node === null) return null;
        else if (key < node.key) {
          node.left = this.removeNode(node.left, key);
          return node;
        } else if (key > node.key) {
          node.right = this.removeNode(node.right, key);
          return node;
        } else {
          if (node.left === null && node.right === null) {
            node = null;
            return node;
          }
    
          if (node.left === null) {
            node = node.right;
            return node;
          } else if (node.right === null) {
            node = node.left;
            return node;
          }
    
          const aux = this.findMinimumNode(node.right);
          node.key = aux.key;
    
          node.right = this.removeNode(node.right, aux.key);
          return node;
        }
      }

}