import { MenssagemView } from './../views/mensagem-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from '../models/negociacao.js';
import { NegociacoesView } from '../views/negociacoes-view.js';

export class NegociacaoController{

    private inputData: HTMLInputElement; 
    private inputQuantidade: HTMLInputElement; 
    private inputValor: HTMLInputElement; 
    private listaNegociacoes = new Negociacoes(); 
    private negociacoesView = new NegociacoesView('#negociacoesView'); 
    private menssagemView = new MenssagemView('#mensagemView'); 

    constructor(){
         this.inputData = document.querySelector('#data');
         this.inputQuantidade = document.querySelector('#quantidade'); 
         this.inputValor = document.querySelector('#valor'); 
         this.negociacoesView.update(this.listaNegociacoes); 
     }

    adiciona(){
        this.criaNegociacao(); 
        this.negociacoesView.update(this.listaNegociacoes); 
        this.menssagemView.update("Negociação adicionada com sucesso!"); 
        this.limparFormulario(); 
    }

    criaNegociacao(): void{
        const exp = /-/g; 
        const date = new Date(this.inputData.value.replace(exp,',')); 
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        this.adicionaListagemNegociacoes(new Negociacao(date, quantidade, valor)); 
    }

    adicionaListagemNegociacoes(negociacao: Negociacao){
        this.listaNegociacoes.adiciona(negociacao); 
    }

    limparFormulario(): void {
        this.inputData.value = ''; 
        this.inputQuantidade.value = ''; 
        this.inputValor.value = ''; 
        this.inputData.focus(); 
    }
}