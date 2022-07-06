export default class Viewport {
  top: number;

  left: number;

  width: number;

  height: number;

  constructor(x1: number, y1: number, x2: number, y2: number) {
    this.top = y1;
    this.left = x1;
    this.width = x2 - x1;
    this.height = y2 - y1;
  }
}
