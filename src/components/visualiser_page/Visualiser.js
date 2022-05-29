import React from "react"
import styles from "./Visualiser.module.css";
import { useState } from 'react';
// import { FormField } from 'react-form-input-fields';

function Visualiser() {
  // state 
  let [insertedNumberObj, default_val] = useState();

  const insertNumber = () => {
    // insertedNumberObj = 10
    // console.log('Number inserted')
    default_val()
  }

// const Visualiser = () => {
  return (
    <div className={styles["page__container"]}>
        <form>
            <div className={styles["form__container"]}>
              <div className={styles["form__element"]}>
                <label htmlFor="insert">Insert a number</label>
              </div>
              <br></br>
              <div className={styles["form__element"]}>
                <input type="number" name = "" id = "username" className="form-control" />
              </div>
              <h2 className="text-info display-1">{insertedNumberObj}</h2>
              <div className={styles["form__button"]}>
                {/* <button>insert</button> */}
                {/* <button class="w3-button w3-round-large">Rounder</button> */}
                <button type="submit" className="btn btn-success d-block mx-auto" onClick={insertNumber}>Insert</button>
              </div>
            </div>
        </form>

      </div>
  );
};

export default Visualiser;