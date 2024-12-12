export const setup = {
  compileShader: (gl: WebGL2RenderingContext, type: GLenum, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) throw new Error("Unable to create shader");

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const info = gl.getShaderInfoLog(shader);
      gl.deleteShader(shader);
      throw new Error("Could not compile shader: " + info);
    }

    return shader;
  },

  linkProgram: (gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) => {
    const program = gl.createProgram();
    if (!program) throw new Error("Unable to create program");

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const info = gl.getProgramInfoLog(program);
      gl.deleteProgram(program);
      throw new Error("Program failed to link: " + info);
    }

    // Optional. Default pixel alignment.
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);

    return program;
  },
};

export const utils = {
  resizeCanvasToDisplaySize: (canvas: HTMLCanvasElement, multiplier?: number): boolean => {
    const scale = multiplier || 1;

    const width = (canvas.clientWidth * scale) | 0;
    const height = (canvas.clientHeight * scale) | 0;

    const needsResize = !(canvas.width === width && canvas.height === height);

    if (needsResize) {
      canvas.width = width;
      canvas.height = height;
    }

    return needsResize;
  },

  clear: (gl: WebGL2RenderingContext, alpha: number = 0) => {
    gl.clearColor(0, 0, 0, alpha);
    gl.clear(gl.COLOR_BUFFER_BIT);
  },
};

export const points = {
  rectangle: (x: number, y: number, width: number, height: number): number[] => {
    const x1 = x;
    const x2 = x + width;
    const y1 = y;
    const y2 = y + height;

    return [x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2];
  },
};

export const kernels = {
  computeKernelWeight: (kernel: number[]) => {
    const weight = kernel.reduce((prev, curr) => prev + curr);
    return weight <= 0 ? 1 : weight;
  },

  // prettier-ignore
  identity: [
    0, 0, 0,
    0, 1, 0,
    0, 0, 0,
  ],

  // prettier-ignore
  blur: [
    0.111, 0.111, 0.111,
    0.111, 0.111, 0.111,
    0.111, 0.111, 0.111,
  ],

  // prettier-ignore
  emboss: [
    -2, -1, 0,
    -1, 1, 1,
    0, 1, 2,
  ],

  // prettier-ignore
  sharpen: [
    0, -1, 0,
    -1, 5, -1,
    0, -1, 0,
  ],

  // prettier-ignore
  edgeDetection: [
    -1, -1, -1,
    -1, 8, -1,
    -1, -1, -1,
  ],

  // prettier-ignore
  horizontalEdgeDetection: [
    -1, -1, -1,
    0, 0, 0,
    1, 1, 1,
  ],

  // prettier-ignore
  verticalEdgeDetection: [
    -1, 0, 1,
    -1, 0, 1,
    -1, 0, 1,
  ],
};
