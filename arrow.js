// const user ={
//     name:"pankaj",
//     age:25,

//     welcomemsg : function(){
//         console.log(`${this.name}, this is my webiste `);
//         console.log(this); // this is always refer to current context
//     }
// }
// user.welcomemsg()
// user.name="Raja"
// user.welcomemsg()
// console.log(this); // if we are in node environment then "this" refers to object  //output: {}

//==================================================================================


// ** IMPORTANT :  we cannot use "this" inside a function

// function chai(){
//     let name = "pankaj"
//     console.log(this.name); 
// }
// chai()

// const chai = function(){
//     let name = "Pankaj"
//     console.log(this.name);
// }
// chai()

// const coffee = () =>{
// //    let name="Pankaj"
//     console.log(this.name); //undefined
//     console.log(this); //{}
// }
// coffee()


// const name =(n,m)=>{
//     return n*m
// }
// console.log(name(5,6));

// const addTwo =(n,m)=> n*m  //implicit return

// console.log(addTwo(5,8));

const add =(n,m)=>({username:"Pankaj"})
console.log(add(5,6));

// const array =[1,2,2,3,4,5,5,6,6,7,7,8,8]  // find unique element

// const result = [...new Set(array)]
// console.log(result);