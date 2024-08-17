//Conversion

// let score = null;

// console.log(typeof score);
// console.log(typeof (score));

// let ValuInNumber = Number(score);
// console.log(typeof ValuInNumber);
// console.log(ValuInNumber);

//"33"=>33
//"33abc"=>NaN
//true =>1
//false =>0

let isLoggedIn = 1;
// console.log(isLoggedIn); => 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

//1 => true; 0=> false
//""=>false
//"pankaj"=>true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//*****************************OPERATIONS********************************* */

let value = 3;
let negValue = -value;
// console.log(negValue);


let str="Pankaj";
let str1="Khushboo";

let str2 = str + str1;
// console.log(str2);

// console.log("1"+2); //2
// console.log(1+"2"); //2
// console.log("1"+2+2); //122
// console.log(1+2+"2"); //32  //this all behaviour happens due to ecmascript

// console.log(true) //true
// console.log(+true); //1
// console.log(true+) //it will throw error
// console.log(+"") // 0

let gameCounter = 100;
gameCounter++
console.log(gameCounter)