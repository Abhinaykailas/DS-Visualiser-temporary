import React from "react"
import styles from "./Visualiser.module.css";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { FormField } from 'react-form-input-fields';

function Visualiser() {
  // // state 
  // let [insertedNumberObj, default_val] = useState();

  const { handleSubmit, register } = useForm();

  const onSubmitted = (obj) => {
    console.log(obj);
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