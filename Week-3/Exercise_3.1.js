// function memoize(fn) {
//     const cache = new Map();
//    return function (...args) {
//     const key = args.toString();
//     if(cache.has(key)){
//        return cache.get(key);
//     }
//     cache.set(key, fn(...args))
//    return cache.get(key);    
//    } ;
// }

function memoize(fn) {
    const cache = {};
   return function (...args) {
    const key = args.toString();
    console.log("Fn called with :" + key);
    if(key in cache){
       return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;      
   } ;
}


// function fib(n){
//     if(n<2){
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }

function add(a=0,b=0){
    return a+b
}

function time(fn) {
    console.time() ;
    fn();
    console.timeEnd();       
};
    
//const fibM = memoize(fib);

// time(()=>fibM(38));
// time(()=>fibM(38));
// time(()=>fibM(38));
// time(()=>fibM(38));
// time(()=>fibM(38));

//Create a method called memoize such that:
const memoizeAdd = memoize(add);
// timeit(memoizeAdd(100));
time(() => memoizeAdd(100, 100)); // 200
time(() => memoizeAdd(100)); // 100
time(() => memoizeAdd(100, 200)); // 300
time(() => memoizeAdd(100, 100)); //returns 200 without function call✨
time(() => memoizeAdd(100, 100, 200, 300)); //able to take n number of arguments

