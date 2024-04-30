/* Q 31 
No Users: Ensure your user list isn’t empty.*/

//Creating a Array
let usernames: string[] = ["Admin", "Erik", "john", "jackson", "johnson"];

//Creating Empty Array
usernames = [];

//Applying If Else chain and forEach loop
if (usernames.length === 0) {
  console.log("\nyour array is empty we need to find some users!");
} else {
  usernames.forEach((username) => {
    if (username === "admin") {
      console.log(`\nhello ${username} would you like to see a status report?`);
    } else {
      console.log(`\nHellow ${username} , thank you for logging in again.`);
    }
  });
}

/* Q 32
Checking Usernames: Do the following to create a program that simulates 
how websites ensure that everyone has a unique username.*/

//Creating Array of current users

let current_users: string[] = ["Ali", "Sheeza", "Fariyal", "Zaviyar", "Hoor"];

let new_users = ["Mash", "Aflah", "Zaviyar", "Ali", "Fatima"];

new_users.forEach((name) => {
  if (
    current_users.some(
      (currentUsers) => currentUsers.toLowerCase() === name.toLowerCase()
    )
  ) {
    console.log(`\n${name}  Enter a new user`);
  } else {
    console.log(`\n${name} is available`);
  }
});

/* Q 33
Ordinal Numbers: Display numbers with their ordinal suffixes.*/

// create an Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Using For Loop
for (let number of numbers)
  if (number === 1) {
    console.log(`${number}st`);
  } else if (number === 2) {
    console.log(`${number}nd`);
  } else if (number === 3) {
    console.log(`${number}rd`);
  } else {
    console.log(`${number}th`);
  }
