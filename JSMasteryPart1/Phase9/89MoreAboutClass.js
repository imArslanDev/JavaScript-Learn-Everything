// ==========================================
// Topic: Method Overriding (More About Classes)
// ==========================================

// 1. Parent Class (Superclass)
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        return `${this.name} is eating (from Animal class)`;
    }

    isCute() {
        return true;
    }
}

// 2. Child Class (Subclass)
class Dog extends Animal {
    constructor(name, age, speed) {
        // super() parent class se name aur age manage kar raha hai
        super(name, age); 
        this.speed = speed;
    }

    run() {
        return `${this.name} is running at ${this.speed} km/h (from Dog class)`;
    }

    // --- METHOD OVERRIDING ---
    // Agar hum chahte hain ke Dog ka 'eat' karne ka tareeqa Animal se mukhtalif ho,
    // to hum Dog class ke andar bhi 'eat()' method bana sakte hain.
    eat() {
        return `Modified Eat: ${this.name} is eating bones! (from Dog class)`;
    }
}

// Object / Instance Creation
let tommy = new Dog('Tommy', 2, 45);

console.log(tommy);
console.log(tommy.run()); // Yeh Dog class ke andar se aa raha hai.

// Method Lookup Test:
console.log(tommy.eat()); 
// Output: Modified Eat: Tommy is eating bones! (from Dog class)
// 
// Wajah: JavaScript sabse pehle current class (Dog) ke andar 'eat()' method ko talash karti hai.
// Kyunki wo Dog class mein mil gaya, isliye JavaScript ne parent class (Animal) tak jane ki zahmat hi nahi ki!

// Animal Class Use krna pr
const animal2 = new Animal("Cat", 2)
console.log(animal2.eat())