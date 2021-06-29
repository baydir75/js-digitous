/* var fs = require("fs");

fs.readFile("jour7.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }
 
    console.log("Lecture en différé : " + data.toString());
 }); */

 /* Exo 2 */

/*  let test = [1,2,3,4,5];
 let testDouble = test.map((num) => num * 2);
 console.log(testDouble); */

/* Exo 3 */

/* let longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

let shortNames = longNames.map(function(item) {
    let newObj = {};
    newObj.name = item.firstName + " " + item.lastName;
    return newObj;
})

console.log(shortNames); */

/* Exo 4 */

/* let array = [1, "toto", 34, "javascript", 8];

let numbers = array.filter(item => {
    return !isNaN(item);
} )

console.log(numbers); */

/* Exo 5 */

/* let numbers = [1,2,3,4,5,6,7,8];

let even = numbers.filter(item => {
    return item % 2 === 0;
})

console.log(even); */

/* Exo 6 */

/* let cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

let soldOut = cakes.map(item => {
    let newObj = {};
    newObj.name = item.name;
    newObj.flavor = item.flavor;
    newObj.status = item.status;
	if (newObj.flavor === "chocolate") {
		newObj.status = "Sold Out !";
	}
    return newObj;
    }
)

console.log(soldOut);

let finalCakes = soldOut.filter(item => {
	return item.status === "Sold Out !";
})

console.log(finalCakes); */

/* Bonus Pendu */