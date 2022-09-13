export class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    //기본 y의 높이
    this.fixedY = y;
    this.speed = 0.1;
    this.cur = index;
    this.max = Math.random() * 100 + 150;
  }

  update() {
    this.cur += this.speed;
    this.y = this.fixedY + Math.sin(this.cur) * this.max;
  }
}
