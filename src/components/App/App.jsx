/* eslint-disable no-unused-vars */
import * as React from "react";
import styles from "./styles.module.css";
import Header from "../Header";
import Main from "../Main";
import I18nProvider from "../../locales/I18nContext";
import ProjectProvider from "../../contexts/ProjectContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ProjectProvider>
        <I18nProvider>
          <Header />
          <Outlet />
        </I18nProvider>
      </ProjectProvider>
    </>
  );
}

export const test = "aaa";

export default App;
