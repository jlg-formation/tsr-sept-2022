const x0 = 50;
const y0 = 50;
const r0 = 45;

export const computeAngle = (i, samples, multiplicationFactor = 1) => {
  return i * ((2 * Math.PI) / samples) * multiplicationFactor - Math.PI / 2;
};

export const computePointCoordinate = (angle) => {
  const x = x0 + r0 * Math.cos(angle);
  const y = y0 + r0 * Math.sin(angle);
  return { x, y };
};

export const querySelector = (cssSelector: string) => {
  const elt = document.querySelector(cssSelector);
  if (elt === null) {
    throw new Error("Cannot find selector: " + cssSelector);
  }
  return elt;
};
