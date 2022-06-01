export abstract class View<T> {

  protected elemento: HTMLElement; 

  constructor(elemento: string){
    this.elemento = document.querySelector(elemento); 
  }

  abstract template(model: T): string; 

  update(model: T): void{
    const template = this.template(model); 
    this.elemento.innerHTML = template;
  }
}