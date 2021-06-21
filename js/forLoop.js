let square = 0;
for (i = 5; i <= 10; i++) {
    let j = i * i;
    square += j;
}

console.log(square);

let count = 0;

for (i = 100; i <= 1000; i++) {
    if (i % 7 === 0) {
        count++;
    }
}
console.log(count);

let result = 0;

for (i = 0; i <= 20; i++) {
    let dice = Math.round(Math.random() * (6 - 1) + 1);
    if (dice >= 5) {
        result += dice;
    }
}

console.log(result);