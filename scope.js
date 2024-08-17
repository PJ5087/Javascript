//let and const are block scope
//var is global scope

let a =300

if(true){
    let a=1;
    const b=2;
    var c=3;

    // console.log("Inner :",a);//1
}

// console.log(a) //300
// // console.log(b)
// console.log(c)//3

function one(){
   const username="pankaj"

    function two(){
        const website="Google.com"
        // console.log(username); //pankaj
        // console.log(website);
    }
    // console.log(website) //it will throw error as it's outside the scope

    two()
}
one()

//closures : self study

if(true){
    const name="Pankaj"
    if(name === "Pankaj"){
        const website ="Google.com "
        // console.log(website + name) //Google.com Pankaj
    
    }
    // console.log(website);//error calling it outside the scope
    
}
// console.log(name);//error  calling it outside the scope

//========================INTERESTING=======================================================


console.log(addOne(5));  //hoisting
function addOne(num){ //normal function
    return num + 2
}
// console.log(addOne(5));//7

console.log(addTwo(7)); //it will throw error as we hold that function in a variable

const addTwo = function(num){ //function expression
    return num + 3
}
console.log(addTwo(7)); //10