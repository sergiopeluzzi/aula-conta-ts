import { Pessoa } from "./Pessoa";

export type TipoConta = "Corrente" | "Poupança";
export class Conta {
    private agencia: number;
    private numero: number;
    private cliente: Pessoa;
    protected saldo: number = 0;

    constructor(
        agencia: number,
        numero: number,
        cliente: Pessoa
    ) {
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
    }

    obterCliente(): Pessoa {
        return this.cliente;
    }

    atribuirCliente(cliente: Pessoa): void {
        this.cliente = cliente;
    }

    obterAgencia(): number {
        return this.agencia;
    }

    atribuirAgencia(ag: number): void {
        this.agencia = ag
    }

    obterNumero(): number {
        return this.numero
    }

    atribuirNumero(num: number): void {
        this.numero = num
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


