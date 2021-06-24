class Input extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
           <canvas id="${this.tagType}Element" class="region">
        `);
        var c = document.getElementById(`${this.tagType}Element`);;
        var ctx = c.getContext("2d");
        ctx.canvas.width = 150;
        ctx.canvas.height = 30;
        ctx.beginPath();
        ctx.rect(0, 0, 150, 25);
        ctx.stroke();
    }
}
