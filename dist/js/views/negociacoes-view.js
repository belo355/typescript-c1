export class NegociacoesView {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
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
          <td>${new Intl.DateTimeFormat().format(neg.data)}</td>
          <td>${neg.quantidade}</td>
          <td>${neg.valor}</td>
        </tr>
         `;
        }).join('')}
      </tbody>
    </table>
    `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
