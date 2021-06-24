class Heading extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }

    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
            <div  id="${this.tagType}Element" class="region" style="width:250px; height:30px;">
               <h2>This is heading</h2>
            </div>
        `);
        console.log("ok");
    }
}
