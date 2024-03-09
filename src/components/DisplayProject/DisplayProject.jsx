/* eslint-disable react/prop-types */
import Labels from "../Labels";
import styles from "./DisplayProject.module.css";
import * as React from "react";
import { Link } from "react-router-dom";
function DisplayProject({ project }) {
  const { title, img, labels, endpoint } = project;
  return (
    <Link to={endpoint} className={styles.card} key={title}>
      <div className={styles.head}>
        <img src={img} alt="" />
      </div>
      <div className={styles.body}>
        <h1>{title}</h1>
        <div className={styles["labels-container"]}>
          {labels.map((label) => (
            <Labels key={label} name={label} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export default DisplayProject;
