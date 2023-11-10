import { I18nContext } from "../../locales/I18nContext";
import GameBoard from "../GameBoard";
import GameInfo from "../GameInfo/GameInfo";
import styles from "./TicTacToe.module.css";
import { useState, useContext } from "react";

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const { t } = useContext(I18nContext);
  console.log(t)
  function handlePlay(nextSquares) {
    //TODO
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleReset() {
    setHistory([Array(9).fill(null)])
    setCurrentMove(0)
    
  }
  function jumpTo(nextMove) {
    //TODO
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = t("move") + "#" + move;
    } else {
      description = t("move-0");
    }
    return (
      <button key={move} onClick={() => jumpTo(move)}>
        {description}
      </button>
    );
  });
  return (
    <section className={styles.container}>
      <GameBoard
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
      />
      <GameInfo moves={moves} handleReset={handleReset} />
    </section>
  );
}

export default TicTacToe;
