function addTwoNumber(num1,num2){
    // let result = num1+num2;
    // return result;
    return num1+num2
}
// addTwoNumber()
const result = addTwoNumber(4,5)
// console.log("Result: ", result)


function loginUSerMessage(username = "Khushi"){
    if(username === undefined){//(!username)
        console.log("please enter a username");
        return //after return no line of code will be executed inside that function
    }
    return `${username} just logged in`;
}
// console.log(loginUSerMessage("pankaj"))//pankaj just logged in
// console.log(loginUSerMessage("pankaj"));//empty argumnets will give us undefined


function calculateCartprice(val1,val2,...num){
    return num;
}
console.log(calculateCartprice(200,300,400,500,800))


const user={
    name:"Pankaj",
    age:30
}

function handleObject(anyobject){
    console.log(`my name is ${anyobject.name} and my age is ${anyobject.age}`)
}
// handleObject(user)

handleObject({
    name:"Khushi",
    age:15
})

const newArray=[200,100,300,500,800]
const array =[1,2,3,4,5,6]

function handleArrayObject(arrayobject){
    return arrayobject[0]
}

console.log(handleArrayObject(newArray));
console.log(handleArrayObject(array));


//======================revrse a number====================================

function reverseNum(num){
    let rev_num =0;
   while(num>0){
    rev_num = rev_num*10 +num%10;
    num = Math.floor(num/10)
   }
   return rev_num
}
console.log(reverseNum(2345))

