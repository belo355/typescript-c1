export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    get data() {
        return new Date(this._data.getTime()); //defencivo aqui  
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
