import styles from "./Language.module.css"
function Language({ src, alt }) {
  return (
    <span className={`${styles["img-container"]} ${styles.active}`}>
      <img className={styles.img} src={src} alt={alt} />
    </span>
  );
}

export default Language
