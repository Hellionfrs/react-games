import GameBoard from "../GameBoard";
import GameInfo from "../GameInfo/GameInfo";
import styles from "./TicTacToe.module.css"
function TicTacToe() {
  return (
    <section className={styles.container}>
      <GameBoard />
      <GameInfo />
    </section>
  );
}

export default TicTacToe;
