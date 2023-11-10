import GameBoard from "../GameBoard";
import GameInfo from "../GameInfo/GameInfo";
import styles from "./TicTacToe.module.css";
import { useState } from "react";

function TicTacToe() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    //TODO
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    //TODO
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "move #" + move;
    } else {
      description = "game start";
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
      <GameInfo moves={moves} />

    </section>
  );
}

export default TicTacToe;
