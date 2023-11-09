import Labels from "../Labels";
import styles from "./DisplayProject.module.css";
function DisplayProject({ img, title, labels }) {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <img src={img} alt="" />
      </div>
      <div className={styles.body}>
        <h1>{title}</h1>
        <div className={styles["labels-container"]}>
          {labels.map(label => <Labels key={label} name={label}/>)}
        </div>
      </div>
    </div>
  );
}

export default DisplayProject;
