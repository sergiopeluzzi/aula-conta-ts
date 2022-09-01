"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Banco_1 = require("./classes/Banco");
var ContaCorrente_1 = require("./classes/ContaCorrente");
var ContaPoupanca_1 = require("./classes/ContaPoupanca");
var PessoaFisica_1 = require("./classes/PessoaFisica");
var PessoaJuridica_1 = require("./classes/PessoaJuridica");
// instanciando os objetos
var p1 = new PessoaFisica_1.PessoaFisica("Sergio", "Av Cuiaba, 2640", "(69) 9 9328-4013", "M", "111.111.111-11", "25/11/1985");
var p2 = new PessoaFisica_1.PessoaFisica("Henrique", "Rua dos Pioneiros, 1575", "(69) 9 9268-1850", "M", "222.222.222-22", "08/05/1991");
var p3 = new PessoaJuridica_1.PessoaJuridica("Scalare Mkt Digital", "Av Dois de Junho, 2651", "(69) 3441-5113", "11.111.222/0001-60", "19/08/2018");
// console.log(`${p1.nome} tem ${p1.idade} anos`);
// p1.fazerAniversario();
// console.log(`${p1.nome} agora tem ${p1.idade} anos`);
// console.log(`${p2.nome} tem ${p2.idade} anos`);
// p2.fazerAniversario();
// console.log(`${p2.nome} agora tem ${p2.idade} anos`);
// console.log(`${p3.nome} tem ${p3.idade} anos`);
// p3.fazerAniversario();
// console.log(`${p3.nome} agora tem ${p3.idade} anos`);
//const c1 = new Conta(123, 456, p1, "Corrente");
// c1.mostrarSaldo();
// c1.depositar(100);
// c1.mostrarSaldo();
// c1.depositar(-200);
// c1.mostrarSaldo();
// c1.sacar(500);
// c1.mostrarSaldo();
//console.log(c1.cliente);
//const c2 = new Conta(123, 123, p2, "Poupança");
//c1.transferir(40, c2);
//c1.mostrarSaldo();
//c2.mostrarSaldo();
//const c3 = new Conta(123, 333, p3, "Poupança");
var cc1 = new ContaCorrente_1.ContaCorrente(123, 7777, p1);
var cp1 = new ContaPoupanca_1.ContaPoupanca(123, 9999, p2, 80);
//console.log(cc1);
//cc1.agencia = 2000;
//cc1.saldo = 9000;
// console.log(cc1.obterCliente())
// cc1.atribuirCliente(p2)
// console.log(cc1.obterCliente())
//console.log(cc1)
var b1 = new Banco_1.Banco("Xubank", "2020-10-11");
console.log(b1.nome);
b1.nome = "CaracaBank";
console.log(b1.nome);
console.log(b1.url);
b1.url = '';
console.log(b1.url);
b1.url = 'https://www.google.com';
console.log(b1.url);
