import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    sexo: string;
    cpf: string;
    dataNascimento: string;

    constructor(
        nome: string,
        endereco: string,
        telefone: string,
        sexo: string,
        cpf: string,
        dataNascimento: string
    ) {
        super(nome, endereco, telefone, "Fisica");
        this.sexo = sexo;
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }
}
