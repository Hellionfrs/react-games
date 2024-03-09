/* eslint-disable no-unused-vars */
import * as React from "react";
import Header from "../Header";
import I18nProvider from "../../locales/I18nContext";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <I18nProvider>
        <Header />
        <Outlet />
      </I18nProvider>
    </>
  );
}

export const test = "aaa";

export default App;
