let integer = 102;
let float = 13.9;
console.log(integer);
console.log(float);

let basic = 34;
let stringified = basic.toString();
console.log(stringified);

let num = 1.5;
let rounded = Math.round(num);
console.log(rounded);

let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test / bis);
console.log(test * bis);
console.log(test % bis);

let test2 = 143;
let bis2 = 219;
console.log(test2 > bis2);
console.log(test2 < bis2);
console.log(test2 === bis2);
console.log(test2 !== bis2);

let limit = 50;
let score = 64;

if (score >= limit) {
    console.log("Ok ! Good !")
} else {
    console.log("Oh... No...")
}

score = 47;

if (score >= limit) {
    console.log("Ok ! Good !")
} else {
    console.log("Oh... No...")
}

let password = "azerty";

if (password.length > 5) {
    console.log("Your password is secure !")
} else {
    console.log("Password not secure !")
}

password = "azert";

if (password.length > 5) {
    console.log("Your password is secure !")
} else {
    console.log("Password not secure !")
}

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

password = "azerty";
score = 64;

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

password = "azert";

if (score >= limit && password.length > 5) {
    console.log("Everything is good");
} else if (score >= limit || password.length > 5) {
    console.log("Something is good");
} else {
    console.log("Nothing is good");
}

let random = Math.random() * 6;
random = Math.round(random);
console.log(random);

if (random === 6) {
    console.log("Yes ! I Won");
} else {
    console.log("So close...");
}

let month = "January";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    default : console.log("Erreur");
    
}

month = "August";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    default : console.log("Erreur");
    
}

let roundedNumber = 3.6;

function roundingNumber(number) {

    if (number - Math.floor(number) > Math.ceil(number) - number) {
        number = Math.ceil(number);
    } else {
        number = Math.floor(number);
    }
    
    console.log(number);
}

roundingNumber(roundedNumber)

roundedNumber = 3.3;

roundingNumber(roundedNumber)

roundedNumber = 3.8;

roundingNumber(roundedNumber);

roundedNumber = 12.4;

roundingNumber(roundedNumber);