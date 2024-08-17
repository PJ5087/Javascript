// const obj={
//     name:"Pankaj",
//     email:"pk@gmail.com",
//     age:26,
//     address:"Ranchi"
// }
// obj.name="Niharika"
// console.log(obj.name)


// const userProfile ={
//     name:"Pankaj",
//     email:"pk@gmail.com",
//     age:26,
//     address:"Ranchi"
// }

// function userNewMail(userProfie,newMail){
//     userProfile.email=newMail
// }

// const newMail="panda@gmail.com"
// userNewMail(userProfile,newMail)

// console.log(userProfile)



// const company =[{
//     Hitachi:{
//         name:"Pankaj",
//         email:"pk@gmail.com",
//         domain:"SDE"
//     },
//     Genpact:{
//         name:"Panda",
//         email:"Panda@gmail.com",
//         domain:"Software Engineer"
//     },
//     AbsoluteLabs:{
//         name:"Niharika",
//         email:"nk@gmail.com",
//         domian:"Mulesoft developer"
//     }

// }]
// company[0].Hitachi.email="pk@hitachi.com"
// console.log(company[0].Hitachi.email)
// console.log(company[0].AbsoluteLabs.email)


// //generate OTP
// function oneTime(length){
//     let otp="";
//     for(let i=0;i<length;i++){
//         otp += Math.floor(Math.random()*10).toString()
//     }
//     return otp;
// }
// console.log(oneTime(6))

//iify (immediately inovke function)
//()() --first is for definiton and other is for calling the function



// const arr=[3,5,33,6,45,65,42,31,67,89]

// const result = arr.filter((v)=>v>32)
// console.log(result)

// const r= arr.map((v)=>v*v)
// console.log(r)

// const results = arr.reduce((v,u)=>v+u)
// console.log(results);


//======================================Chai aur Code================================

//Singleton : wheneve we use constructor to create object
//Object.create

//Object literals

const mySym = Symbol("Key1")

const jsUser ={
    name:"pankaj",
    "full name" : "Pankaj Yadav",
    [mySym] : "MyKey1",
    age:26,
    email:"pankajkumar@google.com",
    location:"Hyderabad",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
jsUser.name = "Panda"

// Object.freeze(jsUser) // it will freeze the data inside object and we cant change the value afterwards

jsUser.name = "Pankaj"

// console.log(jsUser.name);// after freezing the object data
// console.log(jsUser["email"]);//pankajkumar@google.com
// console.log(jsUser["full name"]);//Pankaj Yadav
// console.log(jsUser[mySym]);
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello Good evening JS");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS two ${this.name}`);
}


// console.log(jsUser.greeting);//  [Function (anonymous)] //it returned a function where function has not been executed but refeerence has come
// console.log(jsUser.greeting());//Hello Good eveening JS

// console.log(jsUser.greetingTwo());

//====================Part two=========================

// const user = new Object();//singleton object

const users = {}  //non singleton object

users.id = "123abc"
users.name ="Sam"
users.isLoggedIn = false

// console.log(users);

const newUser = {
    email:"Sam@gmail.com",
    fullname:{
        userFullName:{
            first_name:"Pankaj",
            last_name:"Yadav"
        }
    }
}

// console.log(newUser.fullname.userFullName.first_name);

const obj={5:"e",6:"f"}
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}

const obj3 = {...obj1, ...obj2} 
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj4 = Object.assign(obj1, obj2,obj)
// console.log(obj4); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const userss = [
    {
        id:1,
        name:"Pankaj"
    },
    {
        id:2,
        name:"Panda"
    },
    {
        id:3,
        name:"Niha"
    },
]

console.log(userss[1]);// { id: 2, name: 'Panda' }
console.log(userss[1].name);//Panda


console.log(Object.keys(users));//it will give output in array form so we can use loop on this and perofrm operation like array
console.log(Object.values(users));
console.log(Object.entries(users)); // [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]
console.log(users.hasOwnProperty('name'));//true

console.log(users.length); //undefined


//Destructuring

const course ={
    courseName:"Js in Hindi",
    coursePrice:"999",
    courseInstructor:"Hitesh Choudhary"
}

console.log(course.courseInstructor)

const {courseInstructor : ci} = course

console.log(ci)


{
    name:"Pankaj";
    company:"Genpact";
    profile:"Process Associate"
}
