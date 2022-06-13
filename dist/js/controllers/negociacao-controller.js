import { Dayofweek } from './day-of-week.js';
import { MenssagemView } from "./../views/mensagem-view.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.listaNegociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#negociacoesView");
        this.menssagemView = new MenssagemView("#mensagemView");
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.listaNegociacoes);
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (!this.handleDateUtil(negociacao)) {
            this.menssagemView.update("Somente dias uteis sao permitidos");
            this.limparFormulario();
            return;
        }
        this.adicionaListagemNegociacoes(negociacao);
        this.negociacoesView.update(this.listaNegociacoes);
        this.menssagemView.update("Negociação adicionada com sucesso!");
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        return new Negociacao(new Date(this.inputData.value.replace(exp, ",")), parseInt(this.inputQuantidade.value), parseFloat(this.inputValor.value));
    }
    adicionaListagemNegociacoes(negociacao) {
        this.listaNegociacoes.adiciona(negociacao);
    }
    limparFormulario() {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }
    handleDateUtil(model) {
        return model.data.getDay() > Dayofweek.SUNDAY && model.data.getDay() < Dayofweek.SATURDAY;
    }
}
