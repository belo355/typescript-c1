export class MenssagemView {

  private element: HTMLElement; 

  constructor(element: string){
    this.element = document.querySelector(element); 
  }

  template(model: string): string {
    return `
      <p class="alert alert-info">${model}</p>
    `
  }

  update(model: string): void{
    this.element.innerHTML = this.template(model); 
  }
}