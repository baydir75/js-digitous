/* function calculate(firstNumber, secondNumber, operator) {
    let result;
    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default: result = "error";
    }
    console.log(result);

}

let operator = process.argv[4];
let firstNumber = parseInt(process.argv[2]);
let secondNumber = parseInt(process.argv[3]);

calculate(firstNumber, secondNumber, operator);
 */

/* Exo 2 & 3

let test = require("./table-utils.js");

let a = parseInt(process.argv[2]);

let b = parseInt(process.argv[2]);

test.multiply(a);
test.addition(b); */

/* Exo 4 */

/* let test = require("prompt");

test.start();

function onErr(err) { // permet de gérer les erreurs
    console.log(err);
    return;
}

let mysteryNum = Math.round(Math.random() * (100 - 1) + 1);

function play() {

    test.get({ name : "input", description: "Devinez le nombre mystere entre 1 & 100" }, function (err, res) {
         if (!isNaN(res.input)) {
             console.log(mysteryNum);
        if (parseInt(res.input) === mysteryNum) {
              console.log("Bravo !");
          } else if (res.input > mysteryNum) {
              console.log("Trop grand !");
              play();
          } else if (res.input < mysteryNum) {
              console.log("Trop petit");
              play();
          }
        } else {
            console.log("Pas un chiffre !");
            play();
        }
      });
    }
play(); */

/* Bonus */

let colors = require("colors");

let prompt = require("prompt");

let mysteryWord = "Table";

let gameWord = mysteryWord.toUpperCase().split("");

console.log(gameWord);

prompt.start();

function motus() {

    prompt.get({ name: "input", description: "Devinez le mot mystere" }, function (err, res) {
        if (mysteryWord.length === 5) {
            let compareWord = res.input.toUpperCase().split("");
            let k = 
        }
    })
}

motus();