// Dates

let myDate = new Date()
console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString())

console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)
// 0 means january  if we write in single digit ...but if we write double digit then it is as it was
let doubleMonth = new Date("2023-01-25")
console.log(doubleMonth)
console.log(myCreatedDate.toDateString())


 myCreatedDate = new Date(2023, 0, 23, 5, 3)
 console.log(myCreatedDate.toLocaleString())