import styles from "./styles.module.css";
function PokemonsFavoritosCard({ pokemon }) {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h1 className={styles.name}>{pokemon.name}</h1>
        <span className={styles.id}>{pokemon.id}</span>
      </div>
      <div>
        <img className={styles.img} src={pokemon.avatarUrl} />
      </div>
      <div className={styles.type}>
        <span className={styles["type-pokemon"]}>{pokemon.types}</span>
      </div>
    </div>
  );
}

export default PokemonsFavoritosCard;
