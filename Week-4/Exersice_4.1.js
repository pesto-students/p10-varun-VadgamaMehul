var randomNum = parseInt(Math.random() * 100);
console.log(randomNum);


function getNumber(resolveTime, rejectTime) {
  //var randomNo = Math.floor(Math.random() * 100);
    if (randomNum%5==0) {
        return {
            then(){setTimeout(()=>console.log(`custom promise has been REJECTED after ${rejectTime}ms`),rejectTime)}
        }
    }
    return {
        then(){
            setTimeout(()=>console.log(`custom promise has been RESOLVED after ${resolveTime}ms`), resolveTime)
        }
    }
}
getNumber(0,0).then();