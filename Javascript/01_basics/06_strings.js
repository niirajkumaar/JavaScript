const name = "Niraj"
const repoCount =18

console.log(name + repoCount)

//using string interpulation

console.log(`my name is ${name} and my repocount is ${repoCount}` )

const gameName = new String('learning-javascript   ')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.length)

//console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

console.log(gameName.trim())

console.log(gameName.substring(0,4))

console.log(gameName.slice(2,4))

//slice can take negative index value also but substring can't


const url = "https://nirajkumar.info/niraj%20kumar"

console.log(url.replace('%20','-'))

console.log(url.includes('nira'))

console.log(gameName.split('-'))