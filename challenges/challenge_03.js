"use strict";
//1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
var dobro = function (valor) {
    return valor * 2;
};
console.log(dobro(10));
// res:
var dobroRefac = function (valor) { return valor * 2; };
console.log(dobro(12));
//2 -  Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nome) {
    if (nome === undefined) {
        nome = "Pessoa";
    }
    console.log("Ola, " + nome);
};
dizerOla();
dizerOla("Anna");
//res:
var dizerOlaRefac = function (nome) {
    if (nome === void 0) { nome = 'Pessoa'; }
    console.log("Ol\u00E1, " + nome);
};
dizerOlaRefac();
dizerOlaRefac("Mariana");
//3 - Dado esse array, imprima o menor valor!
var nums = [-3, 33, 38, 5];
console.log('???');
//res:
var numsRefac = [-3, 33, 38, 5];
console.log('o menor valor é:', Math.min.apply(Math, numsRefac));
//4 - Adicione os elementos de nums em array !
var array = [55, 20];
console.log(array);
//res:
array.push.apply(array, numsRefac);
console.log(array);
//5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
//a)
var notas = [8.5, 6.3, 9.4];
var notas1 = notas[0];
var notas2 = notas[1];
var notas3 = notas[2];
console.log(notas1, notas2, notas3);
//res:
var notasRefac = [8.5, 6.3, 9.4];
var notasRefac1 = notas[0], notasRefac2 = notas[1], notasRefac3 = notas[2];
console.log(notasRefac1, notasRefac2, notasRefac3);
//b)
var cientista = { primeiroNome: "Will", experiencia: 12 };
var primeiroNome = cientista.primeiroNome;
var experiencia = cientista.experiencia;
console.log(primeiroNome, experiencia);
//res:
var cientistaRefac = { primeiroNomeRefac: "Will", experienciaRefac: 12 };
var primeiroNomeRefac = cientistaRefac.primeiroNomeRefac, experienciaRefac = cientistaRefac.experienciaRefac;
console.log(primeiroNomeRefac, experienciaRefac);
//# sourceMappingURL=challenge_03.js.map