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