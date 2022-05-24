export class MenssagemView {
    constructor(element) {
        this.element = document.querySelector(element);
    }
    template(model) {
        return `
      <p class="alert alert-info">${model}</p>
    `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
