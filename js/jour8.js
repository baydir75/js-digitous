/* Exo 1 */
/* var axios = require('axios');

let countriesNames = [];

function getCountries() {
    axios.get("https://restcountries.eu/rest/v2/all").then(function (res) {
        let test = res.data;

        countriesNames = test.map(item => {
            return item.name;
        })
        console.log(countriesNames.join("-"));
    })
}

getCountries(); */

const { default: axios } = require("axios");

/* Exo 2 */

/* function getFacts() {
    axios.get("https://api.chucknorris.io/jokes/random").then(function (res) {
        let data = res.data;
        console.log(data.value);
    })
}

getFacts(); */

/* Exo 3 */

/* function catchPokemon(num) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(function (res) {
        console.log(`id: ${res.data.id}`);
        console.log(`name: ${res.data.name}`);
    })
}

catchPokemon(150);
 */

/* Bonus */

let playerScore = 0;

let bankScore = Math.round(Math.random() * (21 - 16) + 16);

console.log(bankScore);

let input = require("prompt");
input.start;

function blackJack() {
input.get({ name: "userInput", description: "Voulez-vous piocher une carte ? O = Oui/N = Non" }, function (err, res) {
    if (res.userInput.toLowerCase() === "o") {
        playerScore += Math.round(Math.random() * (10 - 1) + 1);
        if (playerScore > 21) {
            console.log(playerScore);
            console.log("Game Over");
            return
        }
        console.log(playerScore);
        blackJack();
    } else if (res.userInput.toLowerCase() === "n") {
        if (playerScore === 21) {
            console.log("Black Jack ! Vous avez gagné !")
        } else if (playerScore > bankScore) {
            console.log("Felicitation ! Vous avez gagné");
        } else if (playerScore < bankScore) {
            console.log("Perdu ! Dommage...");
        }
    } else {
        console.log(err);
    }
})
}

blackJack();