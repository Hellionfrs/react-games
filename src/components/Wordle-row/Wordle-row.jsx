import s from "./Wordle-row.module.css";
import { clsx } from "clsx";
export default function WordleRow({ row, word, answer }) {
  // row = number
  // word = [... ]
  let wordLen = word.length;
  let parsedWord = wordLen >= row ? word[row - 1] : "     ";
  return (
    <section className={s["row-container"]}>
      {parsedWord.split("").map((char, index) => {
        return (
          <span
            key={crypto.randomUUID()}
            className={clsx({
              [s["default"]]: char !== " ",
              [s["includes"]]: answer.includes(char),
              [s["clutch"]]: answer[index] === char,
            })}
          >
            {char}
          </span>
        );
      })}
    </section>
  );
}
