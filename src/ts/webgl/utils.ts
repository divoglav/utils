export const resizeCanvasToDisplaySize = (canvas: HTMLCanvasElement, multiplier?: number): boolean => {
  const scale = multiplier || 1;

  const width = (canvas.clientWidth * scale) | 0;
  const height = (canvas.clientHeight * scale) | 0;

  const needsResize = !(canvas.width === width && canvas.height === height);

  if (needsResize) {
    canvas.width = width;
    canvas.height = height;
  }

  return needsResize;
};

export const clear = (gl: WebGL2RenderingContext, alpha: number = 0) => {
  gl.clearColor(0, 0, 0, alpha);
  gl.clear(gl.COLOR_BUFFER_BIT);
};
