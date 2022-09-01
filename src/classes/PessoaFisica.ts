import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    private sexo: string;
    private cpf: string;
    private dataNascimento: string;

    constructor(
        nome: string,
        endereco: string,
        telefone: string,
        sexo: string,
        cpf: string,
        dataNascimento: string
    ) {
        super(nome, endereco, telefone);
        this.sexo = sexo;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    obterSexo(): string {
        return this.sexo;
    }

    atribuirSexo(sexo: string): void {
        this.sexo = sexo
    }

    obterCpf(): string {
        return this.cpf
    }

    atribuirCpf(cpf: string): void {
        this.cpf = cpf
    }

    obterDataNascimento(): string {
        return this.dataNascimento
    }

    atribuirDataNascimento(dataNasc: string): void {
        this.dataNascimento = dataNasc
    }
}
