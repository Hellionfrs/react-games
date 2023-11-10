import Welcome from "./Welcome";
import PokemonResult from "./PokemonResult";
import PokemonsFavoritos from "./PokemonsFavoritos";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

function Pokemon() {
  const [username, setUsername] = useState(() =>
    window.localStorage.getItem("username")
  );

  const [favoritos, setFavoritos] = useState([]);
  const [getFavoritos, setGetFavoritos] = useState(true);

  const apiUrl = `https://poke-collection-lite-production.up.railway.app/api/${username}/favorites`;

  useEffect(() => {
    window.localStorage.setItem("username", username);
    setGetFavoritos(true);
  }, [username]);

  useEffect(() => {
    if (getFavoritos) {
      fetch(apiUrl).then((result) =>
        result.json().then((result) => setFavoritos(result.data))
      );

      setGetFavoritos(false);
    }
  }, [getFavoritos, apiUrl]);

  function onFormSubmit(value) {
    setUsername(value);
  }

  function onExit() {
    setUsername("");
    setFavoritos([]);
  }

 

  return (
    <>
      {!username ? (
        <Welcome onFormSubmit={onFormSubmit} />
      ) : (
        <section className={styles.container}>
          <div className={styles["white-box"]}>
            <PokemonResult
              username={username}
              setGetFavoritos={setGetFavoritos}
            />
            <PokemonsFavoritos onExit={onExit} favoritos={favoritos} />
          </div>
        </section>
      )}
    </>
  );
}
export default Pokemon;
