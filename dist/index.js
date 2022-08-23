"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Conta_1 = require("./classes/Conta");
var Pessoa_1 = require("./classes/Pessoa");
// instanciando os objetos
var p1 = new Pessoa_1.Pessoa("Sergio", 36, "000.000.000-00", "M");
var p2 = new Pessoa_1.Pessoa("Joao", 19, "000.000.000-00", "M");
var p3 = new Pessoa_1.Pessoa("Kleber", 89, "000.000.000-00", "M");
// console.log(`${p1.nome} tem ${p1.idade} anos`);
// p1.fazerAniversario();
// console.log(`${p1.nome} agora tem ${p1.idade} anos`);
// console.log(`${p2.nome} tem ${p2.idade} anos`);
// p2.fazerAniversario();
// console.log(`${p2.nome} agora tem ${p2.idade} anos`);
// console.log(`${p3.nome} tem ${p3.idade} anos`);
// p3.fazerAniversario();
// console.log(`${p3.nome} agora tem ${p3.idade} anos`);
var c1 = new Conta_1.Conta(123, 456, p1);
c1.mostrarSaldo();
c1.depositar(100);
c1.mostrarSaldo();
c1.depositar(-200);
c1.mostrarSaldo();
c1.sacar(500);
c1.mostrarSaldo();
console.log(c1.cliente);
var c2 = new Conta_1.Conta(123, 123, p2);
c1.transferir(40, c2);
c1.mostrarSaldo();
c2.mostrarSaldo();