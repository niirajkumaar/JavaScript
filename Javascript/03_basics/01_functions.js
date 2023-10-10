

function sayMyName(){
    console.log("N")
    console.log("I")
    console.log("R")
    console.log("A")
    console.log("J")
}
//sayMyName()

// function addTwoNumbers(num1,num2){ // parameters
//     console.log(num1 +num2)
// }
// addTwoNumbers(2,4)  // arguments

function addTwoNumbers(num1,num2){ // parameters
    return num1 +num2
}
const Finalresult = addTwoNumbers(2,4)  
console.log("Result: ",Finalresult)


function loginUser(username){
    if(username===undefined){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser())

//...Rest operator 
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600))

const user = {
    username : "niraj",
    price : 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)


const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))