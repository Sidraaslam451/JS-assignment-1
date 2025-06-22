// chap no :05 Assignment 

// Q no : 1 & 2

let a = 5;
let b = 6;
let c = 5+6;
let d = 5-6;
let e = 5*6;
let f = 5/6;
let g = 5%6;

// addition
console.log(a+b);

// subtraction
console.log(a-b);

// multiplication 
console.log(a*b);

// division
console.log(a/b);

// modulus
console.log(a%b);

// let num = 52.3;
// let num1= parseInt(num);
// let num2= parseFloat(num);
// console.log(num1);
// console.log(num2);

// Q no : 3

// a. Declare a variable
let myNumber;

// b. Show the value of variable
console.log("Value after variable declaration is: " + myNumber);

// c. Initialize the variable
myNumber = 5;

// d. Show the initial value
console.log("Initial value: " + myNumber);

// e. Increment the variable
myNumber++;

// f. Show value after increment
console.log("Value after increment is: " + myNumber);

// g. Add 7 to the variable
myNumber += 7;

// h. Show value after addition
console.log("Value after addition is: " + myNumber);

// i. Decrement the variable
myNumber--;

// j. Show value after decrement
console.log("Value after decrement is: " + myNumber);

// k. Show the remainder after dividing by 3
var remainder = myNumber % 3;

// l. Output remainder
console.log("The remainder is: " + remainder);

// Q no 4

// Store ticket price in a variable
let ticketPrice = 600;

// Calculate total cost for 5 tickets
let totalCost = ticketPrice * 5;

// Display the output
console.log(totalCost);

// Q no 5

let number = prompt("Enter a number to display its multiplication table:");
number = parseInt(number);

if (!isNaN(number)) {
  document.write(`<h2>Multiplication Table of ${number}</h2>`);
  for (let i = 1; i <= 10; i++) {
    document.write(`${number} x ${i} = ${number * i} <br>`);
  }
} else {
  document.write("Invalid input. Please enter a valid number.");
}

// Q no : 6

// a. Store a Celsius temperature into a variable
let celsius = 30;

// b. Convert it to Fahrenheit & output “NNoC is NNoF”
let fahrenheitFromCelsius = (celsius * 9/5) + 32;
document.write(`${celsius}°C is ${fahrenheitFromCelsius}°F<br>`);

// c. Now store a Fahrenheit temperature into a variable
let fahrenheit = 86;

// d. Convert it to Celsius & output “NNoF is NNoC”
let celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;
document.write(`${fahrenheit}°F is ${celsiusFromFahrenheit}°C`);

// Q no : 7

// a. Price of item 1
let priceItem1 = 650;

// b. Price of item 2
let priceItem2 = 100;

// c. Ordered quantity of item 1
let quantityItem1 = 3;

// d. Ordered Quantity of item 2
let quantityItem2 = 7;

// e. Shipping charges
let shippingCharges = 100;

// Calculate total cost
let totalPrice = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// Display the receipt in the browser
document.write(`<h2>Shopping Cart</h2>`);
document.write(`Price of item 1 is ${priceItem1}<br>`);
document.write(`Quantity of item 1 is ${quantityItem1}<br>`);
document.write(`Price of item 2 is ${priceItem2}<br>`);
document.write(`Quantity of item 2 is ${quantityItem2}<br>`);
document.write(`Shipping Charges ${shippingCharges}<br><br>`);
document.write(`Total cost of your order is ${totalPrice}`);

// Q no : 8

// Store total marks & marks obtained
let totalMarks = 500;
let marksObtained = 410;

// Compute percentage
let percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write(`<h2>Marks Sheet</h2>`);
document.write(`Total Marks: ${totalMarks}<br>`);
document.write(`Marks Obtained: ${marksObtained}<br>`);
document.write(`Percentage: ${percentage}%`);

// Q no : 9

// Currency conversion in a single expression
let totalPKR = (10 * 104.80) + (25 * 28);

// Display the result in the browser
document.write(`<h2>Currency in PKR</h2>`);
document.write(`Total Currency in PKR: ${totalPKR}`);

// Q no : 10

// Initialize a variable with some number
let Number = 10;

// Perform all calculations in a single expression
let result = ((Number + 5) * 10) / 2;

// Display the result in the browser
document.write(`<h2>Arithmetic Operations</h2>`);
document.write(`Result: ${result}`);

// Q no : 11

// a. Store the current year in a variable
let currentYear = 2025;

// b. Store their birth year in a variable
let birthYear = 2004;

// c. Calculate their 2 possible ages
let age1 = currentYear - birthYear;
let age2 = age1 - 1;

// Output the result
document.write(`<h2>Age Calculator</h2>`);
document.write(`They are either ${age2} or ${age1} years old.`);

// Q no : 12

// a. Store a radius into a variable
let radius = 10;
let pi = 3.142;

// b. Calculate the circumference
let circumference = 2 * pi * radius;

// Calculate the area
let area = pi * radius * radius;

// Output the results
document.write(`<h2>The Geometrizer</h2>`);
document.write(`Radius of circle: ${radius}<br>`);
document.write(`The circumference is ${circumference}<br>`);
document.write(`The area is ${area}`);

// Q no : 13

// a. Store your favorite snack into a variable
let favoriteSnack = "Chocolate Chip Cookies";

// b. Store your current age into a variable
let currentAge = 21;

// c. Store a maximum age into a variable
let maxAge = 80;

// d. Store an estimated amount per day (as a number)
let amountPerDay = 2;

// e. Calculate total snacks needed for the rest of life
let yearsRemaining = maxAge - currentAge;
let totalSnacks = yearsRemaining * 365 * amountPerDay;

// Output the result
document.write(`<h2>The Lifetime Supply Calculator</h2>`);
document.write(`Favorite Snack: ${favoriteSnack}<br>`);
document.write(`Current Age: ${currentAge}<br>`);
document.write(`Estimated Maximum Age: ${maxAge}<br>`);
document.write(`Amount per day: ${amountPerDay}<br>`);
document.write(`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);
