

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
