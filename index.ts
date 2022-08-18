// classe pessoa
class Pessoa {
    // atributos da classe pessoa
    nome: string;
    idade: number;
    cpf: string;
    sexo: string;

    // metodo construtor
    constructor(nome: string, idade: number, cpf: string, sexo: string) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
        this.sexo = sexo;
    }

    fazerAniversario() {
        this.idade = this.idade + 1;
        console.log(this.nome + " fez aniversário!");
    }
}

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

class Conta {
    agencia: number;
    numero: number;
    cliente: Pessoa;
    saldo: number = 0;

    constructor(agencia: number, numero: number, cliente: Pessoa) {
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
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
}

const c1 = new Conta(123, 456, p1);
c1.mostrarSaldo();
c1.depositar(100);
c1.mostrarSaldo();
c1.depositar(-200);
c1.mostrarSaldo();
c1.sacar(500);
c1.mostrarSaldo();
console.log(c1.cliente);
