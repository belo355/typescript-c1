import { Negociacao } from './../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        this.criaNegociacao();
        console.log(this.listaNegociacoes.get);
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        this.adicionaListagemNegociacoes(new Negociacao(date, quantidade, valor));
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    adicionaListagemNegociacoes(negociacao) {
        this.listaNegociacoes.adiciona(negociacao);
    }
}
