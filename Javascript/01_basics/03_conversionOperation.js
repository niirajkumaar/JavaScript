let score ="33"
console.log(typeof score);

//method 2 as a function
console.log(typeof(score));

//converting one data type to another
let valueInNumber = Number(score)
console.log(valueInNumber)  //33
console.log(typeof(valueInNumber))  //number

console.log("---------------For string--------------")
let alphanumeric ="33abc"
console.log(alphanumeric)
console.log(typeof alphanumeric)
//conversion
let inNumber= Number(alphanumeric)
console.log(inNumber)      //NaN not a number
console.log(typeof inNumber) //number


console.log("----------------For null-------------")

let empty=null
console.log(empty)   //null
console.log(typeof empty) //object
//conversion
let inNumeric = Number(empty)
console.log(inNumeric) //0
console.log(typeof inNumeric)  //number


console.log("----------For undefined-------------")

let notDefined = undefined
console.log(notDefined)   //undefined
console.log(typeof notDefined)   //undefined

//conversion

let convertNotDefined = Number(notDefined)
console.log(convertNotDefined)  // NaN
console.log(typeof convertNotDefined) //number


console.log("-------------For boolean-----------------------")

let bln=true
console.log(bln)  //true

//conversion

let convertBln= Number(bln)
console.log(convertBln)    //1  for true and 0 for false
console.log(typeof convertBln)   //number


/*
NOTES:
"33"==> 33
"33abc"  ==> NaN
true ==>1 ;false ==>0
*/


console.log("-------some more conversion")
let isLoggedIn=1  
console.log(isLoggedIn)  
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1==> true     ; 0==> false  ;empty string==> false  ; "niraj"==>true