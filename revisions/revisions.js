function sortLetters(string) {
    let stringOrder = string.split("");
    stringOrder = stringOrder.sort();
    string = stringOrder.join("");
    return string;
}

let a = "konexio";

a = sortLetters(a);
console.log(a);

function countEach(string) {
    let x = 0;
    let o = 0;
    let stringOrder = string.split("");
    for (i = 0; i < stringOrder.length; i++) {
        if (stringOrder[i] === "o") {
            x++;
        } else {
            o++;
        }
    }
    if (x === o) {
        return true;
    } else {
        return false;
    }
}

let b = "xooxx";

b = countEach(b);
console.log(b);

let result;
function checkPal(string) {
    let stringReverse = string.split("");
    stringReverse = stringReverse.reverse();
    stringReverse = stringReverse.join("");
    if (stringReverse === string) {
        return `${string} est un palindrome !`;
    } else {
        return "Nope...";
    }
}

result = checkPal("laptop");
console.log(result);

let stringToSwap;
function swap(string) {
    let swap = string.split("");
    for (i = 0; i < swap.length; i++) {
        if (swap[i] === swap[i].toUpperCase())
        {
            swap[i] = swap[i].toLowerCase();
        } else {
            swap[i] = swap[i].toUpperCase();
        }
    }
    swap = swap.join("");
    return swap;
}

stringToSwap = "Hello World";
stringToSwap = swap(stringToSwap);
console.log(stringToSwap);

function makeItSpongebob(string) {
    let spongebob = string.split("");
    for (i = 0; i < spongebob.length; i++) {
        if (i % 2 === 0) {
            console.log(spongebob[i])
            spongebob[i] = spongebob[i].toLowerCase();
        } else {
            console.log(spongebob[i]);
            spongebob[i] = spongebob[i].toUpperCase();
        }
    }
    spongebob = spongebob.join("");
    return spongebob;
}

let resultSpongebob = "Javascript is bad";

resultSpongebob = makeItSpongebob(resultSpongebob);
console.log(resultSpongebob);