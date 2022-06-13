export abstract class View<T> {

  protected element: HTMLElement; 

  constructor(element: string){
    this.element = <HTMLInputElement>document.querySelector(element); 
  }

  protected abstract template(model: T): string; 

  update(model: T): void{
    const template = this.template(model); 
    this.element.innerHTML = template;
  }
}