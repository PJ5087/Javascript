let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,25)
console.log(myCreatedDate.toDateString()); //Wed Jan 25 2023

let myCreatedDates = new Date(2023,0,25,5,3)
console.log(myCreatedDates.toLocaleString()); //25/1/2023, 5:03:00 am
console.log(myCreatedDates.getTime()) //1674603180000  in milisecond

let myNewdate = new Date(14-4-2024);
console.log(myNewdate.toString()); //Thu Jan 01 1970 05:29:57 GMT+0530 (India Standard Time)

let myTimeStamp= Date.now();
console.log(myTimeStamp);

let newDate =new Date();
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());


newDate.toLocaleString('default',{
    
})


