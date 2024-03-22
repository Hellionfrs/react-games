import { useContext, useEffect, useState } from "react";
import WordleRow from "../Wordle-row";
import s from "./Wordle.module.css";
import { regex } from "../Wordle-row/helper";
import { getRandomWord } from "./helper";
import { wordleEn } from "../../locales/wordle.en";
import { wordleEs } from "../../locales/wordle.es";
import { I18nContext } from "../../locales/I18nContext";

export default function Wordle() {
  const [currentRow, setCurrentRow] = useState(1);
  const [wordAnswer, setWordAnswer] = useState("")
  const [word, setWord] = useState([]);
  const [inputError, setInputError] = useState(null);
  const {language} = useContext(I18nContext)

  useEffect(() => {
    const currentLanguageData = language === 'en' ? wordleEn : wordleEs
    const randomWord = getRandomWord(currentLanguageData)
    console.log(randomWord)
    setWordAnswer(randomWord)
  }, [language])

  function sendWord(event) {
    event.preventDefault();
    if (currentRow > 5) {
      console.log("You lose");
      // setCurrentRow(1)
      setWord([]);
      // reset game ToDo disable Submit
      return;
    }
    const formData = new FormData(event.target);
    const currentInput = formData.get("word-input");
    if (regex.test(currentInput)) {
      // assign row and word to []
      let cRow = currentRow;
      let wordsArray = word;
      setCurrentRow(cRow + 1);
      wordsArray.push(currentInput);
      setWord(wordsArray);
      setInputError(null);
      console.log(currentInput, currentRow, word);
    } else {
      setInputError("La palabra debe ser de 5 caracteres del alfabeto");
    }

    // if currentRow > 5 lose the game
  }
  return (
    <section className={s.box}>
      <div className={s.container}>
        <aside>
          <WordleRow key={1} row={1} word={word} />
          <WordleRow key={2} row={2} word={word} />
          <WordleRow key={3} row={3} word={word} />
          <WordleRow key={4} row={4} word={word} />
          <WordleRow key={5} row={5} word={word} />
        </aside>
        <form onSubmit={sendWord} className={s["form-container"]}>
          <label htmlFor="word-input">Enter your guess</label>
          <div className={s["form-input-section"]}>
            <input type="text" name="word-input" />
            <button
              type="submit"
              className={s.button}
              disabled={currentRow > 5}
            >
              Send
            </button>
          </div>
          {inputError && <small>{inputError}</small>}
        </form>
      </div>
    </section>
  );
}
