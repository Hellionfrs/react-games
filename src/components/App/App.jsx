/* eslint-disable no-unused-vars */
import * as React from "react";
import styles from "./styles.module.css";
import Header from "../Header";
import Main from "../Main";
import I18nProvider from "../../locales/I18nContext";

function App() {
  return (
    <>
      <I18nProvider>
        <Header />
        <Main />
      </I18nProvider>
    </>
  );
}

export const test = "aaa";

export default App;
