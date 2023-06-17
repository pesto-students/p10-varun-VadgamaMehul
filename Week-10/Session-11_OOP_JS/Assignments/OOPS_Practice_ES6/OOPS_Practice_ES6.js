//Section 1 - Inheritance:-------------------------------------------------------------------------------

class vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${make} ${model}."`);
  }
}

class car extends vehicle {
  constructor(numSeat) {
    this.numSeat = numSeat;
  }
}

class RideShareCar extends car {
  constructor(isAvailable) {
    this.isAvailable = isAvailable;
  }
}

//Section 2 - Polymorphism:-----------------------------------------------------------------------------

class shape {
  calculateArea() {}
}

class Rectangle extends shape {
  calculateArea(width, height) {
    console.log(width * height);
  }
}

let Rect = new Rectangle();
Rect.calculateArea(2, 3);

class Triangle extends shape {
  calculateArea(base, height) {
    console.log((base * height) / 2);
  }
}

let trg = new Triangle();
trg.calculateArea(2, 3);

class Circle extends shape {
  calculateArea(radius) {
    console.log(Math.PI * radius * radius);
  }
}

let circle = new Circle();
circle.calculateArea(2);

//Section 3 – Abstraction and encpasulation:-------------------------------------------------------------

class BankAccount {
  #balance;
  #accountHolderName;
  #accountNumber;

  constructor(accountNumber, balance, accountHolderName) {
    this.#accountNumber = accountNumber;
    this.#balance = balance;
    this.#accountHolderName = accountHolderName;
  }

  getBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    this.#balance -= amount;
  }
}

class CheckingAccount extends BankAccount {}
class SavingsAccount extends BankAccount {
  deposit(amount) {}
  withdraw(amount) {}
}
