import Type from "../Type";
import styles from "./styles.module.css";
function PokemonsFavoritosCard({ pokemon }) {
  let newId = pokemon.id.toString().padStart(3, "0")
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h1 className={styles.name}>{pokemon.name}</h1>
        <span className={styles.id}>{`#${newId}`}</span>
      </div>
      <div>
        <img className={styles.img} src={pokemon.avatarUrl} />
      </div>
      <div className={styles["type-container"]}>
        {pokemon.types.map((type) => (
          <Type id={`${pokemon.id} ${type}`} key={`${pokemon.id} ${type}`}type={type}></Type>
        ))}
      </div>
    </div>
  );
}

export default PokemonsFavoritosCard;
