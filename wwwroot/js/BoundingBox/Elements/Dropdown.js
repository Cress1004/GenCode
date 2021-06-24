class Dropdown extends BoundingBox {
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
        ctx.canvas.width = 150;
        ctx.canvas.height = 30;
        ctx.beginPath();
        ctx.rect(0, 0, 150, 25);
        ctx.moveTo(125, 0);
        ctx.lineTo(125, 25);

        ctx.moveTo(130, 10);
        ctx.lineTo(138, 20);
        ctx.lineTo(145, 10);
        ctx.lineTo(130, 10);
        ctx.stroke();
    }
}

