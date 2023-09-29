const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance);


console.log(balance.toString());
console.log(typeof(balance));
console.log(balance.toFixed(2))  // fixing value for the two decimal point


const otherNumber = 23.8
console.log(otherNumber.toPrecision(3))   //23.8
console.log(otherNumber.toPrecision(4))   //23.80
console.log(otherNumber.toPrecision(2))   //24
console.log(otherNumber.toPrecision(1))   //2e+1


const hundreds=1000000
console.log(hundreds.toLocaleString())   //american standard
console.log(hundreds.toLocaleString('en-IN'))   //indian standard

// -----------------MATHS---------------->>>>>>>>>>>>>>>

console.log(Math)

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))

console.log(Math.floor(4.2))

console.log(Math.min(4,9,2,6))
console.log(Math.max(4,9,2,6))

console.log(Math.random())  //always in bw 0 and 1

console.log((Math.random()*10)+1)  // 1 to 9

const min = 10
const max = 20
console.log(Math.floor(Math.random()* (max-min+1))+min)


