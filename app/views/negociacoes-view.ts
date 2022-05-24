import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView{

  private element: HTMLElement; 

  constructor(selector: string){
    this.element = document.querySelector(selector); 
  }

  template(model: Negociacoes): string {
    return `
    <table class="table table-hover table-bordered"> 
      <thead>
        <tr>
          <th>DATA</th>
          <th>QUANTIDADE</th>
          <th>VALOR</th>
        </tr>  
      </thead>
      <tbody> 
       ${model.lista().map(neg => {
        return `
        <tr>
          <td>${new Intl.DateTimeFormat().format(neg.data)}</td>
          <td>${neg.quantidade}</td>
          <td>${neg.valor}</td>
        </tr>
         `
       }).join('')}
      </tbody>
    </table>
    `
  }

  update(model: Negociacoes): void {
    this.element.innerHTML = this.template(model); 
  }
}