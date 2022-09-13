import { Hill } from "hill.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.hills = [new Hill("#ff4674", 1.4, 6)];

    //스크린 사이즈를 가져오기 위해 resize이벤트 건다.
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    //캔버스를 2배로 해서 레티나에서도 선명하게 보이게 해줌
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    //픽셀 단위가 2배가 되도록 설정
    this.ctx.scale(2, 2);

    for (let i = 0; i < this.hills.length; i++) {
      this.hills[i].resize(this.stageWidth, this.stageHeight);
    }
  }

  animate(t) {
    requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    let dots;
    for (let i = 0; i < this.hills.length; i++) {
      dots = this.hills[i].draw(this.ctx);
    }
  }
}

window.onload = () => {
  new App();
};
