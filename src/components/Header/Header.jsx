import styles from "./Header.module.css"
import spanish from "../../assets/spanish.png"
import english from "../../assets/english.png"
import Language from "../Language"
function Header(){
  return <header className={styles.container}>
    <div className={styles.header}>
      <h1 className={styles.title}>React Showcase</h1>
      <div className={styles["language-container"]}>
        <Language src={spanish} alt= "spanish"/>
        <Language src={english} alt= "english"/>
      </div>
    </div>
  </header>
}

export default Header