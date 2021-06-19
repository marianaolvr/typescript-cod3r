let canal: string = 'Gaveta';
let inscritos: number = 2585;

canal = inscritos;
console.log(`canal = ${canal}`);

// esse arquivo não será compilado
// com a propriedade "noEmitOnError": true no tsconfig


//"noImplicitAny": false,
function soma(a, b) {
    return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

//strictNullChecks
function saudar(isManha: boolean) {
    let saudacao: string;
    if(isManha){
        saudacao = 'Bom dia'
    }
    return saudacao 
    //deixou de checar eventuais nulos que a funcao pode gerar 
    //antes reclamava que saudacao foi chamada antes de ser definida
}