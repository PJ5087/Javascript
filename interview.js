//we have execution context and in that we have two block. One is memory phase and other is code phase

// myFun()

// var myFun = function(){
//     console.log("first")
// }

// myFun()

// function myFun(){
//     console.log("second")
// }

// myFun()
//output { second, first, first}


//===============================================================

// var variable =10;

// (()=>{                //this is iffi: immediately invoked function
//     console.log(variable)

//     variable = 20

//     console.log(variable);
// })()

// console.log(variable);
// var variable=30;
// console.log(variable)
// //output: 10,20,20,30

//================================HOISTING========================================
// foo= 30;

// console.log("foo", foo);

// var foo= 100;

// console.log("foo", foo);
// //output:30,100

//=============================================================================
// the variable which get credted first in execution context is global varialbe and then the variable inside the function is created
variable =10;
(()=>{
    foo=100;
    console.log(variable); //10
    var foo=100; 
    variable=20;
    console.log(variable);//20
})();

console.log(foo)//foo is not defined
console.log(variable);//20
var variable =30;