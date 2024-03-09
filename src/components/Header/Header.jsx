import styles from "./Header.module.css";
import spanish from "../../assets/spanish.png";
import english from "../../assets/english.png";
import Language from "../Language";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  let location = useLocation();
  // console.log(location.pathname);
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <Link to="/" className={styles.title}>
          React Showcase
        </Link>
        {location.pathname !== "/" ? (
          <span className={styles.project}>{location.pathname}</span>
        ) : null}
        <div className={styles["language-container"]}>
          <Language id="es" src={spanish} alt="spanish" />
          <Language id="en" src={english} alt="english" />
        </div>
      </div>
    </header>
  );
}

export default Header;
