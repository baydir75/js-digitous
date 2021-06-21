let numbers = [];

for (i = 50; i < 100; i++) {
    let j = Math.round(Math.random() * (100 - 1) + 1);
    numbers.push(j);
}

console.log(numbers);

let sum = 0;

for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);

let numbers2 = [];

for (i = 50; i < 100; i++) {
    let k = Math.round(Math.random() * (100 - 1) + 1);
    numbers2.push(k);
}

console.log(numbers2);

let max = 0;

for (i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > max) {
        max = numbers2[i];
    }
}

console.log(`La valeur maximale est ${max}`);

let numbers3 = [];

for (i = 50; i < 100; i++) {
    let a = Math.round(Math.random() * (100 - 1) + 1);
    numbers3.push(a);
}

console.log(numbers3);

i = 0;

while (i < numbers3.length) {
    if (numbers3[i] >= 75 && numbers3[i] <= 100) {
        console.log(`Le 1er chiffre du tableau entre 75 & 100 est : ${numbers3[i]}`);
        return;
    }
    i++;
}