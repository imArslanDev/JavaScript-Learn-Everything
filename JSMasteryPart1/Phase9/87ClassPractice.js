// Class Practice
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    eat() {
        return `${this.name} is eating`
    }

    isCute() {
        return true
    }
}

const kitty = new Animal("Kitty", 2)
console.log(kitty.isCute())

// Ab Mujhe Same Properties ko use kr ke 1 new Class banai ha to uske liyue mujhe is trha code repeat krne ki zarorat nhi.

// class Cat {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }

//     eat() {
//         return `${this.name} is eating`
//     }

//     isCute() {
//         return true
//     }
// }

// const mano = new Cat("mano", 4)
// console.log(mano.isCute())


// To Ma Use Karo Inheritance ka or Animal Class sa wo sab jo mujhe Dog class ma chaiye borrow kr lo ga.
// Using extands keyword ab mere pass Animal class ka sare methods and constroctor object available hain
// Yaha Correct term uase hogi Hum na Animal class ki sub class Dog bna li Parent class ko extend kr ke.
// Yah pr bhi same apply hota ha agr Javascript ko koi method ya property Dog class ma nhi mile gi to wo Parent class Animal ma ja kr check krega.
class Dog extends Animal{}

let tommy = new Dog('tommy', 2)
console.log(tommy)

class CarSpecs {
   constructor(make, model, varient) {
  this.make = make
  this.model = model
  this.varient = varient
}

carInfo() {
  return `You have ${this.make}, ${this.model} Model, ${this.varient} Varient`
}
}

const car1 = new CarSpecs("Honda Civic", "2025", "1.8 Oriel Prosmatic")
const car2 = new CarSpecs("Toyota Altis", "2022", "1.6 VTS")
console.log(car1.carInfo())
console.log(car2.carInfo())

class Honda extends CarSpecs {
    constructor (color, trnasmitionType, make, model, varient) {
        super(make, model, varient)
        this.color = color
        this.trnasmitionType = trnasmitionType
    }

    about() {
         return `I have ${this.make}, ${this.model} Model in ${this.color} Color, ${this.transmissionType} ${this.varient} Varient`;
    }
}

const HondaCar1 = new Honda("Red", "Automatic", "Honda Civic", "2026", "Oriel Prosmatic 1.8")
console.log(HondaCar1.about())


class Toyota extends CarSpecs {
    constructor (looksScore, make, model, varient) {
        super(make, model, varient)
        this.looksScore = looksScore
    }

    CarLook() {
        return `${this.make} ${this.model} get ${this.looksScore} Score out of 10 in Looks`
    }
}

const toyotaCar1 = new Toyota(8, "Toyota Corrola Grande", 2024, "1.6 Liter Petrol")
console.log(toyotaCar1.CarLook())
console.log(toyotaCar1.carInfo())