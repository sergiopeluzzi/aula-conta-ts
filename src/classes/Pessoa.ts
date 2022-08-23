// classe pessoa
export class Pessoa {
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
