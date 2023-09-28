// primitive data types

/* 7 types primitive data types

1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/




/*
JavaScript is a dynamically typed language, 
which means that data types of variables 
are determined by the value they hold 
at runtime and can change throughout 
the program as we assign different values to them.
*/
const score =100
const scoreValue=100.3
const isLoggedIn= false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId)  
//Symbol — that's guaranteed to be unique

const bigNumber = 3473737269863n  //  n denotes that it is BigInt
console.log(bigNumber)


// Reference type ---(non primitive)
/*
Array
Objects
Functions
*/

//array

const heros = ["shaktiman","nagraj","doga"]
console.log(heros)

//object

let myObj={
    name:"niraj",
    age: 21
}
console.log(myObj)

//function


const myFunction=function(){
    console.log("hello function");
}
