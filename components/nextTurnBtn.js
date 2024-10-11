export default class NextTurnBtn {
    constructor() {
        this.btn = this.addBtn()
        
    }

    addBtn() {
        const element = document.createElement('button')
        element.classList.add('nextTurnBtn');
        element.innerHTML = '>'
        return element
    }
}