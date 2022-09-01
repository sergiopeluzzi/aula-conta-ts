"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(agencia, numero, cliente) {
        this.saldo = 0;
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
    }
    Conta.prototype.obterCliente = function () {
        return this.cliente;
    };
    Conta.prototype.atribuirCliente = function (cliente) {
        this.cliente = cliente;
    };
    Conta.prototype.obterAgencia = function () {
        return this.agencia;
    };
    Conta.prototype.atribuirAgencia = function (ag) {
        this.agencia = ag;
    };
    Conta.prototype.obterNumero = function () {
        return this.numero;
    };
    Conta.prototype.atribuirNumero = function (num) {
        this.numero = num;
    };
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    Conta.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    };
    Conta.prototype.mostrarSaldo = function () {
        console.log("Saldo Atual: R$ ".concat(this.saldo.toFixed(2)));
    };
    Conta.prototype.transferir = function (valor, conta) {
        this.sacar(valor);
        conta.depositar(valor);
    };
    return Conta;
}());
exports.Conta = Conta;
