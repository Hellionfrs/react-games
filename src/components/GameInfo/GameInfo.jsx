import styles from "./GameInfo.module.css";
function GameInfo({ moves }) {
  return (
    <div className={styles.container}>
      <button className={styles.reset}>Reset</button>

      <div className={styles.body}>
        <span>Go to:</span>
        <div className={styles.grid}>
          {moves}
        </div>
      </div>
    </div>
  );
}

export default GameInfo;
