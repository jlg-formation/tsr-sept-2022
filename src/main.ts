import { Board } from "./Board";
import "./style.scss";

console.log("start");

const board = new Board();
board.setConfig({
  samples: 100,
  multiplicationFactor: 100,
});
board.draw();
