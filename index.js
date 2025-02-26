// Marc Joemil Mendoza
// 2023 - 13729

// UUID
import { v4 as uuidv4 } from 'uuid';

// Validator
import validator from 'validator'

// Readline for user input
import readline from "node:readline";import { stdin as input, stdout as output } from "node:process";


// 1st Function
function generateUniqueID(firstName, lastName){
    var random = uuidv4();
    var firstString = firstName[0].toLowerCase();
    var secondString = lastName.toLowerCase();
    var finalstring = firstString.concat(secondString);
    finalstring = finalstring.concat(random.slice(0,8));
    console.log("UID:", finalstring);
}

// Main Code
const rl = readline.createInterface({ input, output });

rl.question("Please enter your first name: ", (firstName) => {
    rl.question("Please enter your last name: ", (lastName) => {
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        generateUniqueID(firstName, lastName)
        rl.close();
    });
});


