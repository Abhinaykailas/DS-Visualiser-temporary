import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div>
      <div className={styles["nav__bar"]}>
        <div className={styles["nav__container"]}>
          <div>
            <ul>
              <li>
            <Link
              className={styles["nav__text"]}
              to="/"
              >
                Home
              </Link>
              </li>
              <li>
            <Link
              className={styles["nav__text"]}
              to="/visualiser"
              >
                Visualiser
              </Link>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

