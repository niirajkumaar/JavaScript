// Dates

let myDate = new Date()
console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toLocaleDateString())

console.log(myDate.toLocaleString())

console.log(typeof myDate)


let myCreatedDate = new Date(2023, 0, 23)
// 0 means january  if we write with comma ...but if we write in double quotation then it is as it was
let doubleMonth = new Date("2023-01-25")
console.log(doubleMonth)
console.log(myCreatedDate.toDateString())


 myCreatedDate = new Date(2023, 0, 23, 5, 3)
 console.log(myCreatedDate.toLocaleString())


 let myTimeStamp = Date.now()
 console.log(myTimeStamp)
 console.log(myCreatedDate.getTime())
 console.log(Math.floor(Date.now()/1000))


 let newDate = new Date()
 console.log(newDate)

 newDate.toLocaleString('default',{
    weekday:"long",
    
 })