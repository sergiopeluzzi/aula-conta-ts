"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
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
exports.Pessoa = Pessoa;
