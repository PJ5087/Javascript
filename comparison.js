console.log("2">1);

console.log(null > 0); //false
console.log(null == 0);//false
console.log(null >= 0);//true

//The reason is that an equality check == and comparison >, >=, <=, < work diffrently.
//Comparison convert null to a number and treating it as 0.
//That is why (3)  null>0 is true and (1)   null>0 is false

//Primitive data type are call by value(in this whatever change we make it will be done in copy not in original one)
// 7 types : String, Number, Boolean, null, undefined, symbol(to make any value unique), BigInt(scientific value or big value than usual)


// Reference type (non primitive type)[in memory reference of this are directly allocated]
// Arrays, objects, functions

let mail;
console.log(mail) //undefined

const id=Symbol("123")
const same=Symbol("123")
console.log(id===same);

const heroes = ["shaktiman","juniorG","Phantom"]

let myObj ={
    name:"Pankaj",
    age:26,
    address:"Ranchi"
}
 const myFunction = function(){
    console.log("inside function")
 }
 myFunction()