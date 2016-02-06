var randomNumberGenerator = function(){
randomNumberMin=1//('Minimum random number range?');
randomNumberMin=parseInt(randomNumberMin)
randomNumberMax=3//("Maximum random number range?");
randomNumberMax=parseInt(randomNumberMax)
randomNumberOutputQuantity=1//parseInt(prompt('How many of these do you want?'))

for(x=randomNumberOutputQuantity;x>0;x--){
var randomNumberOutput=(Math.floor(Math.random()*(randomNumberMax-randomNumberMin+1)))+randomNumberMin
return randomNumberOutput;
	}
}
randomNumberGenerator()

var RPS1 = 'Rock'
var RPS2 = 'Paper'
var RPS3 = 'Scissors'


var userInput;
var computerInput=randomNumberGenerator();
while(!(userInput==='ROCK' || userInput==='PAPER' || userInput==='SCISSORS')){
userInput=prompt('Which Do you pick:\nRock\nPaper\nScissors').toUpperCase()
}
// if(userInput='ROCK'){var userInput=1}
// if(userInput='PAPER'){var userInput=2}
// if(userInput='SCISSORS'){var userInput=3}
console.log(computerInput)
var rpsGameLogic = function(userInput,computerInput){
	console.log(userInput + ' ' + computerInput)
	if(userInput==='ROCK'){
		switch(computerInput){
			case 1:
				return document.write('<br>' + RPS1 + ' vs ' + RPS1 + "<br>Its a tie nobody wins" );
				break;
			case 2:
				return document.write('<br>' + RPS1 + ' vs ' + RPS2 + '<br>' +RPS2 + ' Wins!!!' );
				break;
			case 3:
				return document.write('<br>' + RPS1 + ' vs ' + RPS3 + '<br>' +RPS1 + ' Wins!!!' );
				break;
		}
	}
	else if(userInput==='PAPER'){
		switch(computerInput){
			case 1:
				return document.write('<br>' + RPS2 + ' vs ' + RPS1 + '<br>' +RPS2 + ' Wins!!!' );
				break;
			case 2:
				return document.write('<br>' + RPS2 + ' vs ' + RPS2 + "<br>Its a tie nobody wins" );
				break;
			case 3:
				return document.write('<br>' + RPS2 + ' vs ' + RPS3 + '<br>' +RPS3 + ' Wins!!!' );
				break;
		}
	}
	else if(userInput==='SCISSORS'){
		switch(computerInput){
			case 1:
				return document.write('<br>' + RPS3 + ' vs ' + RPS1 + '<br>' +RPS1 + ' Wins!!!' );
				break;
			case 2:
				return document.write('<br>' + RPS3 + ' vs ' + RPS2 + '<br>' +RPS3 + ' Wins!!!' );
				break;
			case 3:
				return document.write('<br>' + RPS3 + ' vs ' + RPS3 + "<br>Its a tie nobody wins" );
				break;
			
		}
	}
	else{
		return console.log('love')
		}
}
rpsGameLogic(userInput,computerInput);
