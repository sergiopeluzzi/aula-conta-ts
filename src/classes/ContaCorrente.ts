import { Conta, TipoConta } from "./Conta";
import { Pessoa } from "./Pessoa";

export class ContaCorrente extends Conta {
    constructor(agencia: number, numero: number, cliente: Pessoa) {
        super(agencia, numero, cliente);
    }

    sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.aplicarTxDeSaque(valor)
        }
    }

    private aplicarTxDeSaque(valor: number) {
        const tx = 0.01;
        this.saldo = this.saldo - (valor * tx) 
    }
}
