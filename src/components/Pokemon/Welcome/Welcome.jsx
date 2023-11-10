import styles from "./styles.module.css";
import pokemon from "../../../assets/pokemon.png";
// import { useEffect, useState } from "react";
import React from "react";

function Welcome({ onFormSubmit }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onFormSubmit(value);
  }

  return (
    <section className={styles.container}>
      <div className={styles["container-pokemon"]}>
        <img src={pokemon} alt="pokemon" />
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            placeholder="username"
            name="username"
            required
            className={styles.input}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className={styles.button}>
            Enter
          </button>
        </form>
      </div>
    </section>
  );
}
export default Welcome;
