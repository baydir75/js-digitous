
function multiply(a) {
    if (Number.isInteger(a)) {
    for (i = 1; i <= 10; i++) {
    let result = i * a;
    console.log(result);
    }  
}
else {
    result = "error";
    console.log(result);
}
}


function addition(b) {
    if (Number.isInteger(b)) {
        for (i = 1; i <= 10; i++) {
            let result = i + b;
            console.log(result);
            }
    } else {
        result = "error";
        console.log(result);
    }
}

module.exports = {
    multiply,
    addition,
};