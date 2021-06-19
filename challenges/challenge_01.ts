// Desafio

/*
Criar um objeto funcionario com:
- Array de strings com os nomes dos supervisores
- Função de bater ponto que receba a hora (numerico) e retorna uma string
    -> Ponto normal (<=8)
    -> Fora do normal(>8)

*/

let funcionario: {
    supervisores: Array<string>,
    baterPonto: (hrs: number) => string
} = {
    supervisores: ['João', 'Maria', 'José'],
    baterPonto(hrs: number): string {
        if(hrs <=8) {
            return 'Tudo certo. Ponto normal'
        } else {
            return 'Ponto fora do normal'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(5))


// Array<string> também poderia ser string[]