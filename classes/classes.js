"use strict";
class DateComplete {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthday = new DateComplete(19, 4, 1993);
birthday.day = 8;
console.log('new day', birthday.day);
console.log('complete date:', birthday);
// with full default/pattern parameter
class DateComplete2 {
    constructor(day = 25, month = 4, year = 1993) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthdayPattern = new DateComplete2; //posso omitir os "()"
console.log('date with default data', birthdayPattern);
const birthday2 = new DateComplete2;
birthday2.year = 2020;
console.log('changing year', birthday2);
// simplified exemple
class DateSimplified {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthdaySimplified = new DateSimplified;
birthdaySimplified.day = 8;
console.log('new birthday', birthdaySimplified.day);
console.log('complete birthday:', birthdaySimplified);
const marriageSimplified = new DateSimplified(21, 5, 2019);
console.log('complete marriage:', marriageSimplified);
class ProductWithMethodResume {
    constructor(name, price, descount = 0) {
        this.name = name;
        this.price = price;
        this.descount = descount;
    }
    //method
    resume() {
        return `${this.name} custa R$${this.price} (${this.descount * 100}% off)`;
    }
}
const ProductWithMethodResume1 = new ProductWithMethodResume('Bolsa', 25.99);
ProductWithMethodResume1.descount = 0.20;
console.log('resume 1', ProductWithMethodResume1.resume());
const ProductWithMethodResume2 = new ProductWithMethodResume('Colar', 50, 0.15);
console.log('resume 2', ProductWithMethodResume2.resume());
// modificadores - modifiers
class Car {
    constructor(brand, model, maxSpeed = 200) {
        this.brand = brand;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.currentSpeed = 0;
    }
    changeSpeed(delta) {
        const newSpeed = this.currentSpeed + delta;
        const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed;
        if (validSpeed) {
            this.currentSpeed = newSpeed;
        }
        else {
            this.currentSpeed = delta > 0 ? this.maxSpeed : 0;
        }
        return this.currentSpeed;
    }
    speedUp() {
        return this.changeSpeed(5);
    }
    brake() {
        return this.changeSpeed(-5);
    }
}
const myCar = new Car('Ford', 'Ka', 185);
console.log('firt speedup', myCar.speedUp());
console.log('second speedup', myCar.speedUp());
// max speed
Array(50).fill(0).forEach(() => myCar.speedUp());
console.log('max speed', myCar.speedUp());
//break
console.log(myCar.brake());
Array(30).fill(0).forEach(() => myCar.brake());
console.log('max speed after 20', myCar.brake());
// simulate "errors" from JavaScript that dont have the modifiers (method is private!)
myCar.currentSpeed = 300;
console.log('atual ->' + myCar.currentSpeed);
// heran??a
class Ferrari extends Car {
    constructor(model, maxSpeed) {
        super('Ferrari', model, maxSpeed);
        // c??digos de inicializa????o da classe aqui
    }
    speedUp() {
        return this.changeSpeed(20);
    }
    brake() {
        return this.changeSpeed(-15);
    }
}
const f40 = new Ferrari('F40', 324);
console.log(`${f40.brand} ${f40.model}`);
console.log(f40.speedUp());
console.log(f40.brake());
// Getters & Setters
class Person {
    constructor() {
        this._age = 0;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value >= 0 && value <= 120) {
            this._age = value;
        }
    }
}
const guy1 = new Person;
guy1.age = 100;
console.log(guy1.age);
//Membros est??ticos
// quando um valor ?? est??tico est?? associado ?? Classe e n??o ?? inst??ncia.
// ou seja, terei apenas uma ??nica c??pia daquele valor para uma determinada classe.
// sem static
class Mathematic {
    static circArea(radius) {
        return this.PI * radius * radius;
    }
}
Mathematic.PI = 3.1416;
// const m1 = new Mathematic()
// m1.PI = 4.2
// console.log('m1', m1.circArea(4))
// const m2 = new Mathematic()
// console.log('m2', m2.circArea(4))
// sem o static:
// console.log(new Mathematic().circArea(4))
//com o static:
console.log(Mathematic.circArea(4));
//# sourceMappingURL=classes.js.map