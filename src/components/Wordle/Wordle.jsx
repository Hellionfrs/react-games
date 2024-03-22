import WordleRow from "../Wordle-row";
import s from "./Wordle.module.css";

export default function Wordle() {
  return (
    <section className={s.box}>
      <body className={s.container}>
        <aside>
          <WordleRow />
          <WordleRow />
          <WordleRow />
          <WordleRow />
          <WordleRow />
        </aside>
        <form className={s["form-container"]}>
          <label htmlFor="word-input">Enter your guess</label>
          <div className={s["form-input-section"]}>
            <input type="text" name="word-input" />
            <button className={s.button}>Submit</button>
          </div>
        </form>
      </body>
    </section>
  );
}
