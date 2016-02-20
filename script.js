var exLength = function(){
	var exTest = "Here's an example of .length"
	// This string has a length of 28 and so 28 will be pushed to the console
	console.log(exTest.length);
}
var exConsolelog = function(){
	// console.log pushes things to the console, it can push variables, 
	// strings, intigers, functions just about anything
	// Here we are pushing exLength to the console
	console.log(exLength())
}
var exPromptSplit = function(astring){
	astring=prompt("Enter a string you want split");
	// Here I resssagin the variable astring to equal it's split verson
	// Notice that I have to put empty qutations marks in parathensis at the end of that
	astring=astring.split("");
	console.log(astring);
	return astring;
	// Once return is entered into a funciton that exits the funciton and exectues the next line of code
	// after the function 
	console.log("Hello world")// notice how the next line doesn't get executed inside the function	
}
var exConfirm = function(confirmStatement){
	confirm(confirmStatement);
	console.log(confirmStatement + " " + "Is now logged to the console");
	return confirmStatement;
}
var exComparisonsBoolsIfElse = function(){
	//  If the length of both of these statments is greater than x characters return true
	var x=prompt("enter the length both strings have to be greater than");
	var str1="Hello World";
	var str2=prompt("Enter a string");
	if(str1.length > x && str2.length > x){
		console.log("Both stringers are great than "  + x + " characters");
	}
	else if(str1.length < x && str2.length < x){
		console.log("Both stringers are less than "  + x + " characters");
	}

}
var exSwitch = function(){
	// First we define a varible that is our input for the switch in this case we'll 
	// use the example of types of water: bottled, tap, or distilled
	var waterType=prompt("What type of water do you prefer").toUpperCase();// We're making everything to uppercase so it doesn't mater what case you use when you input
	// Put the switch in with our variable 
	switch(waterType){
		// Each case is an option for the variable waterType when that option is inputed the result will be our output
		case "BOTTLED": // If bottled is our input
			return console.log("Bottled water is good, but it's expensive");
			break;
		case "DISTILLED": // If Distilled is our input
			return console.log("Distilled is good for some applications, but better off not drinking as it will leech you of minirals.");
			break;
		case "TAP":
			return console.log("Tap water is digusting");
			break;
		default:
			return console.log("Sorry that water is not covered here");
	}

}
var exModuloisNaN = function(){
	// Modulo uses the % symbol instead of the / symbol to divide by something and then return the remainder
	// One use for this is to determine if a number is odd or even.
	var oddOrEvenNumber=prompt("Please enter an odd or even number")
	if(oddOrEvenNumber % 2 === 1){
		console.log("This is an odd number")
	}
	else if(oddOrEvenNumber % 2 === 0){
		console.log("This is an even number")
	}
	// Here is our example of isNaN which stands for is not a number, the statement evaulated if it is not a number
	// will returnt he vaule of true and should execute the statement in our curley brackets
	// Notice how inside the else if parathensis it is not required that we write isNaN(oddOrEvenNumber)===true
	// If a statement inside the () evaulates to true, then it will exectue our if statement
	else if(isNaN(oddOrEvenNumber)){
		console.log("This is not a number")
	}
}
// Notice in the () after the funciton I put three variables. I can then call the funciton with those items 
// by using exSubstring(str1,str2,str3)
var exSubstring = function(str1,str2,str3){
	// Let's extract ove from the 1st string, the string begins at zero and
	// divides itsef at one addtiontal space as I increase the number
	console.log(str1.substring(1,4)); // Space one is after the "l" in love and space 4 is after the "e" which is the 4th letter
	console.log(str2.substring(0,6)); // This will extract "I hate"
	console.log(str3.substring(0,8)); // Grab the "Whatever"
}
// Here is an example of how to use for loops I'll count from 0 to 10 by 1s and from 10 to 0 by 2s
// using this method is also an easy way of counting even or odd numbers. 
// Keep in mind that I can take a variable and change it's value insted of using x=x+y
// I can use x+=y or x++ if y=1 this also works for minus
var exForLoop = function(){
	// I is commonly used for a smiple local loop, it stands for "Iterate"
	for(i=0; i<10; i++){
		console.log(i)
	}
	for(i=10; i>0; i-=2){
		console.log(i)
	}
}
var exArraysPush = function(){
	// Here is our array with four elements
	var anArray = ["Love", "Hate", 69, 88];
	console.log(anArray)
	// We can print the individual elements in an array but doing this:
	console.log(anArray[3])
	// Notice that the array elements start at 0 so in this array with 4 elements, element number 3 is 8
	// this is called zero based indexing
	// Sometimes it's nifty to loop through our elements, but make sure that it only loops the number of times
	// euqal to the length of the array
	for (i=0; i<anArray.length; i++){
		console.log(anArray[i])
	}
	anArray.push("silence",1)
	console.log("the length or number of elements in the array is now" + " " + anArray.length);
	console.log("and those elements are: " + anArray);
	// Push will "Push" information into an arry as it's entered
}

var exDoWhileLoop = function(){
// While loops say, while a funciton is true loop until that funciton becomes false
// First we delcare our variable "i"
var i=5
// then we say, while i>0 we will loop it's vaule is currently 5
while(i>0){
// as we start the loop we subtract 1 from i for each time we loop
console.log(i)
i--
}
// the loop exits when we get to zero
// We can make a do/while loop that will do the same thing as a while loop, but it will loop through at least once no matter while
do{
	console.log("make love to cats " + i)
	}while(i>10) //even though i is less than 10 it will still loop one time
}

var asVowels = function(){
	var vowels="aeiou".split("");
	console.log(vowels);

	var hasOneVowel = function(str){
		var result;
		for(i=0; i<str.length; i++){
			console.log(str[i])
		}
	return result;
	};
	console.log(hasOneVowel("test"))
	console.log(hasOneVowel("AAA"))
	console.log(hasOneVowel("123"))
	console.log(hasOneVowel("ccc"))
}

var exObjects = function(){
	var object1 = {
		sizeFeet : 32,
		weightLbs : 500,
		speedMaxMPH : 200,
		};
	var object2 = {
		// Sound system
		numSpeakers : 10,
		wattageOutput : 2000,
		brandName : {
			speakers : "Bose",
			reciver: "Denon",
			}
		};
	var object3 = new Object();
	object3["Legs"]=10
	object3.coat="fur"
	object3["speed"]="fast"
	object3.teeth="sharp"

	console.log(object1)
	console.log(object2)
	console.log(object3)

	var dog = {
		legs : 4,
		coat : {
			kind : "hair",
			color : "black",
			},
		 eyes : "blue"
	}
	var myOwnObject = new Object();
myOwnObject["kind"]="spiritual"
myOwnObject.size="infinite"
myOwnObject = {
    religion : {
        christanity : "stupid",
        judaism : "old",
        buddhasm : "ancient",
        newAge : "bullshit",
        nothing : "Don't make something out of it" 
        },
    fun : "yes but only sexually"
    }

}
var asContactList = function(){
var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Gates',
        number: '800.555.1212',
        address: ['<street>','<city>','<state>','<zip>']
        },
    steve: {
        firstName: 'Steve',
        lastName: 'Jorbs',
        number: '800.555.1313',
        address: ['<street>','<city>','<state>','<zip>']
        },
    dan: {
        firstName: 'Daniel',
        lastName: 'Groovy',
        number: '312.555.1222',
        address: ['<street>','<city>','<state>','<zip>']
        }
    };

var search = function(name){
    for (i in friends){
        if(i === name){
            console.log('MATCH!\n\n'+
            			'First Name: ' + friends[i].firstName + '\n' +
            			'Last Name: ' + friends[i].lastName + '\n' +
            			'Number: ' + friends[i].number + '\n' +
            			'Address: ' + friends[i].address);
            return true;
            }
        }
    };
search('steve') 	
}
// Demonstration of the NOT "!" Function
var exNotOrOperator = function(){
	var flying = prompt("Do you have wings that work? Y/Yes N/No").toUpperCase()
	console.log(flying)
	if(!(flying==="YES" || flying==="Y")){ //Look at how I had to use the not "!" here with the parenthesis
		console.log("Looks like you're on the ground son");
		return false;
	}
	else{
		console.log("bro you're flying that's awesome!")
		return true;
		}
}
var fizzBuzz = function(){
for(i=0; i<=20; i++){
     console.log(i)
    if(i%3===0 && i%5===0){console.log("FizzBuzz");}
    else if(i%3===0){console.log("Fizz");}
    else if(i%5===0){console.log("Buzz");}
    }
}
var exSwitch2 = function(){
var dogs=prompt("What kind of dog do you have?").toUpperCase();
console.log(dogs)
switch(dogs){
	case 'RABID':
	  return console.log('Even if they love you they will still bite you and give you rabies');
	  break;
	case 'FAMILY':
	  return console.log('Usually friendly, but lazy probbaly not going to defend the house');
	  break;
	case 'ATTACK':
	  return console.log('Really great for hunting down criminals, and in dog fights\n'+
	  					 'but more likely to bite their owner if kept in the house,\n'+
	  					 'keep them in the back yard and away from chidlren.');
	  break;
	case 'GUARD':
	  return console.log('They are usually great as family dogs, but will also attack\n'+
	  				     'intuders or anyone trying to attack thier masters, really great\n'+
	  				     'balance of attack and family');
	  break;
	case 'STREY':
	  return console.log('If they are young they are tasty, but the older ones are very gamey and stringy.\n'+
	  					 'The older ones are also very hard to train, much like humans who have been\n'+
	  					 'out on the streets for most of thier lives.' );
	  break;
	default:
	  return console.log('I love dogs')

	}
}
var randomNumberGenerator = function(){
randomNumberMin=prompt('Minimum random number range?');
randomNumberMin=parseInt(randomNumberMin)
randomNumberMax=prompt("Maximum random number range?");
randomNumberMax=parseInt(randomNumberMax)
randomNumberOutputQuantity=parseInt(prompt('How many of these do you want?'))

for(x=randomNumberOutputQuantity;x>0;x--){
var randomNumberOutput=(Math.floor(Math.random()*(randomNumberMax-randomNumberMin+1)))+randomNumberMin
console.log(randomNumberOutput)
	}
}

var asAddressBook = function(){
	var bob = {
		firstName: "Bob",
		lastName: "Jones",
		phoneNumber: "(650) 777-7777",
		email: "bob.jones@example.com"
	};

	var mary = {
		firstName: "Mary",
		lastName: "Johnson",
		phoneNumber: "(650) 888-8888",
		email: "mary.johnson@example.com"
	};

	var contacts = [bob, mary];

	function printPerson(person) {
		console.log(person.firstName + " " + person.lastName);
	}

	function list() {
		var contactsLength = contacts.length;
		for (var i = 0; i < contactsLength; i++) {
			printPerson(contacts[i]);
		}
	}

	/*Create a search function
	then call it passing "Jones"*/
	function search(lastName){
		var contactsLength = contacts.length;
		for (var i = 0; i < contactsLength; i++) {
			if(contacts[i].lastName === lastName){
				printPerson(contacts[i]);
				}
		}
	}
	// contacts[2] = {
	// 	firstName: 'dan',
	// 	lastName: 'Groovey'

	// };
	// console.log(contacts[2])
	function add(firstName, lastName, phoneNumber, email){
		contacts[2] = {
		firstName: firstName,
		lastName: lastName,
		phoneNumber: phoneNumber,
		email: email
		}
	}
	add('dan','groovey','3125551212','dan@dan.com')
	list()
}

var asCashRegister = function{

	var cashRegister = {
	    total:0,
	    lastTransactionAmount:0,
	    add: function(itemCost) {
	        this.total +=  itemCost;
	        this.lastTransactionAmount = itemCost;
	    },
	    lastTransactionAmmount: function{
	        
	        },
	    scan: function(item,quantity) {
	        switch (item) {
	        case "eggs": this.add(0.98 * quantity); break;
	        case "milk": this.add(1.23 * quantity); break;
	        case "magazine": this.add(4.99 * quantity); break;
	        case "chocolate": this.add(0.45 * quantity); break;
	        }
	        return true;
	    },
	    voidLastTransaction: function(){
	        this.total = this.total - this.lastTransactionAmount;
	        } 
	    
	};

// 	cashRegister.scan('eggs',1);
// 	cashRegister.scan('milk',1);
// 	cashRegister.scan('magazine',1);
// 	cashRegister.scan('chocolate',4);
// 	cashRegister.voidLastTransaction();
// 	//Void the last transaction and then add 3 instead
// 	cashRegister.scan('chocolate',3);

// 	//Show the total bill
// 	console.log('Your bill is '+cashRegister.total);
//  }

function asFindMode(){
	function mode(mode){
		var numberCountArray=[]
		for(i=0; i<10; i++){
			numberCountArray[i]=0;
		}
		for(i=0; i<mode.length; i++){
		numberCountArray[mode[i]-1]=numberCountArray[mode[i]-1]+1
		}
		function getMaxOfArray(arr) {
			return Math.max.apply(null, arr);
		}
		var arrMax = getMaxOfArray(numberCountArray)
		for(i=0; i<numberCountArray.length; i++){
			if(numberCountArray[i] === arrMax){
				console.log(i+1)
			}
		}
	}
	mode([1,1,2,2,3,4,5])
}

function asPath(){
    function findPath(matrix) {
        var x=1;
        var y=1;
        var pathStep=1;
        var whileOut=0;
        while (x<matrix[0].length && y<matrix.length && whileOut<1000){
            console.log('path step: '+pathStep)
            pathStep++
            console.log( 'current column X: ' + [x] + ' current row Y: ' + [y] +' Current Value: ' + matrix[y][x])
        if((matrix[y][x])+1 === (matrix[y+1][x])){
            console.log('love y+1')
            y++
            whileOut++
            }//then whichever one it equals start the loop at that spot and loop again
            else if((matrix[y][x])+1 === (matrix[y][x+1])){
                 console.log('hate x+1')
                 x++
                 whileOut++
            }
            else if((matrix[y][x])+1 === (matrix[y][x-1])){
                 console.log(' x-1')
                 x--
                 whileOut++
            }
            else if((matrix[y][x])+1 === (matrix[y-1][x])){
                 console.log('y-1')
                 y--
                 whileOut++
            }
            else{
                whileOut=1000 
                console.log("neither")
            } 

        }

    }

    findPath([

    [0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,0,0,0,0],
    [0,3,0,0,0,0,0,0,0,0],
    [0,4,0,0,0,0,0,0,0,0],
    [0,5,0,13,14,15,0,0,0,0],
    [0,6,0,12,0,0,0,0,0,0],
    [0,7,0,11,0,0,0,0,0,0],
    [0,8,9,10,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],

    ])

}

// asFindPath()
// asFindMode()
// randomNumberGenerator()
// exSwitch2()
// exNotOrOperator()
// exDoWhileLoop()
// exArraysPush()
// exForLoop()
// exSubstring("love","I hate you","Whatever you want")// Three strings here
// exModuloisNaN()
// exSwitch()
// exComparisonsBoolsIfElse()
// exConfirm("You are awesome")
// exPromptSplit() // this will also have a length of 28 because we are calling the same function to the console
// exConsolelog()
// exLength()
// asVowels() // This is an assignment from coding house 101 part 2 that is currently incomplete
// asContactList()
// exObjects()
// asFizzBuzz()
// by value (primitives)
// asAddressBook()
// asCashRegister()

// Setup


//
//  This script is broken right now.
//