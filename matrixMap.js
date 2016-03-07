function randomNumberGenerator(){
randomNumberMin=1;
randomNumberMin=parseInt(randomNumberMin);
randomNumberMax=4;
randomNumberMax=parseInt(randomNumberMax);
randomNumberOutputQuantity=1;

for(x=randomNumberOutputQuantity;x>0;x--){
var randomNumberOutput=(Math.floor(Math.random()*(randomNumberMax-randomNumberMin+1)))+randomNumberMin;
return randomNumberOutput;
	}
}


function asPath(){
    function findPath(matrix) {
        var x=1;
        var y=1;
        var pathStep=1;
        var whileOut=0;
        while (x<matrix[0].length && y<matrix.length && whileOut<1000){
            console.log('path step: '+pathStep);
            pathStep++;
            console.log( 'current column X: ' + [x] + ' current row Y: ' + [y] +' Current Value: ' + matrix[y][x]);
        if((matrix[y][x])+1 === (matrix[y+1][x])){
            console.log('love y+1');
            y++;
            whileOut++;
            }//then whichever one it equals start the loop at that spot and loop again
            else if((matrix[y][x])+1 === (matrix[y][x+1])){
                 console.log('hate x+1');
                 x++;
                 whileOut++;
            }
            else if((matrix[y][x])+1 === (matrix[y][x-1])){
                 console.log(' x-1');
                 x--;
                 whileOut++;
            }
            else if((matrix[y][x])+1 === (matrix[y-1][x])){
                 console.log('y-1');
                 y--;
                 whileOut++;
            }
            else{
                whileOut=1000 ;
                console.log("neither");
            } 

        }

    }
    function createMap(){
        matrixMap=[

        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],
        [0,0,0,0,0,0,0,0,0,0,'<br>'],

        ];
        randomDirection=randomNumberGenerator();
        console.log(randomDirection);
        

    }

    createMap();
findPath(matrixMap);
}
asPath();