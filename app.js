const input = require('readline-sync');

// Ask name
let name = input.question("What is your name? ");
console.log("Hey " + name + "!");

// Ask 5 questions
let q1 = input.question("What is 2 + 2? ");
let q2 = input.question("Type the word hello: ");
let q3 = input.questionInt("Enter a number: ");
let q4 = input.question("What color do you like? ");
let q5 = input.question("type yes: ");

// Print answers
console.log("\nYour answers:");
console.log(q1);
console.log(q2);
console.log(q3);
console.log(q4);
console.log(q5);