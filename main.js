import Header from "./logic/header.js";
import Board from "./logic/board.js";
import Footer from "./logic/footer.js";
import Preload from "./logic/preload.js";

document.body.addEventListener("svgsLoaded", () => {
  document.body.classList.remove("loading");
  new Header();
  new Board();
  new Footer();
});
