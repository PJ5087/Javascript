//Stacks
//functions :push, pop, peek, length

var words = [] //stack

var letter = "racecar"

var rword=""

for(var i=0;i<letter.length;i++){
    words.push(letter[i])
}

for(var i=0;i<letter.length;i++){
    rword += words.pop()
}

if(letter === rword){
    console.log("they are palindrome");
}else{
    console.log('not palindrome');
}