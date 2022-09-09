import { BoardConfig } from "./interfaces/BoardConfig";
import { querySelector } from "./utils";

type CommandCallback = (newConfig: BoardConfig) => void;

export class Command {
  config: BoardConfig = {
    multiplicationFactor: 0,
    samples: 0,
  };
  callback: CommandCallback | undefined;

  constructor() {
    this.addListeners();
  }

  addListeners() {
    const boardConfigkeys: (keyof BoardConfig)[] = [
      "samples",
      "multiplicationFactor",
    ];
    for (const key of boardConfigkeys) {
      const input = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      input.addEventListener("input", (event) => {
        this.config[key] = +input.value;
        this.render();
        this.callback?.(this.config);
      });
    }
  }

  onUpdate(callback: CommandCallback) {
    this.callback = callback;
  }

  render() {
    const boardConfigkeys: (keyof BoardConfig)[] = [
      "samples",
      "multiplicationFactor",
    ];
    for (const key of boardConfigkeys) {
      const elt = querySelector(`div.command label.${key} span`);
      elt.innerHTML = this.config[key].toString();

      const sliderElt = querySelector(
        `div.command label.${key} input`,
        HTMLInputElement
      );
      sliderElt.value = this.config[key].toString();
    }
  }

  setConfig(config: BoardConfig) {
    this.config = config;
    this.render();
    this.callback?.(this.config);
  }
}
