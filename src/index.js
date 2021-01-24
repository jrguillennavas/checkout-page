import "./assets/sass/index.scss";
import "./assets/sass/full.scss";
import App from "./page/App.js";
import main from "./script/main.js";

const root = document.getElementById("root");

window.onload = () => {
  root.innerHTML = App();
  main();
};
