import { Pessoa } from "./Pessoa";

export type TipoConta = "Corrente" | "Poupança";
export class Conta {
    agencia: number;
    numero: number;
    cliente: Pessoa;
    saldo: number = 0;
    tipo: TipoConta;

    constructor(
        agencia: number,
        numero: number,
        cliente: Pessoa,
        tipo: TipoConta
    ) {
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
        this.tipo = tipo;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    mostrarSaldo(): void {
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
    }

    transferir(valor: number, conta: Conta): void {
        this.sacar(valor);
        conta.depositar(valor);
    }
}
