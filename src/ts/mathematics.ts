const PI = 3.141592653589793;
const TAU = 6.283185307179586;

const SQRT_2 = 1.4142135623730951;

const SIN_60 = 0.8660254037844386;
const COS_60 = 0.5;
const SIN_45 = 0.7071067811865476;
const COS_45 = 0.7071067811865476;
const SIN_30 = 0.5;
const COS_30 = 0.8660254037844386;

const degreesToRadians = (degrees: number) => degrees * (TAU / 360);

const radiansToDegrees = (radians: number) => radians * (360 / TAU);

const lerp = (a: number, b: number, step: number) => a + step * (b - a);

const manhattanDistance = (x1: number, y1: number, x2: number, y2: number) => Math.abs(x1 - x2) + Math.abs(y1 - y2);

const euclideanModulo = (a: number, b: number) => ((a % b) + b) % b;

export default {
  PI,
  TAU,
  SQRT_2,
  SIN_60,
  COS_60,
  SIN_45,
  COS_45,
  SIN_30,
  COS_30,
  degreesToRadians,
  radiansToDegrees,
  lerp,
  manhattanDistance,
  euclideanModulo,
};
