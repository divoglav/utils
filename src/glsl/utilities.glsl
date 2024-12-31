vec2 getCoordinates(float id) {
  float xIndex = mod(id, GRID_DIMENSIONS.x);
  float yIndex = floor(id / GRID_DIMENSIONS.x);
  return vec2((xIndex + 0.5) / GRID_DIMENSIONS.x, (yIndex + 0.5) / GRID_DIMENSIONS.y);
}
