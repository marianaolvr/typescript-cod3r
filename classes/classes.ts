class DateComplete {
// public by default
day: number
public month: number
year: number

constructor( day: number, month: number, year: number) {
this.day = day
this.month = month
this.year = year
}
}

const birthday = new DateComplete(19, 4, 1993)
birthday.day = 8
console.log('new day', birthday.day);
console.log('complete date:', birthday);

// with full default/pattern parameter
class DateComplete2 {
day: number
month: number
year: number

constructor(day: number = 25, month: number = 4, year: number = 1993) {
this.day = day
this.month = month
this.year = year
}
}

const birthdayPattern = new DateComplete2 //posso omitir os "()"
console.log('date with default data', birthdayPattern);

const birthday2 = new DateComplete2
birthday2.year = 2020
console.log('changing year', birthday2)

// simplified exemple
class DateSimplified {
  constructor(
    public day: number = 1,
    public month: number = 1,
    public year: number = 1970) {

  }
}

const birthdaySimplified = new DateSimplified
birthdaySimplified.day = 8
console.log('new birthday', birthdaySimplified.day);
console.log('complete birthday:', birthdaySimplified);

const marriageSimplified = new DateSimplified(21, 5, 2019)
console.log('complete marriage:', marriageSimplified);

class ProductWithMethodResume {
  constructor(
    public name: string,
    public price: number,
    public descount: number = 0) {
  }
  //method
  public resume(): string {
    return `${this.name} custa R$${this.price} (${this.descount * 100}% off)`
  }
}

const ProductWithMethodResume1 = new ProductWithMethodResume('Bolsa', 25.99)
ProductWithMethodResume1.descount = 0.20
console.log('resume 1', ProductWithMethodResume1.resume())

const ProductWithMethodResume2 = new ProductWithMethodResume('Colar', 50, 0.15)
console.log('resume 2', ProductWithMethodResume2.resume())

// modificadores - modifiers
class Car { 
  private currentSpeed: number = 0
    constructor(public brand: string, public model: string, private maxSpeed: number = 200){
  }

  protected changeSpeed(delta: number): number {
    const newSpeed = this.currentSpeed + delta
    const validSpeed = newSpeed >= 0 && newSpeed <= this.maxSpeed

    if (validSpeed) {
      this.currentSpeed = newSpeed
    } else {
      this.currentSpeed = delta > 0 ? this.maxSpeed : 0
    }
    return this.currentSpeed
  }

  public speedUp(): number {
    return this.changeSpeed(5)
  }

  public brake(): number {
    return this.changeSpeed(-5)
  }
}

const myCar = new Car('Ford', 'Ka', 185);
console.log('firt speedup', myCar.speedUp())
console.log('second speedup', myCar.speedUp())

// max speed
Array(50).fill(0).forEach(() => myCar.speedUp())
console.log('max speed', myCar.speedUp())

//break
console.log(myCar.brake());
Array(30).fill(0).forEach(() => myCar.brake())
console.log('max speed after 20', myCar.brake())

// simulate "errors" from JavaScript that dont have the modifiers (method is private!)
myCar.currentSpeed = 300;
console.log('atual ->' + myCar.currentSpeed)

// herança
class Ferrari extends Car {
  constructor(model: string, maxSpeed: number) {
    super('Ferrari', model, maxSpeed)
    // códigos de inicialização da classe aqui
  }
  public speedUp(): number {
      return this.changeSpeed(20)
  }

  public brake(): number {
      return this.changeSpeed(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.brand} ${f40.model}` )
console.log(f40.speedUp())
console.log(f40.brake())

// Getters & Setters
class Person {
  private _age: number = 0

  get age(): number {
    return this._age
  }

  set age(value: number) {
    if(value >= 0 && value <= 120) {
      this._age = value
    }
  }
}

const guy1 = new Person
guy1.age = 100
console.log(guy1.age)


//Membros estáticos
// quando um valor é estático está associado à Classe e não à instância.
// ou seja, terei apenas uma única cópia daquele valor para uma determinada classe.

// sem static

class Mathematic {
  static PI: number = 3.1416

  static circArea(radius: number): number {
    return this.PI * radius * radius
  }
}

// const m1 = new Mathematic()
// m1.PI = 4.2
// console.log('m1', m1.circArea(4))

// const m2 = new Mathematic()
// console.log('m2', m2.circArea(4))

// sem o static:
// console.log(new Mathematic().circArea(4))

//com o static:
console.log(Mathematic.circArea(4))