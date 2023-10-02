// singleton

// object literals
//object.create

const mySym = Symbol("key1")
const JsUser = {
    name : "Niraj",
    "fullname" : "Niraj Kumar",  // we cannot access thi swith dot operator
    [mySym] : "mykey1",
    age : 21,
    location : "kolkata",
    email: "niraj@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email);
console.log(JsUser["email"]);  // this syntax is valid in all condition

console.log(JsUser["fullname"]);
console.log(typeof mySym);
console.log(JsUser[mySym]);

JsUser.email = "niraj@change.com"
//Object.freeze(JsUser)
JsUser.email ="microsoft@gmail.com"
console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js UsER")
}

JsUser.greeting2 = function(){
    console.log(`Hello Js UsER ,${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greeting2())