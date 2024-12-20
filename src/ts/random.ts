const bool = (): boolean => Math.random() >= 0.5;

const range = (min: number, max: number) => min + Math.random() * (max - min);

const rangeInt = (from: number, to: number) => Math.floor(range(from, to));

export default { bool, range, rangeInt };
