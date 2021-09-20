"use strict";
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando Generics
/// tipo defindo tardiamente, no momento da chamada da função
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27).length);
console.log(echoMelhorado(27).length);
console.log(echoMelhorado({ nome: 'João', idade: 27 }).nome);
// construção genérica - Array é generics
// Generics disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
avaliacoes.push('5.5');
console.log(avaliacoes);
const aulas = [10, 9.3, 7.7];
aulas.push(8.4);
aulas.push('5.5');
console.log(aulas);
//Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'ciclano', idade: 23 },
    { nome: 'Beltrano', idade: 24 }
]);
//# sourceMappingURL=generics.js.map