import { Polygon } from "./polygon.js";

class App {
    constructor() {
        this.canvas = document.createElement("canvas");
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext("2d");

        //css픽셀: 96dpi디스플레이를 가진다고 가정할때 하나의 픽셀 크기
        //dpr: css픽셀을 구성하는 물리적 픽셀수
        //레티나일 경우 2, 모바일일 경우 2, 3일 수도 있다.
        //레티나: 2dpr => 1css은 물리적으로 2px을 가진다
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        window.addEventListener("resize", this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.polygon = new Polygon(
            this.stageWidth / 2,
            this.stageHeight / 2,
            this.stageHeight / 3,
            5
        );
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.polygon.animate(this.ctx);
    }
}

window.onload = () => {
    new App();
}