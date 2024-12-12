namespace Array {
  export const clear = (array: unknown[]) => (array.length = 0);
}

namespace Async {
  export const wait = async (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
}

namespace Images {
  export const loadImage = (source: string, onLoad: () => void) => {
    const image = new Image();
    image.src = source;
    image.onload = onLoad;
    return image;
  };

  export const loadImages = (sources: string[], target: HTMLImageElement[], onAllLoaded: () => void) => {
    let toLoadCount = sources.length;

    const onImageLoaded = () => {
      toLoadCount--;
      if (toLoadCount <= 0) onAllLoaded();
    };

    for (let i = 0; i < sources.length; i++) {
      const image = loadImage(sources[i], onImageLoaded);
      target.push(image);
    }
  };
}

namespace Mathematics {
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
}

namespace Random {
  export const bool = (): boolean => Math.random() >= 0.5;

  export const range = (min: number, max: number) => min + Math.random() * (max - min);

  export const rangeInt = (from: number, to: number) => Math.floor(range(from, to));
}

namespace Text {
  export const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
}

namespace WebGL {
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
}

export const Utilities = {
  Array,
  Async,
  Images,
  Mathematics,
  Random,
  Text,
  WebGL,
};
