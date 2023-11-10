import styles from "./styles.module.css";
import peso from "../../../assets/peso.svg";
import altura from "../../../assets/altura.svg";
import estrella from "../../../assets/estrella.svg";
import { useEffect, useState } from "react";
import usePokemonSearch from "./usePokemonSearch.hook";
import useAddFavorito from "./useAddFavotitos.hook";

function PokemonResult({ username, setGetFavoritos }) {
  const [pokemonName, setPokemonName] = useState("");
  const { pokemon, setIsSearching } = usePokemonSearch(pokemonName);
  const { result, addFavorito } = useAddFavorito(pokemon, username);

  function addFavoriteHandler() {
    addFavorito(pokemon);
  }

  useEffect(() => {
    if (result) {
      setGetFavoritos(true);
    }
  }, [result, setGetFavoritos]);

  return (
    <div className={styles["busqueda-container"]}>
      <div className={styles.search}>
        <input
          id="pokemon"
          type="text"
          name="pokemon"
          required
          className={styles.input}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button className={styles.button} onClick={() => setIsSearching(true)}>
          Search
        </button>
      </div>

      {pokemon && (
        <>
          <div className={styles.card}>
            <div className={styles.title}>
              <h1 className={styles.name}>{pokemon.name}</h1>
              <span className={styles.id}>{pokemon.id}</span>
            </div>
            <div>
              <img
                className={styles.img}
                src={pokemon.sprites.other.dream_world.front_default}
              />
            </div>
            <div className={styles.type}>
              {pokemon.types.map((type, key) => (
                <span key={key} className={styles["type-pokemon"]}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className={styles.talla}>
              <div>
                <div className={styles.weight}>
                  <img src={peso} />
                  <span>{pokemon.weight / 10} kg</span>
                </div>
                <span className={styles.titleTalla}>weight</span>
              </div>
              <span className={styles.division}></span>
              <div>
                <div className={styles.height}>
                  <img src={altura} />
                  <span>{pokemon.height / 10} m</span>
                </div>
                <span className={styles.titleTalla}>height</span>
              </div>
            </div>
          </div>

          <div>
            <button
              className={styles["favorito-btn"]}
              onClick={addFavoriteHandler}
            >
              {" "}
              <img src={estrella} />
              Add to Favorites
            </button>
          </div>
        </>
      )}

      {!pokemon && (
        <>
          <h1>No hay pokemon</h1>
        </>
      )}
    </div>
  );
}
export default PokemonResult;
