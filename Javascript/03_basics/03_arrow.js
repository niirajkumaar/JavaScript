const user = {
    username : "niraj",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to message`)
        console.log(this)
    }
    
}
//  user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     let username ="icc"
//     console.log(this.username)
// }
// chai()

const chai =()=>{
    let username ="icc"
    console.log(this)
}
chai()

const addTwo = (num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))

//implicit return 

const add = (num1,num2)=>num1+num2

console.log(add(3,5))


const add1 = (num1,num2)=>(num1+num2)

console.log(add1(4,5))

const add2 = (num1,num2)=>({username:"niraj"})

console.log(add2(4,5))
