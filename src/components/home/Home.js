import React from "react"
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
        <h1 className={styles["home__question"]}>What is a Binary Search Tree</h1>
        <p className={styles["home__answer1"]}>BST is a data structure that spreads out like a tree. The first element of the tree is known as the root. In a BST, values that are smaller than the root are on the left side of the root, which are refereed as leftChild. Values that are greater or equal to the root are on the right side of the root, which are refereed as rightChild.</p>
    </div>
  );
};

export default Home;