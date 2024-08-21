"use strict";
function saudarcomOla(pessoa) {
    console.log('Olá, ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'Kauan',
    idade: 19
};
saudarcomOla(pessoa);
mudarNome(pessoa);
saudarcomOla(pessoa);
