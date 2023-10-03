//const tinderUser = new Object()  ----singleton object


const tinderUser = {}     // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "niraj"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email :"niraj@gmail.com",
    fullname : {
        userfullname : {
            firstname : "niraj",
            lastname : "kumar"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


// conactenate the objects

const obj1 = {1:"a",2 :"b"}
const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}

const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3)

//spread

const obj4 = {...obj1,...obj2}
console.log(obj4)

const users = [
    {
        id : 1,
        email: "n@gmail.com"
    },
    {
        id : 1,
        email: "n@gmail.com"
    }
]
users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('isLoggedIn'))