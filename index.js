//logical operators
let password = "1@23";

if (password.length >= 8 && password.includes("@")){
    console.log("STRONG");

} else if (password.length >=5 && password.length <=8) {
    console.log("MEDIUM");

} else {
    console.log("WEAK");

}

