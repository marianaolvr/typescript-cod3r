//1
var dobro = function(valor: number) {
    return valor * 2
    }
console.log(dobro(10))

//2
var dizerOla = function(nome: string) {
    nome === undefined ? 'pessoa' : nome
    console.log(`Ola, ${nome}`)
    }
    dizerOla()
    dizerOla("Anna")
