/*Q 28
Stages of Life: Determine a person’s life stage with an if-else 
chain.

Explain & TIP: Use age to check the life stage. This practice 
shows how to handle multiple conditions with an if-else chain.*/

let myAge: number = 25;

if (myAge < 5){
    console.log("baby girl");
}else if(myAge < 15){
    console.log("toddler");
}else if(myAge < 19 ){
    console.log("kid");
}else if(myAge < 50){
    console.log("teenages");
    
}else{
    console.log("elder");
    
}

/*Q 29
Favorite Fruit: Create an array for your favorite fruits and 
check if certain fruits are included.

Explain & TIP: Arrays can store multiple items like fruit names.
Use if statements to check for specific fruits.*/

let favFruit : string[] = ["Apple","Banana","Kivi"]

if (favFruit.includes("Apple")) {
    console.log("you like Apple");
}
if (favFruit.includes("Kivi")) {
    console.log("you like Kivi");
}
if (favFruit.includes("Banana")) {
    console.log("you like banana");
}

/* Q 30
Hello Admin: Greet users differently, especially 'admin'.

Explain & TIP: Loop through usernames to personalize greetings.
This introduces looping and conditional logic together.*/

let usernames:string[] = ['user1','admin','user2','user3']

for(let username of usernames){
    if(username.toLowerCase() === 'admin'){
    console.log(`Hello ${username} would you like learn typescript`);
} else{
    console.log(`Hello ${username} you are learning python`);
    
}
}

