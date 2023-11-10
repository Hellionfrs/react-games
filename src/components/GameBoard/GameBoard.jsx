import Square from "../Square";
import styles from "./GameBoard.module.css";
function GameBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.player}>

      Next player: X
      </div>
      <div className={styles.board}>
        <span>
          <Square />
          <Square />
          <Square />
        </span>
        <span>
          <Square />
          <Square />
          <Square />
        </span>
        <span>
          <Square />
          <Square />
          <Square />
        </span>
      </div>
      
    </div>
  );
}

export default GameBoard;
