let fruits = [];
fruits.push("mango", "lemon", "blueberry");
console.log(fruits);
console.table(fruits);

let ingredients = [];
ingredients.push("eggs", "milk", "butter");
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));

let objects = [];
objects.push("pen", "book", "lamp");
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);

let numbers = [];
numbers.push(4, 10, 8, 12, 6);
numbers.reverse();
console.log(numbers);
numbers.sort((a, b) => a-b);
console.log(numbers);

let total = 0;
let limit = 10;

for (i = 0; i <= limit; i++) {
    total = total + i;
    console.log(total);
}

let sentence = "Hello Konexio !";
let sentence2 = sentence.split("");
let sentence3 = [];

for (i = 0; i <= sentence.length; i++) {
    sentence3.push(sentence2[sentence.length - i]);
}
console.log(sentence3.join(""));

for (i = 0; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log(`${i} : est un multiple de 3`);
    } else if (i % 5 == 0) {
        console.log(`${i} : est un multiple de 5`);
        /* !!! */
    } else if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} : est un multiple de 3 et 5`);
    } else if (i % 7 == 0) {
        console.log(`${i} : est un multiple de 7`);
    }
}

total = 0;
let count = 0;
while (count <= limit) {
    total = total + count;
    count++;
    console.log(total);
}

let promo = [];

promo.push("Julien", "Anthony", "Elodie", "Eliott", "Laura", "Elizabeth", "Baydir", "Amadou");

let tirageAuSort = Math.floor(Math.random() * 8);
console.log(tirageAuSort);
console.log(promo[tirageAuSort]);

let integer = [];
for (i = 0; i < 20; i++) {
    integer.push(Math.round(Math.random() * (100 - 0) + 0));
    console.log(integer);
}

for (i = 0; i < integer.length; i++) {
    
    }