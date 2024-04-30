/* Q 10
This program print addition, subtraction, multiplication,
 and division*/

console.log(4+4);
console.log(16-8);
console.log(4*2);
console.log(16/2);

//This program print My favorite number

let favoriteNum: number = 7;
console.log(`My Favorite Number Is ${favoriteNum}`)

/* Q 11
Names: Store the names of a few of your friends in an array 
called names.*/

let name1: string[] = ["Nabiha","Aflah","Hoorain"];
for(let i = 0; i <name1.length; i++) {
    console.log(name1[i])
}

/* Q 12
Greetings: Use the array from Exercise 11. Instead of just
printing each person’s name, print a message to them.*/

let names: string[] = ["Zaviyar","Haseeb","Hussain"];
for(let name of names){
    console.log(`Dear ${name} I invite to dinner`)
}