import ProjectProvider, { ProjectContext } from "../../contexts/ProjectContext";
import Projects from "../Projects";
import TicTacToe from "../TicTacToe";
import Pokemon from "../Pokemon";
import styles from "./Main.module.css";
import * as React from "react";

function Main() {
  const {project} = React.useContext(ProjectContext)
  return (
    <section className={styles.main}>
      {!project && <Projects />}
      {project === "ReactDev Tic-Tac-Toe" && <TicTacToe />}
      {project === "Poke Collection" && <Pokemon />}
      {project === "React Wordle" && <h1>Wordle Under Construction...</h1>}
      {project === "Video Feed" && <h1>Video Feed Under Construction...</h1>}
    </section>
  );
}

export default Main;
