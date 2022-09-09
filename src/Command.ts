import { BoardConfig } from "./interfaces/BoardConfig";
import { querySelector } from "./utils";

export class Command {
  config: BoardConfig;

  onUpdate(arg0: (newConfig: any) => void) {
    throw new Error("Method not implemented.");
  }

  render() {
    const boardConfigkeys = ["samples", "multiplicationFactor"];
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
  }
}
