/*
 * With the apply() method, you can write a method that can be used on different objects
 * The apply() method is similar to the call() method 
 * The difference is:
 * The call() method takes arguments separately.
 * The apply() method takes arguments as an array.
 * 
 * The apply() method is very handy if you want to use an array instead of an argument list.
 * 
 * Note: While the syntax of this function
 * is almost identical to that of call(), 
 * the fundamental difference is that call()
 * accepts an argument list, while apply()
 * accepts,a single array of arguments.
 * 
 * With call, you have to know the arguments at
 * compile time. With apply, you can defer that
 * decision at runtime.
 * 
 */

const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
console.log(person.fullName.apply(person1, ["Oslo", "Norway"])); 


//-----example 2------//

var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2