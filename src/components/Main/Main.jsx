import ProjectProvider from "../../contexts/ProjectContext";
import Projects from "../Projects";
import TicTacToe from "../TicTacToe";
import styles from "./Main.module.css";
import * as React from "react";

function Main() {
  return (
    <ProjectProvider>
      <section className={styles.main}>
        <Projects />
        <TicTacToe />
      </section>
    </ProjectProvider>
  );
}

export default Main;
