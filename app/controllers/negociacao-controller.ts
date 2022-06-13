import { Dayofweek } from './day-of-week.js';
import { MenssagemView } from "./../views/mensagem-view.js";
import { Negociacoes } from "../models/negociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private listaNegociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#negociacoesView");
    private menssagemView = new MenssagemView("#mensagemView");

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        this.negociacoesView.update(this.listaNegociacoes);
    }

    public adiciona() {
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

    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        return new Negociacao(
            new Date(this.inputData.value.replace(exp, ",")), 
            parseInt(this.inputQuantidade.value), 
            parseFloat(this.inputValor.value) 
        )
    }

    private adicionaListagemNegociacoes(negociacao: Negociacao) {
        this.listaNegociacoes.adiciona(negociacao);
    }

    private limparFormulario(): void {
        this.inputData.value = "";
        this.inputQuantidade.value = "";
        this.inputValor.value = "";
        this.inputData.focus();
    }

    private handleDateUtil(model: Negociacao): boolean {
        return model.data.getDay() > Dayofweek.SUNDAY && model.data.getDay() < Dayofweek.SATURDAY;
    }
}
