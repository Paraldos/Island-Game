import Header from "./logic/header.js";
import Board from "./logic/board.js";
import Footer from "./logic/footer.js";
import Preload from "./logic/preload.js";

document.body.addEventListener("svgsLoaded", () => {
  new Header();
  new Board();
  new Footer();
});
