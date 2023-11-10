import styles from "./TicTacToe.module.css";

function TicTacToe() {
  return (
    <section>
      <div className={styles["ticTacToe-container"]}>
        <div className={styles["frame15"]}>
          <div className={styles["frame32"]}>
            <div className={styles["frame28"]}>
              <h1>Winner : 0</h1>
              <div className={styles["group"]}></div>
            </div>
            <div className={styles["frame31"]}>
              <cajaGroup />             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TicTacToe;
