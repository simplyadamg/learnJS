var x="love"
while(!(user === "1" || user === "2" || user === "3")){
    var user=prompt("What would you like to do? \n1.Pay\n2.Fight\n3.Run").toUpperCase();
    if(!(user === "1" || user === "2" || user === "3"))
        {
        alert("Wrong answer schmuck, try again!");
        }
    };

var defResponse=("<br>The troll doesn't like your answer and devours your nutsack. You can no longer have children")
switch(user){
    case '1': //pay
        while(!(haveMoney === "YES" || haveMoney === "NO")){
        var haveMoney = prompt ("Do you have any money?").toUpperCase();
        if(!(haveMoney === "YES" || haveMoney === "NO"))
            {
            alert("Wrong answer schmuck, try again!");
            }
        }
        var trollDollars = false;
        if (haveMoney === "YES"){
            while(!(trollDollars === "YES" || trollDollars === "NO")){
            var trollDollars = prompt ("Is it in troll dollars?").toUpperCase();
                if(x==="1")
                {
                alert("Wrong answer schmuck, try again!");
                }
            }
        }
        if(haveMoney === "YES" && trollDollars === "YES"){
            document.write("<br>The troll takes a hefty sum and with a mangled grin allows you to pass");
            }
        else{
            document.write(defResponse)
            }
        break;
    case '2': //fight
        while(!(strong === "YES" || strong === "NO")){
        var strong=prompt("Are you strong?").toUpperCase();
        if!(strong === "YES" || strong === "NO"))
            {
            alert("Wrong answer schmuck, try again!");
            }
        }
        while(!(weaponChoice === "1" || weaponChoice === "2" || weaponChoice === "3")){
        var weaponChoice=prompt("Choose a weapon:\n\
                                 1. Hands\n\
                                 2. Sword\n\
                                 3. Magic Staff").toUpperCase();
        if(!(weaponChoice === "1" || weaponChoice === "2" || weaponChoice === "3"))
            {
            alert("Wrong answer schmuck, try again!");
            }
        };
        if(strong === "YES" && weaponChoice === "1"){
            document.write("<br>You pimp slap the troll and take his hos and his money, you call the troll a bitch and roll out")
            }
        if(strong === "YES" && weaponChoice === "2"){
                document.write("<br>You mightily weild the sword and relieve the troll of his ugly head, the bitches run off screaming in horror.")
                }
        if(strong === "YES" && weaponChoice === "3"){
                console.log(strong)
                document.write('<br>Your clumsy hands grasp for the majestic staff and you shout "abracadabra"<br>');
                document.write('The troll chuckles and watches as a little spark fizzles out of the tip, <br>he grabs the staff from you and shouts "abracadabra babra"');
                document.write('<br>A wave of magical energy knocks you to the ground and the troll laughs while devouring your nutsack, you can no longer have children');
                }
        if(strong === "NO" && weaponChoice==="3"){
                document.write("<br>You brandish the staff as its radience illimunates the entirety of the bridge, the troll cowers in fear and offers up his bitches if you promise not to use it's now power on him")
                }
        break;
    case '3': //run
        while(!(fast === "YES" || fast === "NO")){
        var fast = prompt("Are You fast?").toUpperCase();
        if(!(fast === "YES" || fast === "NO"))
            {
            alert("Wrong answer schmuck, try again!");
            }
        }
        while(!(headStart === "YES" || headStart === "NO")){
        var headStart = prompt("Do you get a head start?").toUpperCase();
        if(!(headStart === "YES" || headStart === "NO"))
            {
            alert("Wrong answer schmuck, try again!");
            }
        }
        console.log(fast);
        console.log(headStart);
        if(fast === "YES" && headStart === "YES"){
            document.write("<br>You run like a coward, but you drop your wallet full of troll dollars");  
        }
        if(fast === "YES"  && headStart === "NO"){
            document.write("<br>You turn to run but the troll is instantly on your heels<br>The troll devours your nutsack. You can no longer have children")
        }
        
        break;
    default:
        document.write(defResponse)
    
    }