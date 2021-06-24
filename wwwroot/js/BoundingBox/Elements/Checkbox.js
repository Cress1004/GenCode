class Checkbox extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
            <div  id="${this.tagType}Element" class="region" style="height:25px; width:70px;">
                <input type="checkbox" name="agree" checked>
                <label for="scales">Agree</label>
            </div>
        `);
    }
}
