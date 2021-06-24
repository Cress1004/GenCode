class Pagination extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        var id = `${this.tagType}Element`;
        this.container.insertAdjacentHTML('beforeend', `
            <canvas id="${id}" class="region">
        `);
        var c = document.getElementById(id);
        var ctx = c.getContext("2d");
        ctx.canvas.width = 200;
        ctx.canvas.height = 30;
        ctx.beginPath();
        ctx.rect(0, 0, 200, 30);
        ctx.moveTo(30, 0);
        ctx.lineTo(30, 30);
        ctx.moveTo(80, 0);
        ctx.lineTo(80, 30);
        ctx.moveTo(125, 0);
        ctx.lineTo(125, 30);
        ctx.moveTo(170, 0);
        ctx.lineTo(170, 30);

        ctx.moveTo(15, 5);
        ctx.lineTo(5, 15);
        ctx.lineTo(15, 25);
        ctx.moveTo(20, 5);
        ctx.lineTo(10, 15);
        ctx.lineTo(20, 25);

        ctx.moveTo(180, 5);
        ctx.lineTo(190, 15);
        ctx.lineTo(180, 25);
        ctx.moveTo(185, 5);
        ctx.lineTo(195, 15);
        ctx.lineTo(185, 25);

        ctx.stroke();
    }
}
