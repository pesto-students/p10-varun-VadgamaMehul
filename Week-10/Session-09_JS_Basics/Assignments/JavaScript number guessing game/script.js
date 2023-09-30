// Your solution goes here 

let totalGuesses_counter = 1;

function playGuessingGame(numToGuess,totalGuesses)
{
    let gussed_num = prompt("Enter Number b/w 1 to 100");
    while(totalGuesses_counter<=totalGuesses)
    {
        totalGuesses_counter++;
        if(gussed_num==numToGuess){
        break;
        }
        else if(gussed_num==null){
            return 0;
         }
        else if(gussed_num==""){
            gussed_num= prompt("Please enter a number.");
            totalGuesses_counter--;
         }
        else if(gussed_num<numToGuess)
        {
            gussed_num= prompt("Guess a larger number.");
        }
        else if(gussed_num>numToGuess){
            gussed_num=prompt("Guess a smaller number.");
        }
        else if(isNaN(gussed_num))
        {
            gussed_num=prompt("Please enter a number not string");
            totalGuesses_counter--;
        }
     
       //cancel if(a===0) then break 
       
    }
    return totalGuesses_counter;
}
let a=playGuessingGame(24,10);
if(totalGuesses_counter>10){a=0;}
console.log(a);
//promt
//input lenge
//check if inout is less or more us hisaab se prompt ka text edit
