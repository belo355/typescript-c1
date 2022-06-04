import { Negociacoes } from "../models/negociacoes.js";
import { View } from './view.js'; 

export class NegociacoesView extends View<Negociacoes> {

  protected template(model: Negociacoes): string {
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
          <td>${this.handleDate(neg.data)}</td>
          <td>${neg.quantidade}</td>
          <td>${neg.valor}</td>
        </tr>
         `
       }).join('')}
      </tbody>
    </table>
    `
  }

  private handleDate(model: Date){
    return new Intl.DateTimeFormat().format(model); 
  }

}