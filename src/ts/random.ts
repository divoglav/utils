export function bool() {
  return Math.random() >= 0.5;
}

export function range(from: number, to: number) {
  return from + Math.random() * (to - from);
}

export function rangeInt(from: number, to: number) {
  return Math.floor(range(from, to));
}
