const otp=Math.floor(1000000 + Math
    .random()*90000)


    // console.log(otp);

    // import {randomInt} from 'crypto'
    // const otps = randomInt(900000, 1000000)

    // console.log(otps);


// The crypto module provides cryptographic functionality, including methods for generating cryptographically strong random numbers.
const crypto = require('crypto')  
const { stringify } = require('querystring')
const { log } = require('util')
//randomInt is a method provided by crypto. It generated a cryptographicallly strong random number between two specified values.
const otps = crypto.randomInt(900000,1000000)
// console.log(otps);

// ["C","D"].forEach((n)=>{
//     console.log(n)
// })

function add(){
    // console.log(1+2)
}
add()
new add  //new automatically call the fucntion

const arr=[3,4,5,6,7];

const arr1=[]

for(let i=0;i<arr.length;i++){
    if(arr[i]>3){
        arr1.push(arr[i])
    }
}
// console.log(arr1)

//==============Merged two sorted array=======================

const a=[1,2,4,5,7]
const b=[3,6,8]
const c=[]

let i=0
let j=0

while(i<a.length && j<b.length){
    if(a[i]<b[j]){
        c.push(a[i])
        i++
    }else{
        c.push(b[j])
        j++
    }
}
while(i< a.length){
    c.push(a[i])
    i++
}

while(j<b.length){
    c.push(b[j])
    j++
}

// console.log(c)

//=======================Valid parenthesis====================================
// const pairs = {'{':'}','[':']','(':')'}

// const ar=[]

// for(let char of pairs){
//     if(char in pairs){
//         ar.push(char)
//     }
// }

//===============================largest number=========================

// const largestNum=[23,43,42,5,6,76,86,7,98,89,90,99]

// // let max = largestNum[0]

// // for(let i=0;i<largestNum.length;i++){
// //     if(largestNum[i]>max){
// //         max=largestNum[i]
// //     }
// // }
// // console.log("largest number is :",max);

// function largestNumber(num){
//    return Math.max(...num)
// }
// console.log(largestNumber([23,42,43,5,6,76,98,89,90,99]));

// function smallestNumber(number){
//     return Math.min(...number)
// }
// console.log(smallestNumber([23,42,43,5,6,76,98,89,90,99]));

let experience =2

const level = (()=>{
    if(experience < 1){
       return 'junior'
    }else if(experience > 1 && experience <5){
        return 'midlevel'
    }else{
        return 'senior'
    }
})()

// console.log(level)

//==========================================

const array=["name"]

const obj={}

obj.name="Frontend master"
//You're attempting to use the array ["name"] as a property key in the object obj.
// However, when you use an array as a property key in JavaScript,
// it gets converted to a string.So effectively, this line is equivalent to obj["name"] = "React";
obj[array]="React" 

// console.log(obj.name)
// console.log(obj)
// console.log(array);

//=========================REST OPERATOR==================================

function addition(num1,num2,...num3){
    let  result = num1 + num2
    for(let n of num3){
        result = result + n
    }
    return result
}
// console.log(addition(4,2,5,6));

//============Repeateed alphabet in string===================================

const string ="Pankajyadavv"

const st=[]
let count=0;
let repeatechar=[]

for(let char of string){
    if(st.includes(char)){
        if(!repeatechar.includes(char)){
            repeatechar.push(char)
            count++
        }
        
    }else{
        st.push(char)
    }
}
// console.log(count);

//==================Remove duplicate elements from array======================

const ar=[1,2,3,2,4,3,5,6,7,8,7]
// const aa=[]

for(let i=0;i<ar.length;i++){
    for(let j=i+1;j<ar.length;j++){
        if(ar[i]==ar[j]){
            ar.splice(j,1)
            j--
        }
    }
}

// console.log(ar);

//=================================iffi===========================================
(()=>{
    let x=10
    y=5
})()

// console.log(typeof x);
// console.log(typeof y);

//==========================for loop=========================

for(let i=1;i<=10;i++){
    // console.log(`outer loop value : ${i}`);
    for(let j=1;j<=10;j++){
        // console.log(`inner loop value : ${j} and outer loop value : ${i}`);
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

const myArr=["batman","superman","shaktiman"]

for(let i=0;i<myArr.length;i++){
    // console.log(myArr[i]);
}
// console.log(myArr.length);

for(let i=0;i<10;i++){
    if(i == 5){
        // console.log(`detected 5`);
        break;
    }
    // console.log(`value of i is ${i}`);
}
// console.log("after break");

//========================While and do while loop==========================

let ast = ['pankaj','yadav','kumar']

let index=0;

while(index < ast.length){
    // console.log(`value of ast is : ${ast[index]}`);
    index ++;
}
//=======================Map object================================
//it's a object which hold values as key value pair and remembers the original order of insertion of keys
//It stores unique values

const map = new Map() 

map.set("IN","India")
map.set("USA","Unite State of America")
map.set("FR","France")

// console.log(map);

for(const [key,value] of map){
    // console.log(key);
    // console.log(key,":-", value);
}

//loop on object
const ob = {
    js:"Javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift"
}

for(const key in ob){
    // console.log(key);
    // console.log(`${key} is shortcut for ${ob[key]}`);
}

const args=["js","python","ruby","swift","react"]
for(const key in args){
    // console.log(`array with for loop ${key}`);
}

const arrays =["js","python","react","numpy","nextjs"]

arrays.forEach(function(i){  //foreach with call back function
    // console.log(i);
})

arrays.forEach((item,index,arrays) =>{
    // console.log(item, index, arrays);
})

arrays.forEach((val)=>{
    // console.log(`this is arrow function ${val}`);
})

const myCode =[
    {
        labguageName:"javascript",
        languageFileName:"js"
    },
    {
        labguageName:"Java",
        languageFileName:"Java"
    },
    {
        labguageName:"Python",
        languageFileName:"Py"
    }
]

myCode.forEach((item)=>{
    // console.log(item);
    // console.log(item.languageFileName);
})



//==============Non repeating element in array================
// ** const newArray =[] //find unique element in array **

// ars.forEach((num)=>{
//     if(newArray.includes(num)){
//         return num
//     }else{
//         newArray.push(num)
//     }
// })
// console.log(newArray);

const ars = [1,2,-1,1,3,1,2,6,5,4,6,6,7,7,9,8]
//Non repeating element

const elementCount = new Map() //to store the count of each element

// Count the occurrences of each element in the array

for(let e of ars){
    if(elementCount.has(e)){
            elementCount.set(e, elementCount.get(e)+1)
    }else{
        elementCount.set(e, 1)
    }
}
// Filter out the elements that appear only once
const newArrs =[]
for(let [e, count] of elementCount){
    if(count == 1){
        newArrs.push(e)
    }
}

// console.log(newArrs);

//Prototype pattern
const car={
    noOfWheels:4,
    start:function(){
        return "start"
    },
    stop:function(){
        return "stop"
    }
}

const myCar=Object.create(car)
// console.log(myCar.noOfWheels);
// console.log(myCar.start());

//========================================

console.log("start");

setTimeout(()=>{
    // console.log("setTimeout");
})

Promise.resolve().then(()=>{
    // console.log("promise");
})

// console.log("end");

//================================================

const are = [2,3,4,0,8,0,7,4,0,44]

// const zeroes = are.filter((v)=> v ===0)

// const nonZeroes = are.filter((v)=>   v !== 0)

// const zeroes = []
// const nonZeroes = []

// for(let i=0;i<are.length;i++){
//     if(are[i] !==0){
//         nonZeroes.push(are[i])
//     }
//     else{
//         zeroes.push(are[i])
//     }

// }

// const re = [...nonZeroes, ...zeroes]
// console.log(re);

//==========================reverse of string==================================

const str1= "silent"
const str2= "listen"

const r1= str1.split('').sort().join('')
const r2 = str2.split('').sort().join('')
const ress = str2.split('').reverse().join('')

// console.log('reverse of listen', ress);

if(r1===r2){
    // console.log("Anagram");
}else{
    // console.log("not an anagram");
}

//==============================================

const f= ['mango','banana','apple']

const r = f.slice(0,1)
// console.log('after slice', f);
const r3 = f.splice(0,1)
// console.log('after splice', f);
const r5 = f.unshift('strawberry')

// console.log(f);

// console.log([1,2]+[3,4]); //1,23,4

//=================Maximum Sub Array// always check for it==============
function maxSubArray(nums) {
    if (nums.length === 0) {
        return 0;
    }

    let maxCurrent = nums[0];
    let maxGlobal = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
}

// Example usage:
const nums = [-2,-3,4,-1,2,1,-5,4];
// console.log(maxSubArray(nums)); 

//========================
const objects ={
    a:1,
    b:2
}

objects.c = 3

console.log(objects);

//================================================
// input = aBcA1bC2
// output =  abcABC12

// const s = "aBcA1bC2"

// const final = s.sort()

// console.log(final);
//===========================================
const p = [2,4,6,9]
const n = [1,3,5,7]

const rs =[...p,...n]
// console.log(rs);
const rrs = rs.sort()
// console.log(rrs);

//========================first repeating character in string=========

const strings = "papaya"

const strs =[]

for(let i=0;i<strings.length;i++){
    // console.log("working fine");
    if(strs.includes(strings[i])){
        // console.log('first repeated characted :', strings[i]);
        break
    }else{
        strs.push(strings[i])
    }
}
if(strs[i]===strings[i]){
    // console.log("no duplicte element");
}

//================find missing number==========================

const arri = [1,2,3,4,5,7,8,9]

const ni = arri.length+1

const expectedSum = (ni*(ni+1))/2

let actualSum =0

for(let num of arri){
    actualSum += num
}

const ri = expectedSum - actualSum
console.log("the missing number is",ri); 

//==================mutliple of largest 3 number ======================

const aries = [2,3,6,7,9,1,5,2] 

const sorts = aries.sort() //[1,2,2,3,5,6,7,9]

console.log(sorts);

let counts = 1

for(let i=sorts.length-1;i>=sorts.length-3;i--){
    counts = counts * sorts[i]
}

console.log(counts);

//=================swap two variable value without using temp variable===============

let a1=5
let b1 =10

a1 = a1+b1
b1 = a1-b1
a1 = a1-b1

console.log(`value of a: ${a1} and value b: ${b1}`);
//=================================================================================