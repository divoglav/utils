export class Vector2 {
  static zero() {
    return new Vector2(0, 0);
  }

  static one() {
    return new Vector2(1, 1);
  }

  static add(v1: Vector2, v2: Vector2) {
    return new Vector2(v1.x + v2.x, v1.y + v2.y);
  }

  static subtract(v1: Vector2, v2: Vector2) {
    return new Vector2(v1.x - v2.x, v1.y - v2.y);
  }

  static multiply(v1: Vector2, v2: Vector2) {
    return new Vector2(v1.x * v2.x, v1.y * v2.y);
  }

  static divide(v1: Vector2, v2: Vector2) {
    return new Vector2(v1.x / v2.x, v1.y / v2.y);
  }

  static distance(v1: Vector2, v2: Vector2) {
    const xDistance = v1.x - v2.x;
    const yDistance = v1.y - v2.y;
    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  }

  constructor(
    public x: number,
    public y: number,
  ) { }

  clone() {
    return new Vector2(this.x, this.y);
  }

  set(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  add(vector2: Vector2) {
    this.x += vector2.x;
    this.y += vector2.y;
    return this;
  }

  subtract(vector2: Vector2) {
    this.x -= vector2.x;
    this.y -= vector2.y;
    return this;
  }

  scale(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }

  normalize() {
    const length = this.length();
    if (length > 0) {
      this.x /= length;
      this.y /= length;
    }
    return this;
  }

  dot(vector2: Vector2) {
    return this.x * vector2.x + this.y * vector2.y;
  }
}
