export default class Header {
    constructor() {
        this.container = this.createContainer()
    }

    createContainer() {
        const element = document.createElement('div')
        element.classList.add("header");
        document.body.appendChild(element);
        return element;
    }
}