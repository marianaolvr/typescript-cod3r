"use strict";
//string
var nome = 'Joaquina';
console.log(nome);
// ts os tipos são inferidos. Código abaixo ganha um alerta, porque nome é string!
// nome = 28;
//numbers
var idade = 28;
var novaIdade = 28.5;
console.log(idade);
console.log(novaIdade);
//boolean
var hobbies = false;
console.log(hobbies);
// tipos explícitos
var myAge;
// variável tratada automaticamente como tipo N
myAge = 34;
console.log(typeof myAge);
myAge = 'Eu tenho 34 anos';
console.log(typeof myAge);
// Arrays
var kitchen = ["cozinhar", "lavar a louça"];
console.log(kitchen[1]);
console.log(typeof kitchen);
kitchen = 'Teste';
var bedroom = ["cozinhar", "lavar a louça", 58];
console.log(kitchen[1]);
console.log(typeof kitchen);
var office = [110, 555];
console.log(kitchen[1]);
console.log(typeof kitchen);
//tuplas - definir tipos diferentes dentro de uma string
var endereco = ['Avenida Principal', 99];
console.log(typeof endereco);
console.log('mudando o teste');
// enums (não existe em js)
// enumerações - estrutura com valores pré-definidos
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var first = Color.Gray;
console.log(first);
var myColor = Color.Blue;
console.log(myColor);
var otherColor = Color.Green;
console.log(otherColor);
