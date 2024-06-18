/* Day 41 
Question 121:
Implement a for loop that counts from 1 to 10 but skips number 5 using the continue statement.

Explain & TIP: The continue statement can be used to skip over an iteration in a loop. It's particularly handy when you want to ignore specific cases without stopping the entire loop.*/

// for loop
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

/* Question 122:
Use a while loop to count down from 10 to 1 and breaks the loop when it reaches 5.

Explain & TIP: The break statement terminates the loop immediately. This is useful for stopping a loop when a certain condition is met, even if the loop's original termination condition hasn't been reached yet.*/

// while loop
let counts: number = 10;

while (counts > 0) {
  if (counts === 5) {
    break;
  }
  console.log(counts);
  counts--;
}

/* Question 123:
Create a loop that iterates through a string and stops when it finds the first vowel.

Explain & TIP: To find a specific character in a string, you can iterate through each character and use a condition to check for vowels. The loop can stop once a vowel is found.*/

// for loop over characters in string and check for vowels
function vowels(str: string) {
  const vowel = "aeiou";
  for (let char of str) {
    if (vowel.includes(char)) {
      console.log(`first letter found ${char}`);
      break;
    }
    console.log(char);
  }
}

vowels("asysh");
