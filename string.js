let str="Pankaj"
// console.log(str.length);
// let count=0;

// for(let i=0;i<str.length;i++){
//     count++
// }
// console.log(count)

// const myFunc = function(){
//     count=0;
//     for(let i=0;i<str.length;i++){
//         count++
//     }
//     console.log(count)
// }
// myFunc()


// for(let i=str.length-1;i>=0;i--){
//     console.log(str[i])
// }

let name="Pankaj"
let count=50;

// console.log(`My name is ${name} and my count is ${count}`);

const newName = new String('pankaj')  //string is a object here

// console.log(newName[1]);
// console.log(newName.__proto__); //it will return empty object
// console.log(newName.length);
// console.log(newName.toLowerCase());
// console.log(newName.charAt(3));
// console.log(newName.indexOf('k'));

const string = newName.substring(0,3) //last value is excluded
// console.log(string);

const newString =newName.slice(-6,3);  //in slice we can take negative value too
// console.log(newString);

const newStringOne = "  Pankaj.  "
console.log(newStringOne);
console.log(newStringOne.trim());  //it will replace the space from starting and end of the string

const url="https://pankaj.com/pankaj%20kumaryadav"
console.log(url.replace('%20','-')); //priovide two value
console.log(url.includes('%20'));

const newStringName = new String("Pankaj-kumar-Yadav-baban-Yadav")
console.log(newStringName.split('-')); //it will return a new array and split done on the basis of '-'

