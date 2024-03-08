import tictac from "../assets/tictac.png";
import pokeapi from "../assets/pokeapi.png";
import wordle from "../assets/wordle.png";
import youtube from "../assets/youtube.png";

export const projects = [
  {
    endpoint: "tictactoe",
    title: "ReactDev Tic-Tac-Toe",
    labels: ["useState", "useContext", "useEffect", "localStore", "CssModules"],
    img: tictac,
  },
  {
    endpoint: "pokeapi",
    title: "Poke Collection",
    labels: ["useState", "useContext", "useEffect", "otherFeature"],
    img: pokeapi,
  },
  {
    endpoint: "wordle-clone",
    title: "React Wordle",
    labels: ["useState", "useContext", "useEffect", "otherFeature"],
    img: wordle,
  },
  {
    endpoint: "video-feed",
    title: "Video Feed",
    labels: ["useState", "useContext", "useEffect", "otherFeature"],
    img: youtube,
  },
];
