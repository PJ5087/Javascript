//immediately invoked function expression

//sometime global scope variables creates a problem in code that is why we use iife

//once the function is invoked we shoud know where to stop it so we will be using semi colon to stop ";"
//Wheneve we write two iife or function with iife we must use ";" to stop that otherwise we will be getting error
//IIFE is particularly useful in avoiding variable name clashes or polluting the global scope...
// Variables declared within an IIFE are not accessible from the outside, keeping them private to the function

function db(){
    console.log("DB CONNECTED")
}
db(); //normal function call

(function dbs(){
    //named iife
    console.log("DB connect");
})();

( (name) =>{
    //simple iife
    console.log(`DB connected two ${name}`);
})("Pankaj")

