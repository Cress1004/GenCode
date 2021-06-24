class Label extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }

    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
            <div  id="${this.tagType}Element" class="region" style="height:25px; width:75px; font-size:16px">
               <label id="${this.tagType}Element">Label</label>
            </div>
        `);
    }
}

