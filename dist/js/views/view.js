export class View {
    constructor(element) {
        this.element = document.querySelector(element);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = template;
    }
}
