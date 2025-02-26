// Index
import index from './index.js';
// Readline for user input
import readline from "node:readline";import { stdin as input, stdout as output } from "node:process";


// Main Code

const rl = readline.createInterface({ input, output });

rl.question("Please enter your first name: ", (firstName) => {
    rl.question("Please enter your last name: ", (lastName) => {
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        var uid = index.generateUniqueID(firstName, lastName);
        rl.question("Please enter your email: ", (email) => {
            rl.question("Please enter your age: ", (age)  => {
                console.log("Email:", email);
                console.log("Age:", age);
                index.addAccount([firstName, lastName, email, age], uid);
                rl.close();
            });   
        });     
    });
});

