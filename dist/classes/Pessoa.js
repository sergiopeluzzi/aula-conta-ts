"use strict";
// classe pessoa
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    // metodo construtor
    function Pessoa(nome, endereco, telefone) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
    }
    Pessoa.prototype.obterNome = function () {
        return this.nome;
    };
    Pessoa.prototype.atribuirNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.obterEndereco = function () {
        return this.endereco;
    };
    Pessoa.prototype.atribuirEndereco = function (end) {
        this.endereco = end;
    };
    Pessoa.prototype.obterTelefone = function () {
        return this.telefone;
    };
    Pessoa.prototype.atribuirTelefone = function (tel) {
        this.telefone = tel;
    };
    Pessoa.prototype.saudacao = function () {
        console.log("Ol\u00E1 eu sou ".concat(this.nome));
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
