import React from "react"
import styles from "./Visualiser.module.css";
import { useState,  useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BinarySeachTree from "../algos/BinaryTreeInsertion";
// import { FormField } from 'react-form-input-fields';

function Visualiser() {
  // // state 
  // let [insertedNumberObj, default_val] = useState();

  const { handleSubmit, register } = useForm();

  let obj

  useEffect(() => {
    obj = new BinarySeachTree() 
  }, []) // once the page is loaded, this function will be called everytime.

  const onSubmitted = (val) => {
    obj.insert(val)
    console.log(obj.root)
  }


// const Visualiser = () => {
  return (
    <div className={styles["form__container"]}>
      <form onSubmit={ handleSubmit(onSubmitted) }>
        <div>
          <div className={styles["for__element"]}>
            <label htmlFor="">Insert a number</label>
          </div>
          <div className={styles["for__element"]}>
            <input type="number" {...register("node", {required: true})}/>
          </div>
        </div>
        <div className={styles["form__button"]}>
          <button type="submit">Insert</button>
        </div>
      </form>
    </div>
    // <div className={styles["page__container"]}>
    //     <form>
    //         <div className={styles["form__container"]}>
    //           <div className={styles["form__element"]}>
    //             <label htmlFor="insert">Insert a number</label>
    //           </div>
    //           <br></br>
    //           <div className={styles["form__element"]}>
    //             <input type="number" name = "" id = "username" className="form-control" />
    //           </div>
    //           <div className={styles["form__button"]}>
    //             {/* <button>insert</button> */}
    //             {/* <button class="w3-button w3-round-large">Rounder</button> */}
    //             <button type="submit" onSubmit={ handleSubmit(onSubmitted) }>Insert</button>
    //           </div>
    //         </div>
    //     </form>

    //   </div>
  );
};

export default Visualiser;