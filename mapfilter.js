const array =[1,2,3,4,5,6]

array.forEach((item)=>{
    // console.log(item);
})

let result = array.filter((v)=>{
    return v>2
})

// console.log(result);

let rse = array.map((i)=>{
    return i*2
})
// console.log(rse);

let newRes = array.map((val)=> val * 10).map((val)=> val+1).filter((val)=> val > 30)  //chaining of multiple methods

// console.log(newRes);



let res = array.reduce((v,n)=>{
    // console.log(`v : ${v} and n : ${n}`);
    return v*n
})
// console.log(res);

const newNums =[]

array.forEach((num)=>{
    if(num >2){
        newNums.push(num)
    }
})
// console.log(newNums);

const books = [
    {
        bookname:"Book1", genre:"history",publish:1987,editio:2000
    },
    {
        bookname:"Book2", genre:"action",publish:1988,editio:2002
    },
    {
        bookname:"Book3", genre:"history",publish:1999,editio:2010
    },
    {
        bookname:"Book4", genre:"comedy",publish:2002,editio:2020
    },
    {
        bookname:"Book5", genre:"geogrpahy",publish:2007,editio:2021
    },
    {
        bookname:"Book6", genre:"science",publish:2003,editio:2023
    },
    {
        bookname:"Book7", genre:"fiction",publish:2000,editio:2020
    },
    {
        bookname:"Book8", genre:"history",publish:1987,editio:2000
    },
]

let newBooks = books.filter((bk)=>{
    return bk.genre === "history"
})

newBooks = books.filter((bk)=>{ //overriding the newBooks method
    return bk.publish >=2000 && bk.genre === "fiction"
})
// console.log(newBooks);