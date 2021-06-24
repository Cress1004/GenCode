class Textarea extends BoundingBox {
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
        ctx.canvas.width = 170;
        ctx.canvas.height = 100;
        ctx.beginPath();
        ctx.rect(0, 0, 170, 100);
        ctx.moveTo(150, 0);
        ctx.lineTo(150, 100);

        ctx.moveTo(155, 15);
        ctx.lineTo(160, 10);
        ctx.moveTo(160, 10);
        ctx.lineTo(165, 15);

        ctx.moveTo(155, 85);
        ctx.lineTo(160, 90);
        ctx.moveTo(160, 90);
        ctx.lineTo(165, 85);
        ctx.stroke();
    }
}