import React from "react";
import BinaryNode from "./BinaryNode";

// // ---- not sure of this 
// class BinaryTreeNode {
//     constructor() {
//       this.root = null;
//     } // not sure of this ----

//     find(node, key) {
//         if (node === null) return null;
//         else if (key < node.key) return this.find(node.left, key);
//         else if (key > node.key) return this.find(node.right, key);
//         else return node;
//     }
// }

// ALTERNATIVE

// class Node {
//     constructor(value){
//         this.value = value
//         this.left = null
//         this.right = null
    
//     }

// }
class BinarySearchTree {

    constructor(){
      this.root = null
    }
 
  find(value){
      if(!this.root) return false
      
      let current = this.root
      let found = false
      while(current && !found){
            if(value < current.value){
              current = current.left
             } else if(value > current.value){
                current = current.right
             } else {
                  found = current
             } 
            
            }
    
        if(!found) return undefined;
        return found
  }
}

export default BinaryTreeFind;