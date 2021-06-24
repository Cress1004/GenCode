class Paragraph extends BoundingBox {
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
        ctx.canvas.height = 100;
        ctx.beginPath();
        ctx.moveTo(0, 1);
        ctx.lineTo(200, 1);
        ctx.moveTo(0, 21);
        ctx.lineTo(200, 21);
        ctx.moveTo(0, 41);
        ctx.lineTo(200, 41);
        ctx.moveTo(0, 61);
        ctx.lineTo(200, 61);
        ctx.moveTo(0, 81);
        ctx.lineTo(200, 81);
        ctx.moveTo(0, 101);
        ctx.lineTo(200, 101);
        ctx.stroke();
    }
}
