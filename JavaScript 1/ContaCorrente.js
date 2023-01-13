import { Cliente } from "./Cliente.js";

export class contaCorrente {
    static numeroDeContas = 0;

    agencia;
    // #saldo = 0; essa maneira ainda nao foi implementada

    _cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente(){
        return this._cliente;
    }

    _saldo = 0;


    constructor(agencia,cliente,){
        this.agencia = agencia;
        this.cliente = cliente;//pode usar o acessor, parece q é até melhor usar o acessor;
        contaCorrente.numeroDeContas += 1;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(this._saldo);
            return valor;
        }

    };

    depositar(valor) {
        if (valor <= 0) return valor;// o if de uma linha tambem fuciona sem as chaves;
        this._saldo += valor;
        console.log(this._saldo);
    }


    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valor);

    }
}