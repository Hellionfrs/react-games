import ProjectProvider from "../../contexts/ProjectContext";
import Projects from "../Projects";
import TicTacToe from "../TicTacToe";
import Pokemon from "../Pokemon";
import styles from "./Main.module.css";
import * as React from "react";

function Main() {
  return (
    <ProjectProvider>
      <section className={styles.main}>
        <Projects />
        <TicTacToe />
        <Pokemon />
      </section>
    </ProjectProvider>
  );
}

export default Main;
