// function greet(firstname, lastname, language){
//     language = language || 'en';

//     if (language === 'en'){
//         console.log('Hello ' + firstname + ' ' + lastname)
//     }

//     if (language === 'es'){
//         console.log('Hola ' + firstname + ' ' + lastname)
//     }


// }

// function greetEnglish(firstname,lastname){
//     greet(firstname, lastname, 'en')
// }

// function greetSpanish(firstname, lastname){
//     greet(firstname, lastname, 'es')
// }
// greetEnglish('John', 'Doe');
// greetSpanish('John', 'Doe')


// // Syntax parser inserts semicolon after return, this is a
// // problem with automatic semicolon insertion
// function getPerson(){
//     return
//     {
//         firstname:"tony"
//     }
// }
// console.log(getPerson());
// //Helpful to always put curley brackets directly after the end of function.

function rot13(str) { // LBH QVQ VG!
  return str;
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC");
// arr=[1,2,3]
// x = arr[0]
// y = arr[1]
// z = arr[2]
// console.log(String.fromCharCode(x, y, z))

// Faking Namespaces
// Container for vars and functions JS doesn't use these because of the nature of objects in JS

//First class functions
//JS uses First class functions which call be passed around, created on the fly and generally used in the same way sas other types. 
//Can be anonymous, or without a name.
//Code: are where the actual lines of code sit.
//The function is an object with many properties, code is one of those properties but it is not the funciton. 
//code is invokeable function()

//Function statment does work... A function expression creates a value that is not necessarly saved to a variable. 
//Mutate - to change something and if it's immuitable that means it can't be changed
function theTimeNow(){
var dateString = "The time right now is: ";

var newDate = new Date();

// Get the month, day, and year.

dateString += newDate.getHours() + ":";
dateString += newDate.getMinutes();

return dateString;

}












