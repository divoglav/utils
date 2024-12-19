export const PI = 3.141592653589793;
export const TAU = 6.283185307179586;

export const SQRT_2 = 1.4142135623730951;

export const SIN_60 = 0.8660254037844386;
export const COS_60 = 0.5;
export const SIN_45 = 0.7071067811865476;
export const COS_45 = 0.7071067811865476;
export const SIN_30 = 0.5;
export const COS_30 = 0.8660254037844386;

export const degreesToRadians = (degrees: number) => degrees * (TAU / 360);

export const radiansToDegrees = (radians: number) => radians * (360 / TAU);

export const lerp = (a: number, b: number, step: number) => a + step * (b - a);

export const manhattanDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.abs(x1 - x2) + Math.abs(y1 - y2);
