class Link extends BoundingBox {
    constructor(tagType, document, container) {
        super(tagType, document, container);
    }
    createBox() {
        super.createBox();
        this.container.insertAdjacentHTML('beforeend', `
          <a id="${this.tagType}Element" class="region" style="text-decoration: underline; color: blue">Link</a>
        `);
    }
}
