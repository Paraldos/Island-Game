import NextTurnBtn from "./nextTurnBtn.js";

export default class Footer {
    constructor() {
        this.container = this.createContainer()
        this.nextTrnBtn = new NextTurnBtn()
        this.container.appendChild(this.nextTrnBtn.btn)
    }

    createContainer() {
        const element = document.createElement('div')
        element.classList.add("footer");
        document.body.appendChild(element);
        return element;
    }

}