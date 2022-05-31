// import BinaryNode from "./BinaryNode"
import react from "react";

//  class BinaryTreeNode { 
//     constructor() { 
//         this.root = null;
//     }
    
//     insert(key, value) {
//         if (!Number.isInteger(key)) return;
//         const newNode = new BinaryNode(key, value);
//         if (this.root === null) this.root = newNode;
//         else this.insertNode(this.root, newNode);
//     }

//     insertNode(node, newNode) {
//         if (newNode.key < node.key) {
//         if (node.left === null) node.left = newNode;
//         else this.insertNode(node.left, newNode);
//         } else if (newNode.key === node.key) {
//             node.value = newNode.value;
//         } else {
//             if (node.right === null) node.right = newNode;
//             else this.insertNode(node.right, newNode);
//         }
//     }
// }

class BinaryNode {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
  }
  
  class BinarySeachTree {
        constructor(){
          this.root = null
        }
    
    insert(value){
          var newNode = new BinaryNode(value);
          if(this.root === null){
              this.root = newNode;
              return this;
          }
          let current = this.root;
          while(current){
              if(value === current.value) return undefined;
              if(value < current.value){
                  if(current.left === null){
                      current.left = newNode;
                      return this;
                  }
                  current = current.left;
              } else {
                  if(current.right === null){
                      current.right = newNode;
                      return this;
                  } 
                  current = current.right;
              }
          }
      }


  }

export default BinarySeachTree;