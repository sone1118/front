import { WaveGroup } from "./wavegroup.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    //window가 "resize"되면  this.resize event가 발생
    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    //애니메이션 시작
    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    //현재페이지의 body의 width가져온다
    this.stageWidth = document.body.clientWidth;
    this.stageHeigth = document.body.clientHeight;

    //캔버스를 더블사이즈로 지정해서 레티나디스플레이서도 잘 보이게 해줌
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeigth * 2;
    this.ctx.scale(2, 2);

    this.waveGroup.resize(this.stageWidth, this.stageHeigth);
  }

  animate(t) {
    //캔버스의 전체영역을 지우고
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeigth);
    this.waveGroup.draw(this.ctx);
    //다시시작
    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => {
  new App();
};
