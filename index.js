// Marc Joemil Mendoza
// 2023 - 13729

// UUID
import { v4 as uuidv4 } from 'uuid';

// Validator
import validator from 'validator'



// Create file.txt
import { appendFileSync } from 'node:fs';


// 1st Function
function generateUniqueID(firstName, lastName){
    var random = uuidv4();
    if (firstName.length != 0 && lastName.length != 0){
        var firstString = firstName[0].toLowerCase();
    } else {
        return null;
    }
    var secondString = lastName.toLowerCase();
    var finalstring = firstString.concat(secondString);
    finalstring = finalstring.concat(random.slice(0,8));
    console.log("UID:", finalstring);
    return finalstring;
}

// 2nd Function
function addAccount([firstName, lastName, email, age], uid){
    var user = [firstName, lastName, email, age]

    // Check for requirements
    var checker = false;
    var validEmail = false;
    var validAge = false;

    if ( user[0].length != 0 && user[1].length != 0 && user[2].length != 0 && user[3].length != 0){
        checker = true; 
    }
    console.log("Checker: ", checker);

    if (validator.isEmail(user[2])){
        validEmail = true;
    }
    console.log("Valid Email: ", validEmail);

    if (user[3] >= 18){
        validAge = true;
    }
    console.log("Valid Age: ", validAge);
    
    // Save
    if (checker == true && validEmail == true && validAge == true){
        user.push(uid);
        try {
            appendFileSync('text.txt', user.join(',') + '\n', 'utf8');
            console.log('The "data to append" was appended to file!');
          } catch (err) {
            console.error("Error writing to file:", err);
          } 
          return true;

    } else {
        return false;
    }
}

export default {generateUniqueID, addAccount};



