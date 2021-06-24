/* Exo 1 */

/* let exoDate = new Date();

let finalDate;

exoDate = exoDate.toISOString();

exoDate = exoDate.split("T");

exoDate.pop();

function formatDate(dateToConvert) {
    
    dateToConvert = dateToConvert[0].split("-");

    dateToConvert = dateToConvert.reverse();

    finalDate = dateToConvert[0] + "/" + dateToConvert[1] + "/" + dateToConvert[2];

    return finalDate;
}

finalDate = formatDate(exoDate);

console.log(finalDate); */

/* Exo 2 */

let birthDate = "07/04/1994";
let age;

function calculateAge(input) {
    let result = new Date(input).getFullYear();
    let now = Date.now();
    now = new Date(now).getFullYear();
    age = now - result;
    return age;
}

age = calculateAge(birthDate);
console.log(age);

/* Exo 3 */