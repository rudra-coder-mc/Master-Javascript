const accountId = 13444;
let accountEmail = "asdf@gmail.com";
var accountPassword = "12345";
accountCity = "surat";

// accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengal";

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
