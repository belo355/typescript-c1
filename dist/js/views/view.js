export class View {
    constructor(elemento) {
        this.elemento = document.querySelector(elemento);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
