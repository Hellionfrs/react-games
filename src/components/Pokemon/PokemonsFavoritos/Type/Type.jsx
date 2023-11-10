import styles from "./Type.module.css";
function Type({ type, id }) {
  let className = `${styles["base-type"]} ${styles[type]}`;
  let newType =  type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <span className={className} id={id}>
      {newType}
    </span>
  );
}

export default Type;
