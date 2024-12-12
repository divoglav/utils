class Array {
  static readonly clear = (array: unknown[]) => {
    array.length = 0;
  };
}

class Async {
  static readonly wait = async (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
}

class Images {
  static readonly loadImage = (source: string, onLoad: () => void) => {
    const image = new Image();
    image.src = source;
    image.onload = onLoad;
    return image;
  };

  static readonly loadImages = (sources: string[], target: HTMLImageElement[], onAllLoaded: () => void) => {
    let toLoadCount = sources.length;

    const onImageLoaded = () => {
      toLoadCount--;
      if (toLoadCount <= 0) onAllLoaded();
    };

    for (let i = 0; i < sources.length; i++) {
      const image = this.loadImage(sources[i], onImageLoaded);
      target.push(image);
    }
  };
}

class Mathematics {
  static readonly PI = 3.141592653589793;
  static readonly TAU = 6.283185307179586;

  static readonly SQRT_2 = 1.4142135623730951;

  static readonly SIN_60 = 0.8660254037844386;
  static readonly COS_60 = 0.5;
  static readonly SIN_45 = 0.7071067811865476;
  static readonly COS_45 = 0.7071067811865476;
  static readonly SIN_30 = 0.5;
  static readonly COS_30 = 0.8660254037844386;

  static readonly degreesToRadians = (degrees: number) => degrees * (this.TAU / 360);

  static readonly radiansToDegrees = (radians: number) => radians * (360 / this.TAU);

  static readonly lerp = (a: number, b: number, step: number) => a + step * (b - a);

  static readonly manhattanDistance = (x1: number, y1: number, x2: number, y2: number) =>
    Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

class Random {
  static readonly bool = (): boolean => Math.random() > 0.5;

  static readonly range = (from: number, to: number) => from + Math.random() * (to - from);

  static readonly rangeInt = (from: number, to: number) => Math.floor(Random.range(from, to));
}

class Text {
  static readonly capitalizeFirstLetter = (text: string): string =>
    text ? text.charAt(0).toUpperCase() + text.slice(1) : text;
}

class WebGL {
  static readonly setup = {
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

  static readonly utils = {
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

    computeKernelWeight: (kernel: number[]) => {
      const weight = kernel.reduce((prev, curr) => prev + curr);
      return weight <= 0 ? 1 : weight;
    },
  };

  static readonly points = {
    rectangle: (x: number, y: number, width: number, height: number): number[] => {
      const x1 = x;
      const x2 = x + width;
      const y1 = y;
      const y2 = y + height;

      return [x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2];
    },
  };

  static readonly kernels = {
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

export class Utilities {
  static readonly Array = Array;
  static readonly Async = Async;
  static readonly Images = Images;
  static readonly Mathematics = Mathematics;
  static readonly Random = Random;
  static readonly Text = Text;
  static readonly WebGL = WebGL;
}
