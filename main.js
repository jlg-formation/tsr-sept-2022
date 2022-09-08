console.log("start");

const computeAngle = (i, samples, multiplicationFactor) => {
  if (multiplicationFactor === undefined) {
    multiplicationFactor = 1;
  }
  return i * ((2 * Math.PI) / samples) * multiplicationFactor - Math.PI / 2;
};

const computePointCoordinate = (angle) => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

const samples = 100;
const multiplicationFactor = 3;

const svgns = "http://www.w3.org/2000/svg";

const container = document.querySelector("svg g.samples");
const lineContainer = document.querySelector("svg g.lines");

const x0 = 50;
const y0 = 50;
const r0 = 45;

const r = 1;

for (let i = 0; i < samples; i++) {
  console.log("i: ", i);

  const angle = computeAngle(i, samples);
  const { x, y } = computePointCoordinate(angle);

  const sample = document.createElementNS(svgns, "circle");
  sample.setAttributeNS(null, "cx", x);
  sample.setAttributeNS(null, "cy", y);
  sample.setAttributeNS(null, "r", r);
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

for (let i = 0; i < samples; i++) {
  // draw a line between i and i * multiplicationFactor
  const angle1 = computeAngle(i, samples);
  const p1 = computePointCoordinate(angle1);
  const angle2 = computeAngle(i, samples, multiplicationFactor);
  const p2 = computePointCoordinate(angle2);
  drawLine(p1, p2);
}
