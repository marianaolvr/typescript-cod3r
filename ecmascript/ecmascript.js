"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var _this = this;
//let e const
console.log(seraQuePode);
var seraQuePode = '?'; // hoisting
var SeraQuePode = '?'; // não vai ter hoisting, mas vai continuar como undefined
// Arrow function
function somar(n1, n2) {
    return n1 + n2;
}
console.log(somar(2, 2));
var subtrair = function (n1, n2) { return n1 - n2; };
console.log(subtrair(2, 3));
var saudacao = function () { return console.log('olá'); };
saudacao();
// não dá pra usar um único parametros sem parenteses por causa da tipagem
var falarCom = function (pessoa) { return console.log('olá' + pessoa); };
falarCom('João');
var falarComOutraPessoa = function (pessoa) { return console.log('olá' + pessoa); };
falarComOutraPessoa('João');
// this
function normalComThis() {
    console.log(this);
}
normalComThis();
var normalComThisEspecial = normalComThis.bind('ana');
normalComThisEspecial();
//arrow com this
//quem é o this na linha anterior do contexto no qual a função foi definida????
console.log(this);
var arrowComThis = function () { return console.log(_this); };
arrowComThis();
var arrowComThisEspecial = arrowComThis
    .bind('ana');
arrowComThisEspecial();
// função com patametros padrão
function contagemRegressive(inicio) {
    if (inicio === void 0) { inicio = 3; }
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('fim');
}
contagemRegressive();
contagemRegressive(10);
function contagemProgressiva(inicio, fim) {
    if (inicio === void 0) { inicio = 5; }
    if (fim === void 0) { fim = inicio - 5; }
    console.log(inicio);
    while (inicio < 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('fim');
}
contagemProgressiva();
contagemProgressiva(10);
// Rest & Spread
var numbers = [1, 2, 3, 4, 55, -5];
console.log(Math.max(numbers));
// acima errado porque math espera um elemento não array
console.log(Math.max.apply(Math, numbers));
var turmaA = ['maria', 'joao', 'fernanda'];
var turmaB = __spreadArray(__spreadArray(['mariana'], turmaA), ['Miguel']);
console.log(turmaA);
console.log(turmaB);
function retornarArray(arg1, arg2) {
    return [arg1, arg2];
}
// abaixo ts reclama, mas js deixa passar mas retornar o array apenas com dois argumentos
var numeros = retornarArray(1, 2, 3, 4);
console.log(numeros);
//abaixo, ele pega qualquer quantidade de argumentos e coloca dentro de uma array
function retornarArrayDois() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
var numeros2 = retornarArrayDois(25, 22, 55, 36, 85);
console.log(numeros2);
console.log(retornarArrayDois.apply(void 0, numbers));
// multiplos parametros com spread e rest
function retornarArrayTres(a) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(a);
    return args;
}
// ele vai retirar o primeiro número do meu array, dar um console log, e depois retornar a array com os outros números
var numeros3 = retornarArrayTres(22, 66, 88, 77);
console.log(numeros3);
// REST & SPREAD (TUPLA)
var tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log("1) " + a + " " + b + " " + c);
}
tuplaParam1.apply(void 0, tupla);
function tuplaParam2() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
    }
    console.log(Array.isArray(params));
    console.log("2) " + params[0] + " " + params[1] + " " + params[2]);
}
tuplaParam2.apply(void 0, tupla);
//# sourceMappingURL=ecmascript.js.map