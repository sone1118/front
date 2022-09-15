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

        this.isDown = false;
        this.moveX = 0;
        this.offsetX = 0;

        document.addEventListener("pointerdown", this.onDown.bind(this), false);
        document.addEventListener("pointermove", this.onMove.bind(this), false);
        document.addEventListener("pointerup", this.onUp.bind(this), false);

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        // this.polygon = new Polygon(
        //     this.stageWidth / 2,
        //     this.stageHeight + this.stageHeight / 4,
        //     this.stageWidth / 2,
        //     13
        // );

        this.polygon = new Polygon(
            this.stageWidth / 2,
            this.stageHeight / 2,
            this.stageHeight / 3,
            13
        );
    }

    animate(t) {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.moveX *= 0.92;
        this.polygon.animate(this.ctx, this.moveX);
    }

    onDown(e) {
        this.isDown = true;
        this.moveX = 0;
        this.offsetX = e.clientX;
    }

    onMove(e) {
        if(this.isDown) {
            this.moveX = e.clientX - this.offsetX;
            this.offsetX = e.clientX;
        }
    }

    onUp(e) {
        this.isDown = false;
    }
}

window.onload = () => {
    new App();
}