//Create a class named "Calculator"
class Calculator {
    add(num1,num2){
        return num1+num2;
    }
    sub(num1,num2){
        return num1-num2;
    }
    mul(num1,num2){
        return num1*num2;
    }
    div(num1,num2){
        if(num2===0){
            console.log("Enter non zero num");
        }
        else
        return num1/num2;
    }
}

//Create a class named "ScientificCalculator" that extends the Calculator class
class ScientificCalculator extends Calculator{
    square(num){
        return num**2;
    }
    cube(num){
        return num**3;
    }
    power(num1,num2){
        return num1**num2;
    }
}

// Create an instance of the ScientificCalculator class
const sciCal = new ScientificCalculator();

//Using the "call" method, invoke the "add" method of the Calculator class with arguments 10 and 5.
const Add_num = Calculator.prototype.add.call(sciCal,10,5);
console.log(Add_num);

//Using the "apply" method, invoke the "subtract" method of the Calculator class with arguments 10 and 5.
const sub_num = Calculator.prototype.sub.apply(sciCal,[4,2]);
console.log(sub_num);

//Using the "bind" method, create a new method named "multiplyByTwo" that multiplies a number by 2 and returns the result. 
const multiplyByTwo = function (num) {
    return num*2;
}
//Bind the "multiplyByTwo" method to the instance of the ScientificCalculator class.
sciCal.multiplyByTwo = multiplyByTwo.bind(sciCal);
console.log(sciCal.multiplyByTwo(5));

//Using the "bind" method, create a new method named "powerOfThree" that raises a number to the power of 3 and returns the result. 
const powerOfThree = function(num){
    return num**3;
}

//Bind the "powerOfThree" method to the instance of the ScientificCalculator class.
sciCal.powerOfThree = powerOfThree.bind(sciCal);
console.log(sciCal.powerOfThree(2));