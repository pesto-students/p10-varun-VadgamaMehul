//----Example 1-----//

function sum(a, b) {
  //console.log(this);
  return this.a + this.b;
}

//console.log(sum(2,3)); //it will give NaN bcz this refer global scop and in GS there is not a & b obj
const sumB = sum.bind({ a: 2, b: 3 });

//! here sumB is a diff func
// .bind binds permentaly
console.log(sumB == sum);
console.log(sumB === sum);
const sumC = sumB.bind({ a: 23, b: 23 });
console.log(sumB());

console.log(sumC()); // .bind binds permentaly so here output is 5

//----Example 2------//

const obj = {
  firstName: "Mehul",
  print: function () {
    return this.firstName;
  },
};

console.log("------------------------------------------------------------------------------------------------");
var fn = obj.print

console.log(fn()); //it will give undefine bcs fn is global func. so this refer global window

// to solve this we can use bind()
var fn1 = obj.print.bind(obj);
console.log(fn1()); // now it will give Mehul

var fn2 = fn.bind(obj);
console.log(fn2()); 

console.log(obj.print()); //it will give Mehul

//-------Example 3------//
//bind has one property its used for create parcial func.
console.log("---------------------------------------------------------------------------");


function product(a, b) {
 return a*b;    
}

console.log(product(5,10));

//-- use bind for bind one parameter

const double = product.bind(null, 2); //here a is bind to null and b is bind to 2
console.log(double(100)); // it will give 200 bcz now a =100 and b=2 

const double2 = product.bind(null, 2,3); //here a is bind to 2 and b is bind to 3
console.log(double2(100)); // it will give 6 bcz now a =2 and b=3 and 100 is become 3rd perameter 


