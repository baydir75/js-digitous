let start = 50;

while (start <= 200) {
    if (start % 2 === 0) {
        console.log(start);
    }
    start++;
}

let dice = null;
let count = 0;

while (dice !== 6) {
    dice = Math.round(Math.random() * (6 - 1) + 1);
    if (dice !== 6) {
        count++;
    }
}

console.log(count);

let usainBolt = 0;
let tysonGay = 0;

while (usainBolt < 100 || tysonGay < 100) {
    usainBolt += Math.round(Math.random() * (10 - 1) + 1);
    tysonGay += Math.round(Math.random() * (10 - 1) + 1);

    if (usainBolt >= 100) {
        console.log(`Usain Bolt a gagné ! Score : ${usainBolt}`);
        return;
    } else if (tysonGay >= 100) {
        console.log(`Tyson Gay a gagné ! Score : ${tysonGay}`);
        return;
    }
}