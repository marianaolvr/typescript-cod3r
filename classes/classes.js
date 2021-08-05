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
//# sourceMappingURL=classes.js.map