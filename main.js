import Header from "./logic/header.js";
import Board from "./logic/board/board.js";
import Footer from "./logic/footer/footer.js";

document.body.addEventListener("svgsLoaded", () => {
  document.body.classList.remove("loading");
  new Header();
  new Board();
  new Footer();
});
