import { View } from './view.js';
export class NegociacoesView extends View {
    template(model) {
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
         `;
        }).join('')}
      </tbody>
    </table>
    `;
    }
    handleDate(model) {
        return new Intl.DateTimeFormat().format(model);
    }
}
