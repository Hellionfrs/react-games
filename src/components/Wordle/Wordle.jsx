import { useState } from "react";
import WordleRow from "../Wordle-row";
import s from "./Wordle.module.css";

export default function Wordle() {
  const [currentRow, setCurrentRow] = useState(1);
  const [word, setWord] = useState([]);
  function sendWord(event) {
    if (currentRow > 5) {
      console.log('You lose')
      // setCurrentRow(1)
      setWord([])
      // reset game ToDo disable Submit
      return
    }
    event.preventDefault();
    const formData = new FormData(event.target);
    const currentInput = formData.get("word-input");
    // assign row and word to []
    let cRow = currentRow;
    let wordsArray = word;
    setCurrentRow(cRow + 1);
    wordsArray.push(currentInput);
    setWord(wordsArray);
    console.log(currentInput, currentRow, word);
    // if currentRow > 5 lose the game
  }
  return (
    <section className={s.box}>
      <div className={s.container}>
        <aside>
          <WordleRow row={1} word={word} />
          <WordleRow row={2} word={word} />
          <WordleRow row={3} word={word} />
          <WordleRow row={4} word={word} />
          <WordleRow row={5} word={word} />
        </aside>
        <form onSubmit={sendWord} className={s["form-container"]}>
          <label htmlFor="word-input">Enter your guess</label>
          <div className={s["form-input-section"]}>
            <input type="text" name="word-input" />
            <button type="submit" className={s.button} disabled={currentRow > 5}>
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
