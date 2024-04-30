/* Q 25
Alien Colors #1: Imagine an alien was just shot down in a game.
Assign 'green', 'yellow', or 'red' to a variable called
alien_color.

Explain & TIP: Use an if statement to check the alien's color. 
This introduces you to simple conditionals.*/

let alien_color = "red"
if(alien_color === "red"){
    console.log("you earn 10 points");
    
}
//No output because the condition is false
alien_color == "red"
if (alien_color == "green") {
    
}

/*Q 26 
Alien Colors #2: Choose a color for an alien, then write an 
if-else chain.

Explain & TIP: Expanding on the previous exercise, if-else 
chains allow you to handle multiple conditions.*/

let alien_color2 = "Yellow";

if (alien_color2 == "Yellow"){
    console.log("You just earned 5 points for shooting the alien!");
}else{
    console.log("you earn 10 points");
    
}

 alien_color2 = "red";

if (alien_color2 == "yellow") {
    console.log("you just earned 5 points for shooting the alien.");
}else{
    console.log("you earn 20 points");
    
}

/*Q 27
Alien Colors #3: Convert your if-else chain to handle three
 colors: green, yellow,red.
Explain & TIP: This exercise introduces you to handling multiple
specific conditions in an if-else chain.*/

//Condition 01
let alien_color3 = "Red";
if (alien_color3 == "red") {
    console.log("you earn 35 points");
}else if(alien_color3 == "yellow"){
    console.log("you win the game");
}else if(alien_color3 == "green"){
    console.log("you lose the game");
    
}

//Condition 02

 alien_color3 = "green";
if (alien_color3 == "yellow") {
    console.log("you lose the game");
}else if(alien_color3 == "green"){
    console.log("you earn 30 points");
}else if(alien_color3 == "red"){
    console.log("you lose the game");
    
}

//COndition 03

 alien_color3 = "yellow";
if (alien_color3 == "yellow") {
    console.log("you lose the game");
}else if(alien_color3 == "red"){
    console.log("you win the game");
}else if(alien_color3 == "green"){
    console.log("you lose the game");
    
}else{
    console.log("game over");
    
}
   
    


    
    



