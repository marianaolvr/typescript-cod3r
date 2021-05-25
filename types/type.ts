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
    Green = 100, //1
    Blue = 2 //2
}

let first: Color = Color.Gray
console.log(first)

let myColor: Color = Color.Blue
console.log(myColor)

let otherColor: Color = Color.Green
console.log(otherColor)
