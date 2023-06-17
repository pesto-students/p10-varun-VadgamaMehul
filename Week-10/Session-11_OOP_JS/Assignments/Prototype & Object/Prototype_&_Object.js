// // First Way
// const person = {
//   name: "Mehul",
//   age: 23,
//   email: "vadgama.mehul@gmail.com",
//   get getAge() {
//     return this.age;
//   },

//   setAge: function (age_num) {
//     this.age = age_num;
//   },
// };

// let a = Object.getOwnPropertyDescriptor(Object, "name");
// console.log(a);
// console.log(person.getAge);
// let b = person.setAge(26);
// console.log(person.getAge);
// Object.defineProperty(person, "age", { value: 25, writable: true });
// person.age[25];
// console.log(person.getAge);

// //Second way

// const person1 = {};

// Object.defineProperty(person1, "name", {
//   value: "Mehul",
//   writable: false,
// });

// Object.defineProperty(person1, "age", {
//   value: 0,
//   writable: true,
// });

// Object.defineProperty(person1, "email", {
//   value: "abc@abc.com",
//   writable: false,
// });
// Object.defineProperty(person1, "getAge", {
//   value: function () {
//     return this.age;
//   },
// });
// Object.defineProperty(person1, "setAge", {
//   value: function(newAge){
//     this.age = newAge;
//   }
// });

// console.log(" ");
// console.log(person1); //output : { }
// console.log(person1.name); //output : Mehul
// console.log(person1.email); //output : abc@abc.com
// console.log(person1.age); //output : 0
// console.log(person1.getAge()); //output : 0
// person1.setAge(22); //set age = 22
// person.age = 25; // this will ignore bcz of age is write only
// console.log(person1.getAge()); //output : 22
// console.log(person1.age); //output : 22

//JavaScript Prototype---------------------------------------------------------------------------------------

const Vehicle = {
  make: "Car",
  model: "BA6",
  year: 2023,
};

const carl = Object.create(Vehicle);

carl.prototype.getDatails = function () {
  console.log(`Make: ${this.make}, Model: ${this.model}, year: ${this.year}`);
}

const car = {
    numDoor : 4,
    getDatails: function () {
        return `Make: ${this.make}, Model: ${this.model}, year: ${this.year}, Num of Door: ${this.numDoor}`;
      },
}

// let a = Vehicle.getDatails();
console.log( Vehicle.getDatails());
