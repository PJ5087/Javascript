//Stack memory(Primitive) and Heap memory(Reference or non primitive)

let myName = "Pankaj";

let name = myName;
name ="Niharika";
console.log(myName);
console.log(name);
//in above example we are getting copy of the variable so whatever changes we are making it won't reflect to original one.


let myObj ={
    name:"Pankaj",
    email:"pk@gmail.com"
}

let obj =myObj;

obj.email ="pk@google.com";
console.log(myObj.email);
console.log(obj.email);

// in above we are passing is as reference so whatever changes we will do it will reflect to original one also
//Heap always get same reference 
