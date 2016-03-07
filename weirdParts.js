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







=======
// function randomNumberGenerator(){
// randomNumberMin=1;
// randomNumberMin=parseInt(randomNumberMin)
// randomNumberMax=4;
// randomNumberMax=parseInt(randomNumberMax)
// randomNumberOutputQuantity=1;

// for(x=randomNumberOutputQuantity;x>0;x--){
// var randomNumberOutput=(Math.floor(Math.random()*(randomNumberMax-randomNumberMin+1)))+randomNumberMin
// return randomNumberOutput
// 	}
// }


// function asPath(){
//     function findPath(matrix) {
//         var x=1;
//         var y=1;
//         var pathStep=1;
//         var whileOut=0;
//         while (x<matrix[0].length && y<matrix.length && whileOut<1000){
//             console.log('path step: '+pathStep)
//             pathStep++
//             console.log( 'current column X: ' + [x] + ' current row Y: ' + [y] +' Current Value: ' + matrix[y][x])
//         if((matrix[y][x])+1 === (matrix[y+1][x])){
//             console.log('love y+1')
//             y++
//             whileOut++
//             }//then whichever one it equals start the loop at that spot and loop again
//             else if((matrix[y][x])+1 === (matrix[y][x+1])){
//                  console.log('hate x+1')
//                  x++
//                  whileOut++
//             }
//             else if((matrix[y][x])+1 === (matrix[y][x-1])){
//                  console.log(' x-1')
//                  x--
//                  whileOut++
//             }
//             else if((matrix[y][x])+1 === (matrix[y-1][x])){
//                  console.log('y-1')
//                  y--
//                  whileOut++
//             }
//             else{
//                 whileOut=1000 
//                 console.log("neither")
//             } 

//         }

//     }
//     function createMap(){
//         matrixMap=[

//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],
//         [0,0,0,0,0,0,0,0,0,0,'<br>'],

//         ]
//         randomDirection=randomNumberGenerator()
//         console.log(randomDirection)
        

//     }

//     createMap()
// //findPath(matrixMap)
// }
// asPath()

// Setup
// Setup
// Setup
//Setup
//Setup
// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function update(id, prop, value) {

if (value === ""){
    console.log(collection[1245].artist)
    delete collection[id].prop;
    console.log(collection[1245].artist)
}

  return collection;
}

// Alter values below to test your code
update(1245, "artist", "");






