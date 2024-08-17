const user ={
    username :"Pankaj",
    loginCount:8,
    isLoggedIn: true,

    getUserDetails: function(){
        // console.log("got user details");
        // console.log(`username : ${this.username}`);
        // console.log(this); //current context
    }
}

// user.username ="Panda"
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //global context

//====================Constructor Function================================

function users(username, loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greetting = function(){
        console.log(`greet ${this.username}`);
    }

    return this
}
//while using new keyword a new object is created that is instance
//due to new a constructor function is called

const userOne = new users("Pankaj",10, true)
const userTwo = new users("panda",12, false)

console.log(userOne);
console.log(userTwo);