//string
let nome: string = 'Joaquina'
console.log(nome)

// ts os tipos são inferidos. Código abaixo ganha um alerta, porque nome é string!
// nome = 28;

//numbers
let idade: number = 28
let novaIdade = 28.5
console.log(idade)
console.log(novaIdade)

//boolean
let hobbies: boolean = false;
console.log(hobbies)

// tipos explícitos
let myAge
// variável tratada automaticamente como tipo N
myAge = 34;
console.log(typeof myAge)

myAge = 'Eu tenho 34 anos'
console.log(typeof myAge)

// Arrays
let kitchen = ["cozinhar", "lavar a louça"]
console.log(kitchen[1])
console.log(typeof kitchen)
kitchen = 'Teste'

let bedroom: any[] = ["cozinhar", "lavar a louça", 58]
console.log(kitchen[1])
console.log(typeof kitchen)

let office: number[] = [110, 555]
console.log(kitchen[1])
console.log(typeof kitchen)

//tuplas - definir tipos diferentes dentro de uma string
let endereco: [string, number] = ['Avenida Principal', 99]
console.log(typeof endereco)
console.log('mudando o teste')


// enums (não existe em js)
// enumerações - estrutura com valores pré-definidos
enum Color {
    Gray, //0
    Green = 235, //1
    Blue = 2 //2
}

let first: Color = Color.Gray
console.log(first)

let myColor: Color = Color.Blue
console.log(myColor)

let otherColor: Color = Color.Green
console.log(otherColor)

// any - voltar para o mesmo cenário do javascript
// ajuda a substituir e ir tipando o código aos poucos

let carro: any = "Corsa";
console.log(carro);

carro = {
    marca: "não sei",
    ano: 2019
}


// funções e seus parâmtros (com ou sem retorno)
function returnMyName(): string {
    return nome;
}
console.log(returnMyName());

// função que não retorna nada - void
function digaOi(): void {
    console.log('ooii')
}
digaOi();

//tipos nos parâmetros

function multiplicar (numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(6, 2));

// funções como tipos (tipo função - variavel que vai receber uma função)
// tipo função (que é diferente de você ter uma função e atribuir os tipos tanto aos parâmetros quanto ao retorno)

let calculo: (numeroA: number, numberoB: number) => number
//calculo = digaOi;
//calculo();

calculo = multiplicar;
console.log(calculo(5, 6));

// objetos (a ordem dos tipos dos atributos não importa)

let usuario = {
    nome: 'maria',
    idade: 28,
    profissao: 'jornalista',
    casado: false
}

console.log(usuario);

usuario = {}

usuario = {
    name: 'Mariana'
}

//com tipos
let cliente: { nome: string, idade: number } = {
    nome: 'Maria',
    idade: 25 
}
console.log(cliente)


// tipor personalizados (alias)
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let checkHours: Funcionario = {
    supervisores: ['maria', 'joao'],
    baterPonto(horas: number): string {
        if(horas <= 8) {
            return 'ok'
        } else {
            return 'nok'
        }
    }
}


// Union Types - uma tipo | ou outro
let nota: number | string = 10
console.log('minha nota é', nota)

nota = '10'

// chacagem de valor manualmente
let valor = 10

if (typeof valor === 'number'){
    console.log('valor é um number')
} else {
    console.log(typeof valor)
}

// tipo nerver - função vai terminar com erro ou vai ficar em looping (não é a ausencia de retorno, isso é void)
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'sabao',
    preco: 5,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço inválido')
        }
    }
}

produto.validarProduto();


//valores opcionais com tipo null
let texto: null | string = 'olá';
texto = null

let hora = 18
hora = null

// null também é um tipo. não é muito últil para ser usado sozinho.

let podeSerNulo = null
podeSerNulo = 12
podeSerNulo = 'abc'
//acima podeSerNulo é implicitamente do tipo any

let nullable: null = null
nullable = 12
//acima, com o tipo nulo explicito, não é any