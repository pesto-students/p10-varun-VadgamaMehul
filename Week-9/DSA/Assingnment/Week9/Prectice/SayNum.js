
function sayNum(n,arr){
    if(n==0){
        return
    }

    let digit = n%10;
    n = Math.floor(n/10);

    sayNum(n,arr);
    console.log(arr[digit]); ;

}

let arr = ["zero","one",'two','three','four','five','six','seven','eight','nine'];
let n1 = 412;

sayNum(n1,arr);
