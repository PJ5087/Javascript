function multiplyby5(num){
    return num*5
}

multiplyby5.power = 2

console.log(multiplyby5(5));
console.log(multiplyby5.power);
console.log(multiplyby5.prototype); //prototype of object will be null


function  createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser("chai",24)
const tea = new createUser("tea",200)

chai.printme()
chai.increment()
chai.printme()
tea.printme()