import s from "./Wordle-row.module.css"

export default function WordleRow({row, word}) {
  // row = number
  // word = [... ]
  let wordLen = word.length
  let parsedWord = wordLen >= row ? word[row - 1] : '     '
  console.log(parsedWord)
  return (
    <section className={s["row-container"]}>
      {parsedWord.split('').map(char => {
        return <span>{char}</span>
      })}
    </section>
  );
}
