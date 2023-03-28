// .call is very similar in nature to bind accept some perameter
// With the call() method, you can write a method that can be used on different objects.

const personn = {
    fullName: function(city, contory){
        return this.firtsName + " " + this.lastName + "," + city + "," + contory ;
    }
};

const person1 ={
    firtsName: "pesto",
    lastName: "Tech"
};

const person2 = {
    firtsName: "Sohan",
    lastName: "gajjar"
};

//let b  
console.log(personn.fullName.call(person2, "rajkot", "india"));
console.log(personn.fullName.call(person));