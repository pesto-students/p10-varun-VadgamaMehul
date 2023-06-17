function Vehicle(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getDetails = function () {
  return `Make: ${this.make}, Model: ${this.model}, year: ${this.year}`;
};

function Car(make, model, year, numDoors) {
  Vehicle.call(this, make, model, year);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.getDetails = function() {
  return `${Vehicle.prototype.getDatails.call(this)}, Num of Doors: ${
    this.numDoors
  }`;
};

const vehicle = new Vehicle("Honda", "Civic", 2021);
console.log(vehicle.getDetails());
