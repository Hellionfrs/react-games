import styles from "./styles.module.css";
import PokemonsFavoritosCard from "./PokemonFavoritosCard/PokemonFavoritosCard";

function PokemonsFavoritos({ onExit, favoritos }) {
  return (
    <div className={styles.favoritosContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Favorites</h1>
        <button className={styles["exit-btn"]} onClick={onExit}>
          Exit
        </button>
      </div>

      <div className={styles.pokemonFavoritosCards}>
        {favoritos.map((pokemon, key) => (
          <PokemonsFavoritosCard pokemon={pokemon} key={key} />
        ))}
      </div>
    </div>
  );
}

export default PokemonsFavoritos;
