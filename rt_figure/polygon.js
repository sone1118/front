const PI2 = Math.PI * 2;
const COLORS = [
    "#FF0000",
    "#DC143C",
    "#B22222",
    "#8B0000",
    "#A52A2A",
    "#CD5C5C",
    "#F08080",
    "#FA8072",
    "#E9967A",
    "#FF7F50",
    "#FFA07A",
    "#CD853F",
    "#A0522D",
    "#8B4513",
    "#800000",
];

export class Polygon{
    constructor(x, y, radius, sides) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.sides = sides;
        this.rotate = 0;
    }

    animate(ctx, moveX) {
        ctx.save();
        //ctx.fillStyle = "#000";
        //ctx.beginPath();

        const angle = PI2 / this.sides;
        const angle2 = PI2 / 4;

        ctx.translate(this.x, this.y);

        this.rotate += moveX * 0.004;
        ctx.rotate(this.rotate);

        for(let i = 0; i < this.sides; i++) {
            const x = this.radius * Math.cos(angle * i);
            const y = this.radius * Math.sin(angle * i);

            //원으로 그리기
            //ctx.beginPath();
            //ctx.arc(x, y, this.radius / 10, 0, PI2, false);
            //ctx.fill();
            //ctx.closePath();

            //사각형그리기
            ctx.save();
            ctx.fillStyle = COLORS[i];
            ctx.translate(x, y);
            ctx.rotate(((360 / this.sides) * i + 45) * Math.PI / 180);

            ctx.beginPath();
            for(let j = 0; j < 4; j++) {
                const x2 = 100 * Math.cos(angle2 * j);
                const y2 = 100 * Math.sin(angle2 * j);
                (j === 0) ? ctx.moveTo(x2, y2) : ctx.lineTo(x2, y2);
            }
            ctx.fill();
            ctx.closePath();
            ctx.restore();


            //도형 하나만 그리기
            //(i === 0) ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }

        //ctx.fill();
        //ctx.closePath();
        ctx.restore();
    }
}