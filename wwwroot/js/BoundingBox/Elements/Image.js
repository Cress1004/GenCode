class Image extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        var id = `${this.tagType}Element`;
        this.container.insertAdjacentHTML('beforeend', `
            <canvas id="${id}" class="region" style:"height: 150px; width:200px">
        `);
        var c = document.getElementById(id);;
        var ctx = c.getContext("2d");
        ctx.canvas.width = 150;
        ctx.canvas.height = 100;
        ctx.beginPath();
        ctx.rect(0, 0, 150, 100);
        ctx.moveTo(0, 0);
        ctx.lineTo(150, 100);
        ctx.moveTo(150, 0);
        ctx.lineTo(0, 100);
        ctx.stroke();
    }
}