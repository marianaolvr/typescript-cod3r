"use strict";
// Desafio produto
// Atributos: nome, preco e desconto
// Criar construtor
// Obs 1: Desconto é opcional (valor padrão 0)
// Obs 2: Criar dois produtos: passando dois e três params
class Product {
    constructor(name, price, descount = 0) {
        this.name = name;
        this.price = price;
        this.descount = descount;
    }
}
const Product1 = new Product('Bolsa', 25.99);
Product1.descount = 0.20;
console.log('Product 1', Product1);
const Product2 = new Product('Colar', 50, 0.15);
console.log('Product 2', Product2);
const Product3 = new Product('Colar', 50);
console.log('Product 2', Product3);
// Criar método precoComDesconto
// Quais são os parâmetros e retorno?
// Alterar método resumo para mostrar o preço com desconto
class ProductWithMethodDescount {
    constructor(name, price, descount = 0) {
        this.name = name;
        this.price = price;
        this.descount = descount;
    }
    // public priceWithDescount(): number {
    //   const discountPercentage = this.descount * 100
    //   const descountValue = discountPercentage * this.price / 100
    //   const priceWithDescount = this.price - descountValue
    //   return priceWithDescount
    // }
    // public resume(priceWithDescount: number): string {
    //   return `${this.name} custa R$${this.price} sem desconto ou
    //   R$${priceWithDescount} com desconto de ${this.descount * 100}%`
    // }
    // teacher response:
    priceWithDescount() {
        return this.price * (1 - this.descount);
    }
    resume() {
        return `${this.name} custa R$${this.price} sem desconto ou
    R$${this.priceWithDescount()} com desconto de ${this.descount * 100}%`;
    }
}
// const ProductWithMethodDescount1 = new ProductWithMethodDescount('Colar', 50, 0.15)
// const priceWithDescount = ProductWithMethodDescount1.priceWithDescount()
// console.log('Resume with Descount', ProductWithMethodDescount1.resume(priceWithDescount))
// teacher response console.log:
const ProductWithMethodDescount1 = new ProductWithMethodDescount('Colar', 50, 0.15);
console.log('resposta professor', ProductWithMethodDescount1.resume());
//# sourceMappingURL=challenge_04.js.map