const promiseOne = new Promise((resolve,reject)=>{
    //do an async call
    //DB calls, cryptography, network call
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },2000)
})

promiseOne.then(()=>{
    console.log("promise consumed");
})

//======================================================

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("async task 2");
        resolve()
        // reject()
    },2000)
}).then(()=>{
    console.log("asyncc 2 promise consumed");
})

//=======================================================

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("promise three is there");
        resolve({username : "chai", email :"pankaj.aps.5087@gmail.com"})
    },2000)
})

promiseThree.then((user)=>{
    console.log(user);
})

//=======================================================

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username :"pankaj5087", password :"12345"})
        }
        else{
            reject("Error : Something went wrong")
        }
    },2000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolve or rejected");
})

//=========================================================

const promsiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username : "Javascript", password : "1234"})
        }else{
            reject("Error :  JS went wrong")
        }
    },2000)
});

async function consumePromiseFive(){
   try{
    const response =  await promsiseFive
    console.log(response);
   }catch(error){
    console.log(error);
   }
}

consumePromiseFive()

//=============================================================

// async function getAllUser(){
//   try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     // console.log(response);
//     const data =await response.json()
//     console.log(data);
//   }catch(error){
//     console.log("Error ;", error);
//   }
// }
// getAllUser()

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("E : ",error);
})

