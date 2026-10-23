// ==========================================
// Topic: Static Methods & Properties in Classes
// ==========================================

class Person {
    constructor(firstName, lastName, age, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.designation = designation;
    }

    // --- INSTANCE METHODS (Object ke sath linked hain) ---
    get aboutPerson() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old and works as a ${this.designation}`;
    }

    haveHabbits() {
        return true;
    }

    isYoung() {
        return this.age <= 50 ? true : false;
    }


    // ==========================================
    // --- STATIC METHODS & PROPERTIES ---
    // ==========================================
    // Yeh methods aur properties direct Class se attach hoti hain, 
    // kisi individual object (jaise person1) se nahi.

    // Static Method
    static callMethod() {
        return "This Method is Directly Usable with Class (Not with objects)";
    } 

    // Static Property
    static desc = "This Class Person is used to Store Person Info";

    static 
}

// ==========================================
// USAGE & TESTING
// ==========================================

const person1 = new Person("HM", "Arslan", 24, "Software Engineer");

// 1. Instance methods ko object ke zariye call kiya jata hai:
console.log(person1.isYoung()); // Output: true
// console.log(person1.aboutPerson); // Output: HM Arslan is 24 years old...


// 2. Static methods ko SEEDHA CLASS KE NAAM se call kiya jata hai:
console.log(Person.callMethod()); 
// Output: This Method is Directly Usable with Class (Not with objects)

// 3. Static properties ko bhi seedha Class ke naam se access kiya jata hai:
console.log(Person.desc); 
// Output: This Class Person is used to Store Person Info


// ⚠️ ERROR CASE:
// Agar aap static method ko object ke through call karenge, toh error aayega:
// console.log(person1.callMethod()); 
// Uncaught TypeError: person1.callMethod is not a function

/*
Interview / Concept Point:
Kab use karte hain static methods?
Jab aapko koi aisa helper function banana ho jo poori class ke liye common ho aur jisko chalane ke liye kisi specific object ki properties (jaise firstName ya age) ki zaroorat na ho, tab hum static keyword ka use karte hain (misal ke taur par: utility functions, math helpers, ya database connection functions).
*/

class Calculator {
    static add (a, b) {
        return a + b
    }
}

// Object banane ki zaroorat nahi, seedha class se call hoga:
console.log(Calculator.add(20, 80))

// 3 Real World Usecases:

// 1. Form Validation Utility
// Jab aapko user input check karna ho (jaise email theek hai ya nahi), toh iske liye object banane ki zaroorat nahi hoti. Seedha class use hoti hai:
class Validator {
    static isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }
}

// Call Directly through class 
console.log(Validator.isValidEmail("imArslan@gmail.com"))

// 2. Currency Converter (Financial Calculations)
// Jab aapko kisi aik currency ko doosri mein convert karna ho, toh yeh ek pure utility function hota hai:

class CurrencyConverter {
    static usdToPkr(usd, rate=276.64){
        return `PKR: ${usd * rate}`
    }
}
console.log(CurrencyConverter.usdToPkr(100))

// 3. API Response Formatter
// Backend ya frontend development mein jab API ka standard response bhejna ho:
class ResponseFormatter {
    static success(data) {
        return {
            status: 200,
            success: true,
            payload: data
        };
    }
}

// Direct Class se call:
console.log(ResponseFormatter.success({ name: "Arslan", role: "Developer" }));
// Output: { status: 200, success: true, payload: { name: 'Arslan', role: 'Developer' } }