export function getRandomWord(wordDataBase) {
  const randomIndex = Math.floor(Math.random() * wordDataBase.length);
  return wordDataBase[randomIndex];
}