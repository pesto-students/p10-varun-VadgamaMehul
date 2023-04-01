// function createStack() {
//   return {
//     items: [],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     },
//   };
// }
// const stack = createStack();
// stack.push(10);
// stack.push(5);
// console.log(stack.pop()); // => 5
// stack.items; // => [10]
// stack.items = [10, 100, 1000];
// console.log(stack.items);

// Encapsulationbroken!
// function createStack() {// Write your code here...}
// const stack=createStack();
// stack.push(10);
// stack.push(5);
// stack.pop();// => 5
// stack.items;// => undefined

// function createStackWithoutEncapsulation(){
//   return {
//       items: [],
//       push(item){
//           this.items.push(item);
//       },
//       pop(){
//           return this.items.pop();
//       }
//   }
// }

// const stackobj = createStackWithoutEncapsulation();
// console.log(stackobj) //{ items: [] }
// console.log(stackobj.items) // []
// stackobj.push(10);
// stackobj.push(5);
// console.log(stackobj.pop()); // 5
// console.log(stackobj.items) // [10]
// stackobj.items = [10, 100, 1000];
// console.log(stackobj.items); // [ 10, 100, 1000 ] => ENCAPSULATION BROKEN!

// /**
// * TODO: Add closure to improve the encapsulation of a function
// * * Created the function and then return them as object

// EXAPLANATION:

// An object is returned by function, which gives the access of only the content
// returned as object { push: [λ: push], pop: [λ: pop] }.

// This makes our property to be private in and not able to update directly,
// though update can be done through function provided.
// So it's not exactly private but direct access is not possible now!

// */

//explain below code?
function createStack() {
  let items = [];
  function private_push(item) {
    items.push(item);
  }
  function private_pop() {
    return items.pop();
  }
  return {
    push(item) {
      private_push(item);
    },
    pop() {
      return private_pop();
    },
  };
}
const stck = createStack();
console.log(stck.items); // undefined
stck.push(2);
stck.push(4);
stck.push(4);
stck.pop();
console.log(stck.items); // undefined
stck.items=[12,23,34,54];
console.log(stck.items);
stck.push(12);
console.log(stck.items);
// stck
