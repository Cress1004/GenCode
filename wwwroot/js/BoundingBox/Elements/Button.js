class Button extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
            <div  id="${this.tagType}Element" class="region" style="height:30px; width:100px;">
                <button class="btn btn-primary">Click Me!</button>
            </div>
        `);
    }
}

