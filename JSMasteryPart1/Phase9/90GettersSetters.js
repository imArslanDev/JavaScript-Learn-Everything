// ==========================================
// Topic: Getters & Setters in JavaScript Classes
// ==========================================

class Person {
    constructor(firstName, lastName, age, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.designation = designation;
    }

    // --- GETTER METHOD ---
    // 'get' keyword ki wajah se hum is method ko as a Property (variable ki tarah) 
    // access kar sakte hain, baghair () lagaye.
    get aboutPerson() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and works as a ${this.designation}`;   
    }
    // --- SETTER METHOD ---
    // 'set' keyword ki wajah se hum function call kiye baghair,
    // '=' (assignment operator) ke zariye direct value pass kar sakte hain.
    set setName(fullName) {
        // .split(" ") space ki base par string ko array mein tor deta hai 
        const [firstName, lastName] = fullName.split(" "); 
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// Object Creation
const person1 = new Person("HM", "Arslan", 24, "Software Engineer");
const person2 = new Person("Zoha", "Ali", 20, "Teacher")


// ==========================================
// 1. GETTER KI EXAMPLE
// ==========================================
// Humne 'aboutPerson()' mein brackets () nahi lagaye, 
// kyunki ye getter hai aur as a property treat ho raha hai.
console.log(person1.aboutPerson); 
// Output: HM Arslan is 24 years old and works as a Software Engineer

console.log(person2.aboutPerson)
// Output: Zoha Ali is 20 years old and works as a Teacher

// ==========================================
// 2. SETTER KI EXAMPLE
// ==========================================
// Yahan humne function ki tarah (person1.setName("...")) nahi likha,
// balki '=' lagakar direct value assign ki hai. 
// Ye value seedha 'setName' setter ke parameter (fullName) mein chali jayegi.
person1.setName = "Muhammad Arslan";

// Check karte hain ke changes apply hue ya nahi:
console.log(person1.firstName); // Output: Muhammad
console.log(person1.lastName);  // Output: Arslan

// Ab agar dobara getter call karein, to updated naam show hoga:
console.log(person1.aboutPerson);
// Output: Muhammad Arslan is 24 years old and works as a Software Engineer

person2.setName = "Zoya Nasir"
console.log(person2.aboutPerson)