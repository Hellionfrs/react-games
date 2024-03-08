import Projects from "../Projects";
import styles from "./Main.module.css";
import * as React from "react";

function Main() {
  return (
    <section className={styles.main}>
      <Projects />
    </section>
  );
}

export default Main;
