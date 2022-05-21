import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from '../models/negociacao.js';
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new Negociacoes();
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        this.criaNegociacao();
        this.limparFormulario();
        console.log(this.listaNegociacoes.lista());
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        this.adicionaListagemNegociacoes(new Negociacao(date, quantidade, valor));
    }
    adicionaListagemNegociacoes(negociacao) {
        this.listaNegociacoes.adiciona(negociacao);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
