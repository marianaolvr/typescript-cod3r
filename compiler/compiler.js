"use strict";
var canal = 'Gaveta';
var inscritos = 2585;
canal = inscritos;
console.log("canal = " + canal);
// esse arquivo não será compilado
// com a propriedade "noEmitOnError": true no tsconfig
//"noImplicitAny": false,
function soma(a, b) {
    return a + b;
}
var qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
//strictNullChecks
function saudar(isManha) {
    var saudacao;
    if (isManha) {
        saudacao = 'Bom dia';
    }
    return saudacao;
    //deixou de checar eventuais nulos que a funcao pode gerar 
    //antes reclamava que saudacao foi chamada antes de ser definida
}
//# sourceMappingURL=compiler.js.map