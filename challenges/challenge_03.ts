//1 - Abaixo temos um código em JavaScript. "Traduza-o" para TypeScript!
var dobro = function(valor) {
    return valor * 2
}
console.log(dobro(10))
// res:
const dobroRefac = (valor: number): number => valor * 2
console.log(dobro(12))

//2 -  Verifique se há espaço para melhorias nesse trecho de código!
var dizerOla = function (nome) {
    if (nome === undefined) { nome = "Pessoa" }
    console.log("Ola, " + nome)
    }
    dizerOla()
    dizerOla("Anna")
//res:
const dizerOlaRefac = function (nome: string = 'Pessoa'): void {
    console.log(`Olá, ${nome}`)
    }
    dizerOlaRefac()
    dizerOlaRefac("Mariana")

//3 - Dado esse array, imprima o menor valor!
const nums = [-3, 33, 38, 5]
console.log('???')

//res:
const numsRefac: number[] = [-3, 33, 38, 5]
console.log('o menor valor é:', Math.min(...numsRefac))

//4 - Adicione os elementos de nums em array !
var array = [55, 20]
console.log(array)
//res:
array.push(...numsRefac)
console.log(array)

//5 - Simplifique os trechos de código abaixo utilizando o operador Destructuring!
//a)
const notas = [8.5, 6.3, 9.4]
const notas1 = notas[0]
const notas2 = notas[1]
const notas3 = notas[2]
console.log(notas1, notas2, notas3)
//res:
const notasRefac = [8.5, 6.3, 9.4]
const [notasRefac1, notasRefac2, notasRefac3] = notas
console.log(notasRefac1, notasRefac2, notasRefac3)

//b)
const cientista = {primeiroNome: "Will", experiencia: 12}
const primeiroNome = cientista.primeiroNome
const experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)

//res:
const cientistaRefac = {primeiroNomeRefac: "Will", experienciaRefac: 12}
const { primeiroNomeRefac, experienciaRefac } = cientistaRefac
console.log(primeiroNomeRefac, experienciaRefac)