import { BoardConfig } from "./interfaces/BoardConfig";
import { computeAngle, computePointCoordinates, querySelector } from "./utils";

const svgns = "http://www.w3.org/2000/svg";

export class Board {
  config: BoardConfig;

  clean() {
    querySelector("svg g.samples").innerHTML = "";
    querySelector("svg g.lines").innerHTML = "";
  }

  draw() {
    const container = querySelector("svg g.samples");

    const lineContainer = querySelector("svg g.lines");

    const r = 1;

    for (let i = 0; i < this.config.samples; i++) {
      console.log("i: ", i);

      const angle = computeAngle(i, this.config.samples);
      const { x, y } = computePointCoordinates(angle);

      const sample = document.createElementNS(svgns, "circle");
      sample.setAttributeNS(null, "cx", `${x}`);
      sample.setAttributeNS(null, "cy", y.toString());
      sample.setAttributeNS(null, "r", r + "");
      container.appendChild(sample);
    }

    const drawLine = (p1, p2) => {
      const line = document.createElementNS(svgns, "line");
      line.setAttributeNS(null, "x1", p1.x);
      line.setAttributeNS(null, "y1", p1.y);
      line.setAttributeNS(null, "x2", p2.x);
      line.setAttributeNS(null, "y2", p2.y);
      lineContainer.appendChild(line);
    };

    for (let i = 0; i < this.config.samples; i++) {
      // draw a line between i and i * multiplicationFactor
      const angle1 = computeAngle(i, this.config.samples);
      const p1 = computePointCoordinates(angle1);
      const angle2 = computeAngle(
        i,
        this.config.samples,
        this.config.multiplicationFactor
      );
      const p2 = computePointCoordinates(angle2);
      drawLine(p1, p2);
    }
  }

  redraw() {
    this.clean();
    this.draw();
  }

  setConfig(config: BoardConfig) {
    this.config = config;
  }
}
