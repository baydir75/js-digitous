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