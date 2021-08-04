//let e const
console.log(seraQuePode)
var seraQuePode = '?' // hoisting
let SeraQuePode = '?' // não vai ter hoisting, mas vai continuar como undefined


// Arrow function
function somar(n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2));

const subtrair = (n1: number, n2: number): number => n1 - n2;
console.log(subtrair(2,3));

const saudacao = () => console.log('olá');
saudacao();

// não dá pra usar um único parametros sem parenteses por causa da tipagem
const falarCom = pessoa => console.log('olá' + pessoa);
falarCom('João');

const falarComOutraPessoa = (pessoa: string) => console.log('olá' + pessoa);
falarComOutraPessoa('João');

// this
function normalComThis() {
    console.log(this)
}
normalComThis();

const normalComThisEspecial = normalComThis.bind('ana')
normalComThisEspecial()

//arrow com this
//quem é o this na linha anterior do contexto no qual a função foi definida????
console.log(this)
const arrowComThis = () => console.log(this)
arrowComThis();

const arrowComThisEspecial = arrowComThis
    .bind('ana');
arrowComThisEspecial()

// função com patametros padrão
function contagemRegressive(inicio: number = 3): void {
    console.log(inicio)
    while(inicio > 0) {
        inicio--
        console.log(inicio)
    }
    console.log('fim')
}

contagemRegressive()
contagemRegressive(10)

function contagemProgressiva(inicio: number = 5,
    fim: number = inicio - 5): void {
    console.log(inicio)
    while(inicio < 0) {
        inicio--
        console.log(inicio)
    }
    console.log('fim')
}

contagemProgressiva()
contagemProgressiva(10)

// Rest & Spread
const numbers = [1, 2, 3, 4, 55, -5]
console.log(Math.max(numbers))
// acima errado porque math espera um elemento não array
console.log(Math.max(...numbers))

const turmaA: string[] = ['maria', 'joao', 'fernanda']
const turmaB: string[] = ['mariana', ...turmaA, 'Miguel']
console.log(turmaA);
console.log(turmaB);

function retornarArray(arg1: number, arg2: number): number[] {
    return [arg1, arg2]
}
// abaixo ts reclama, mas js deixa passar mas retornar o array apenas com dois argumentos
const numeros = retornarArray(1, 2, 3, 4)
console.log(numeros)

//abaixo, ele pega qualquer quantidade de argumentos e coloca dentro de uma array
function retornarArrayDois(...args: number[]): number[] {
    return args
}
const numeros2 = retornarArrayDois(25, 22, 55, 36, 85)
console.log(numeros2)
console.log(retornarArrayDois(...numbers));

// multiplos parametros com spread e rest
function retornarArrayTres(a: number, ...args: number[]): number[] {
    console.log(a)
    return args
}
// ele vai retirar o primeiro número do meu array, dar um console log, e depois retornar a array com os outros números
const numeros3 = retornarArrayTres(22, 66, 88, 77)
console.log(numeros3);

// REST & SPREAD (TUPLA)

const tupla: [number, string, boolean] = [1, 'abc', false]

function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]){
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)

// DESTRUCTURING - pegar dados dentro de uma estrutura e expor de uma forma mais fácil (array)
// DESTRUCTURING ARRAY
const caracteristicas = ['motos zetec 1.8', 2020]
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// DESTRUCTURING OBJECT

const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristica: {
        w: 'importado',
    }
}

const nomeItem = item.nome
const precoItem = item.preco
console.log(nomeItem)
console.log(precoItem)

//nome abaixo está usando um label, alias, chamando nome de n
const { nome: n, preco, caracteristica: { w } } = item
console.log(n)
console.log(preco)



// template string
const usuarioID: string = 'fulanotxt'
const notificacoes: number = 9

const boasVindas = 'Bem-vindo ' + usuarioID + ' Notificacoes: ' + notificacoes
console.log(boasVindas);

const BoasVindasComTemplateString = 
    `Bem-vindo ${usuarioID} Notificaçoes: ${notificacoes}`
console.log(BoasVindasComTemplateString)

const BoasVindasComTemplateStringETernario = 
`Bem-vindo ${usuarioID}, Notificaçoes: ${(notificacoes) > 9 ? '+ de 9 notificacoes' : notificacoes }`
console.log(BoasVindasComTemplateStringETernario)

console.log(`${1 + 1 * 30}`)
console.log(`${(1 + 1) * 30}`)
console.log(`Motor: ${caracteristicas[0]}`)

// Promises

// Como trabalhamos com assincronismo em JS?
// Normalmente com funções callback

function esperar3s() {
    setTimeout(() => {
        console.log('3 segundos depois...')
    }, 3000)
}
esperar3s()

function esperar3sDois(callback: (dado: string) => void) {
    setTimeout(() => {
        callback('3 segundos depois...')
    }, 3000)
}
esperar3sDois(function(resultado: string) {
    console.log(resultado)
})

// convertendo para PROMISE
function esperar3sPromise() {
    return new Promise((resolve: any) => {
        setTimeout(() => {
            resolve('3 segundos depois promise...')
        }, 3000)
    })
}
esperar3sPromise().then(dado => console.log(dado))

// com a promise consigo encadear mais tranquilamente as chamadas
// exemplo API StarWars

fetch('https://swapi.dev/api/people/1/')
    .then(response => response.json())
    .then(character => character.films)
    .then(films => fetch(films[0]))
    .then(responseFilm => responseFilm.json())
    .then(film => console.log(film.title))
    .catch(response => console.log(response))
// ações assíncrinas acima. se eu fosse fazer com callback teria um código muito maior
// cair no catch é o reject da Promise
