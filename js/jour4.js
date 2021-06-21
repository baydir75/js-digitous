let cat = {
    name: "Garfield",
    age: 3,
    isCute: true
}

console.log(cat.name);
console.log(cat.age);

if (cat.isCute === true) {
    console.log("So Cute !")
}

let cat2 = {
    name: "Felix",
    age: 7,
    isCute: false
}

let cats = [cat, cat2];
console.log(cats[0].age);
console.log(cats[1].isCute);

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkIfEven(2);


function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger than ${num1}`);
    } else {
        console.log("Egaux");
    }
}

compare(6, 5);

function addUp(num) {
    let i = 0;
    let num2 = 0;
    while (i <= num) {
        num2 += i;
        i++;
        console.log(num2);
    }
}

addUp(12);

function format(num) {
    let h = num / 3600;
    let m;
    let s;
    h = h.toString();
    m = 0 + h.substring(h.indexOf("."));
    h = h.substring(0, h.indexOf("."));
    m = m * 60;
    m = m.toString();
    s = 0 + m.substring(m.indexOf("."));
    m = m.substring(0, m.indexOf("."));
    s = Math.round(s * 60);
    s = s.toString();
    console.log(`${h}:${m}:${s}`);
}

format(3660);

function generatePassword(num) {
    let password = [];
    if (num < 6 || num > 15) {
        console.log("Error !");
    } else {
        for (i = 0; i <= num; i++) {
            let random = Math.random() * (122 - 97) + 97;
            console.log(random);
            let test = String.fromCharCode(random);
            password.push(test);
            console.log(password);
            let passwordFinal = password.join("");
            console.log(passwordFinal);
        }
    }
}

generatePassword(15);

function launchDice(numberOfDice) {
    let joueur1;
    let joueur2;
    let joueur1Final = 0;
    let joueur2Final = 0;
    let i = 0;
    while (i < numberOfDice) {
        joueur1 = Math.round(Math.random() * (6 - 1) + 1);
        joueur1Final += joueur1;
        joueur2 = Math.round(Math.random() * (6 - 1) + 1);
        joueur2Final += joueur2;
        i++;
    }
    console.log(joueur1Final);
    console.log(joueur2Final);
    if (joueur1Final > joueur2Final) {
        console.log(`Joueur 1 a gagné ! Score : ${joueur1Final} - ${joueur2Final}`);
    }   else if (joueur2Final > joueur1Final){
        console.log(`Joueur 2 a gagné ! Score : ${joueur2Final} - ${joueur1Final}`);
    } else {
        console.log(`Ex-aequo`);
    }
}

launchDice(6);