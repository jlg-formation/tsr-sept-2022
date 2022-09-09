import { Board } from "./Board";
import { Command } from "./Command";
import { BoardConfig } from "./interfaces/BoardConfig";
import "./style.scss";

console.log("start");

const board = new Board();
const config: BoardConfig = {
  samples: 100,
  multiplicationFactor: 100,
};
board.setConfig(config);
board.draw();

const command = new Command();
command.setConfig(config);
command.onUpdate((newConfig) => {
  board.setConfig(config);
  board.redraw();
});
