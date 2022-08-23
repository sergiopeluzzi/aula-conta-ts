import { Conta } from "./classes/Conta";
import { Pessoa } from "./classes/Pessoa";

// instanciando os objetos
const p1 = new Pessoa("Sergio", 36, "000.000.000-00", "M");
const p2 = new Pessoa("Joao", 19, "000.000.000-00", "M");
const p3 = new Pessoa("Kleber", 89, "000.000.000-00", "M");

// console.log(`${p1.nome} tem ${p1.idade} anos`);
// p1.fazerAniversario();
// console.log(`${p1.nome} agora tem ${p1.idade} anos`);

// console.log(`${p2.nome} tem ${p2.idade} anos`);
// p2.fazerAniversario();
// console.log(`${p2.nome} agora tem ${p2.idade} anos`);

// console.log(`${p3.nome} tem ${p3.idade} anos`);
// p3.fazerAniversario();
// console.log(`${p3.nome} agora tem ${p3.idade} anos`);

const c1 = new Conta(123, 456, p1);
c1.mostrarSaldo();
c1.depositar(100);
c1.mostrarSaldo();
c1.depositar(-200);
c1.mostrarSaldo();
c1.sacar(500);
c1.mostrarSaldo();
console.log(c1.cliente);

const c2 = new Conta(123, 123, p2);

c1.transferir(40, c2);
c1.mostrarSaldo();
c2.mostrarSaldo();
