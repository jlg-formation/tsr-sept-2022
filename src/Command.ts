import { BoardConfig } from "./interfaces/BoardConfig";

export class Command {
  onUpdate(arg0: (newConfig: any) => void) {
    throw new Error("Method not implemented.");
  }
  setConfig(config: BoardConfig) {
    throw new Error("Method not implemented.");
  }
}