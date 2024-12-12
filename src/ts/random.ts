export const bool = (): boolean => Math.random() >= 0.5;

export const range = (min: number, max: number) => min + Math.random() * (max - min);

export const rangeInt = (from: number, to: number) => Math.floor(range(from, to));
