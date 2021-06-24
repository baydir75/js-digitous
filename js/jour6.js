/* Exo 1 */

let exoDate = new Date();

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

console.log(finalDate);