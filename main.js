console.log("start");

const samples = 10;

const svgns = "http://www.w3.org/2000/svg";

const container = document.querySelector("svg g.samples");

const r = 1;

for (let i = 0; i < samples; i++) {
  console.log("i: ", i);

  const x = 34;
  const y = 56;

  const circle = document.createElementNS(svgns, "circle");
  circle.setAttributeNS(null, "cx", x);
  circle.setAttributeNS(null, "cy", y);
  circle.setAttributeNS(null, "r", r);
  container.appendChild(circle);
}
