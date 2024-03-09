import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import TicTacToe from "./components/TicTacToe";
import Pokemon from "./components/Pokemon";
import Wordle from "./components/Wordle";
import VideoFeed from "./components/Video-feed";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "/tictactoe",
        element: <TicTacToe />
      },
      {
        path: "/pokeapi",
        element: <Pokemon />
      },
      {
        path: "/wordle-clone",
        element: <Wordle />
      },
      {
        path: "/video-feed",
        element: <VideoFeed />
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
