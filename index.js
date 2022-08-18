"use strict";
// classe pessoa
var Pessoa = /** @class */ (function () {
    // metodo construtor
    function Pessoa(nome, idade, cpf, sexo) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
    }
    Pessoa.prototype.fazerAniversario = function () {
        this.idade = this.idade + 1;
        console.log(this.nome + " fez aniversário!");
    };
    return Pessoa;
}());
// instanciando os objetos
var p1 = new Pessoa("Sergio", 36, "000.000.000-00", "M");
var p2 = new Pessoa("Joao", 19, "000.000.000-00", "M");
var p3 = new Pessoa("Kleber", 89, "000.000.000-00", "M");
// console.log(`${p1.nome} tem ${p1.idade} anos`);
// p1.fazerAniversario();
// console.log(`${p1.nome} agora tem ${p1.idade} anos`);
// console.log(`${p2.nome} tem ${p2.idade} anos`);
// p2.fazerAniversario();
// console.log(`${p2.nome} agora tem ${p2.idade} anos`);
// console.log(`${p3.nome} tem ${p3.idade} anos`);
// p3.fazerAniversario();
// console.log(`${p3.nome} agora tem ${p3.idade} anos`);
var Conta = /** @class */ (function () {
    function Conta(agencia, numero, cliente) {
        this.saldo = 0;
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
    }
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
    return Conta;
}());
var c1 = new Conta(123, 456, p1);
c1.mostrarSaldo();
c1.depositar(100);
c1.mostrarSaldo();
c1.depositar(-200);
c1.mostrarSaldo();
c1.sacar(500);
c1.mostrarSaldo();
console.log(c1.cliente);
