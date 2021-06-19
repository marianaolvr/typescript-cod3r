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
    Color[Color["Green"] = 235] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var first = Color.Gray;
console.log(first);
var myColor = Color.Blue;
console.log(myColor);
var otherColor = Color.Green;
console.log(otherColor);
// any - voltar para o mesmo cenário do javascript
// ajuda a substituir e ir tipando o código aos poucos
var carro = "Corsa";
console.log(carro);
carro = {
    marca: "não sei",
    ano: 2019
};
// funções e seus parâmtros (com ou sem retorno)
function returnMyName() {
    return nome;
}
console.log(returnMyName());
// função que não retorna nada - void
function digaOi() {
    console.log('ooii');
}
digaOi();
//tipos nos parâmetros
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(6, 2));
// funções como tipos (tipo função - variavel que vai receber uma função)
// tipo função (que é diferente de você ter uma função e atribuir os tipos tanto aos parâmetros quanto ao retorno)
var calculo;
//calculo = digaOi;
//calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos (a ordem dos tipos dos atributos não importa)
var usuario = {
    nome: 'maria',
    idade: 28,
    profissao: 'jornalista',
    casado: false
};
console.log(usuario);
usuario = {};
usuario = {
    name: 'Mariana'
};
//com tipos
var cliente = {
    nome: 'Maria',
    idade: 25
};
console.log(cliente);
var checkHours = {
    supervisores: ['maria', 'joao'],
    baterPonto: function (horas) {
        if (horas <= 8) {
            return 'ok';
        }
        else {
            return 'nok';
        }
    }
};
// Union Types - uma tipo | ou outro
var nota = 10;
console.log('minha nota é', nota);
nota = '10';
// chacagem de valor manualmente
var valor = 10;
if (typeof valor === 'number') {
    console.log('valor é um number');
}
else {
    console.log(typeof valor);
}
// tipo nerver - função vai terminar com erro ou vai ficar em looping (não é a ausencia de retorno, isso é void)
function falha(msg) {
    throw new Error(msg);
}
var produto = {
    nome: 'sabao',
    preco: 5,
    validarProduto: function () {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validarProduto();
//valores opcionais com tipo null
var texto = 'olá';
texto = null;
var hora = 18;
hora = null;
// null também é um tipo. não é muito últil para ser usado sozinho.
var podeSerNulo = null;
podeSerNulo = 12;
podeSerNulo = 'abc';
//acima podeSerNulo é implicitamente do tipo any
var nullable = null;
nullable = 12;
//acima, com o tipo nulo explicito, não é any
