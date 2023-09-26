const accountId = 144553
// value in const can't be changes
//accountId=2   -----not allowed bcz accountId is declared const
console.log(accountId);

let accountEmail = "niraj@gmail.com"
// value in let is always modified if other value is declared in let
accountEmail = "n@gmail.com" // previous value is modified
console.log(accountEmail)

var accountPassword = "12345"
/* value in var is always modified if other value is declared in var ....
it is not used now because of issue in block scope and functional scope*/
accountPassword = "21354"   // previous value is modified
console.log(accountPassword)

accountCity = "Kolkata" 
//prefer not to use
accountCity = "Patna"
console.log(accountCity)  //previous value is modified

var accountState;
//default value is undefined
console.log(accountState)

console.log("-------------------------------------")


// to print all the values of variables in table
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

