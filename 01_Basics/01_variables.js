const accountId = 144553
let accountEmail = "sandeep@gmail.com"
var accountPassword = "12345"
accountCity = "Faridabad"
// accountId = 2  //Not allowed
accountEmail = "abc@gmail.com"
accountPassword= "0987"
accountCity = "Bengaluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])