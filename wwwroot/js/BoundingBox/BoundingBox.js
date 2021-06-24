class BoundingBox {
    constructor(tagType, document, container) {
        this.tagType = tagType;
        this.document = document;
        this.container = container;
    }
    createBox() { }
    
    dragElement() {
/*        var tagele = this.document.getElementById(`${this.tagType}Element`);
*/        var script = this.document.createElement('script');
        script.insertAdjacentHTML('beforeend', `
            $(document).ready(function () {  
                var region = {};
                $("#${this.tagType}Element").draggable({containment:"#designContent",
                    stop: function(e, ui) {
                        region.TagType = "${this.tagType}";
                        region.top =   ui.position.top;
                        region.left =  ui.position.left;
                        region.width = $(this).width();
                        region.height = $(this).height();

                    }
                })  
            })
        `)
        this.document.getElementsByTagName('head')[0].appendChild(script);
    }

    getProperties() {
        var tagele = this.document.getElementByClass(`region`);
        var region = {};
        region.tagType = this.tagType;
        region.height = tagele.offsetHeight;
        region.width = tagele.offsetWidth;
        region.top = tagele.offsetTop;
        region.left = tagele.offsetLeft;
        console.log(region);
    }
}
