const accountID = 144553
let accountEmail = "swayam@azure.com"
var accountPassword = "9876"
accountCity = "BBSR"
let accountState;


/*
Please don not use var 
coz, it has problems with block scope & functional scope. if multiple variables have same name but used in diffrent scope each change to any specific variable would affect all other variables of same name
*/
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])