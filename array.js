//Array is a data structure that store elements in a contigous memory location
//Javascript arrays are resizable and contains a mix of different data types
//in js whenever we peroform copy operation it will create shallow copies(call by reference)
//deep copy(call by value)

const arr = [1,2,3,4,5,]

const arr2 = ["pankaj","Panda"]

const arr3 = new Array(1,2,3,4,5)

// console.log(arr[0]);
// console.log(arr.length);
arr.push(6) // it will add element at last index
arr.pop() // it will remove the last element from the indexs
arr.unshift(9) // it will add element at first index
arr.shift() //it will remove first element from the array
// console.log(arr);
// console.log(arr.includes(4));
// console.log(arr.indexOf(4)); // if the element is not presesnt it will return -1


const newArr = arr.join();
// console.log(arr)//[1,2,3,4,5]
// console.log(newArr);// it will bind the array and return the result in string type //1,2,3,4,5
// console.log(typeof newArr); //string

const newA = arr.slice(1,3); //here index 1 is inclusive and 3 will be exclusive //it won't manipulate the original array
// console.log("A ", arr);
// console.log(newA);
// console.log("c ", arr);

const newA1 = arr.splice(1,3);//it will manipulate the original array
// console.log("b ",arr);
// console.log(newA1);


const marvel_heros = ["thor","spiderman","ironman"]
const dc_heros = ["batman","superman","flash"]
const IndHeros = ["Shaktiman","JuniorG","Chota Bheem"]

// marvel_heros.push(dc_heros) //push the data in existing array
// console.log(marvel_heros) // [ 'thor', 'spiderman', 'ironman', [ 'batman', 'superman', 'flash' ] ] 
// console.log(marvel_heros[3][1]);// superman

// const allHeross = marvel_heros.concat(dc_heros) //concat will combine two arrays and return a new array without modifying original array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros, ...IndHeros]
console.log(all_new_heros);
console.log("Reverse of all new heros" ,all_new_heros.reverse());

const new_array = [1,2,3, [4,5,6],7, [6,7, [4,5]]]
//return a new array with all sub array elements concatenated into it recursively upto specific depth
const new_another_array = new_array.flat(Infinity) 
const new_arrays = new_array.flat(1)
console.log(new_another_array); //[1,2,3,4,5,6,7,6,7,4,5]
console.log(new_arrays);// [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]


console.log(Array.isArray("pankaj"))//false
console.log(Array.from("pankaj"))// [ 'p', 'a', 'n', 'k', 'a', 'j' ]
console.log(Array.from({name:"pankaj"})); //[] will return empty array 


let score1= 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //of: returns a new array from set of elements //[100,200,300]

const arrs = [1,2,3,4,5,6]
const arres = 1
console.log(Array.isArray(arrs));//true
console.log(Array.isArray(arres));//false