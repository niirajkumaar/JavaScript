// array
// ----Javascript arrays are resizable and can contain a mix of different data types 

const myArr =[0 , 1 , 2  ,3 , 4 ,5]
const myHeros = ["niraj","kumar"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1])

// array methods

myArr.push(6)  // adding at end
myArr.push(7)
myArr.pop()    //removing at end
myArr.unshift(9)   // adding from first
myArr.shift()     //removing from first
//console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))   // if element is not present then -1 is returned

const newArr = myArr.join()  // converted to string
console.log(newArr)


// sice , splice

console.log("a", myArr)

const myn1 = myArr.slice(1,3)
// print the numbers from 1 to (3-1) and it do not chanf=ge original array

console.log(myn1)

const myn2 = myArr.splice(1,3)
// print 1 t0 3 and it change the original number after removing these elements
console.log(myn2)
console.log(myArr)

