const balance = 1000

if(balance > 500) console.log("test passed");


//falsy values : false, 0,-0, BigInt 0n, "", null, undefined, NaN

//truthy values : "0",'false'," ",[],{},function(){}

userEmail ="" //in case of array

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyOb = {}

if(Object.keys(emptyOb).length===0){
    console.log("Object is empty");
}

//Nullish Coalescing opeartor (??): null undefined

let val1;
val= 5 ?? 10 //5
val1 = null ?? 10 //10 :it will check if the value is null then it will the print the next value(mainly for safety check)
val2= undefined ?? 15 //15
val3 = null ?? 10 ?? 15 //10

console.log(val2);
console.log(val);
console.log(val1);
console.log(val3);

//Terniary operator

// condition ? true : false

const teaPrince = 100

teaPrince >=80 ?console.log("price is more") : console.log("price is less");