export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    ;
    get data() {
        const data = new Date(this._data.getTime()); //defencivo aqui 
        return this.data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
