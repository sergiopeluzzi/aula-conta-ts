import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";
import { PessoaFisica } from "./classes/PessoaFisica";
import { PessoaJuridica } from "./classes/PessoaJuridica";

// instanciando os objetos
const p1 = new PessoaFisica(
    "Sergio",
    "Av Cuiaba, 2640",
    "(69) 9 9328-4013",
    "M",
    "111.111.111-11",
    "25/11/1985"
);
const p2 = new PessoaFisica(
    "Henrique",
    "Rua dos Pioneiros, 1575",
    "(69) 9 9268-1850",
    "M",
    "222.222.222-22",
    "08/05/1991"
);

const p3 = new PessoaJuridica(
    "Scalare Mkt Digital",
    "Av Dois de Junho, 2651",
    "(69) 3441-5113",
    "11.111.222/0001-60",
    "19/08/2018"
);

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

const cc1 = new ContaCorrente(123, 7777, p1);
const cp1 = new ContaPoupanca(123, 9999, p2, 80);

console.log(cc1);
console.log(cp1);
