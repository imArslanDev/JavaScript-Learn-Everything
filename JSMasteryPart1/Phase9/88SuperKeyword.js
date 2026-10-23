// Super
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


// Ab Agr hume Dog class ka apna constructor function bna an ha to hum super() ka use kra ga so that jo parent class ka constructor ha wo hume dubara sa this.name = name and this.age = age krne ki zarorat nhi ha wo super() khud manage kr lagi jaise name, age ko kia
class Dog extends Animal{
    constructor(name, age, speed) {
        super(name, age)
        this.speed = speed
    }

    run() {
        return `${this.name} is running ${this.speed} km/h`
    }
}

let tommy = new Dog('tommy', 2, 45)
// Statements:
// Mane Dog class ka instance bnaya ha tommy
// Mange Dog class ka Object bnaya ha tommay
// Both are same Object bolo ya Instance
console.log(tommy)
console.log(tommy.run()) // Comming From Base Class Constructor 
console.log(tommy.eat()) // Comming From Parent Class Constructor