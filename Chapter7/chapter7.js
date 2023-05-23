// class Dog {
//     constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//     }
//    }

//    let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");

//    console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight,
// "kg.");

// class Person 
// {
//     constructor (firstName, lastName)
//     {
//         this.firstName =firstName;
//         this.lastName = lastName;
//     }
// }

// let p = new Person ("Maaike,", "van Putten")
// console.log ("Hi", p.firstName);

// let p2 = new Person ("Sechab", "Madyibi")
// console.log ("Hi", p2.firstName + p2.lastName);

// class Person {
//     #firstname;
//     #lastname;
//     constructor(firstname, lastname) {
//         if (firstname.startsWith("M")) 
//         {
//             this.#firstname = firstname;

//         } else {
//             this.#firstname = "M" + firstname;
//         }
//         this.#lastname = lastname;
//     }
//     get firstname() {
//         return this.#firstname;
//     }

//     set firstname(firstname) {
//         if (firstname.startsWith("M")) 
//         {
//             this.#firstname = firstname;

//         } else {
//             this.#firstname = "M" + firstname;
//         }
//     }

//     get lastname() {
//         return this.#lastname;
//     }
//     set lastname(lastname) {
//         this.#lastname = lastname;
//     }
// }

// let p = new Person("aria", "Saga");
// console.log(p.firstname);

// p.firstname = "oses";
// console.log(p.firstname);

