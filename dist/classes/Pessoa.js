"use strict";
// classe pessoa
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    // metodo construtor
    function Pessoa(nome, endereco, telefone, tipo) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipo = tipo;
    }
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1 eu sou ".concat(this.nome));
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
