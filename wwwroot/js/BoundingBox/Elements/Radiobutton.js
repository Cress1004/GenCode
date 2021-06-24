class Radiobutton extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
            <div  id="${this.tagType}Element" class="region" style="height:30px; width:120px;">
                <input type="radio" name="option" value="yes" checked>
                <label for="yes">Yes</label>  &ensp; 
                <input type="radio" name="option" value="no">
                <label for="no">No</label>

            </div>
        `);
    }
}