export default class Footer {
    constructor() {
        this.container = this.createContainer()
    }

    createContainer() {
        const element = document.createElement('div')
        element.classList.add("footer");
        document.body.appendChild(element);
        return element;
    }
}