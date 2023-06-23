//Define generatrot
function* ConvertArraytoSymbol(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sym = Symbol(arr[i]); // initialize symbol
    yield sym;
  }
}

//for get out put
for(let val of ConvertArraytoSymbol(['Hi','Hello','Mehul'])){
    console.log(val);
}

//!Output:
/*
Symbol(Hi)
Symbol(Hello)
Symbol(Mehul)
*/