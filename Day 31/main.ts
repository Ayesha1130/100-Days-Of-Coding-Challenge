/* Day 31
Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.*/

// Create an array of fruits
let favoriteFruits: string[] = ["Apple", "Banana", "Kivi"];

// Add a new fruit to the end of the array
favoriteFruits.push("Orange");

// Print the array
console.log(favoriteFruits);

/* Question 92: Write a function to remove the last element from an array and return the removed element.*/

// Write a function to remove the last element from an array and return the removed element.
function fruit(str: string[]) {
  let removedElement = str.pop();
  return removedElement;
}
//  Removing the last fruit from the array
let fruits: string[] = ["Apple", "Banana", "Kivi"];

console.log(fruit(fruits)); // output Kivi

console.log(fruits); // output Apple Banana

/* Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".*/
// create a function and finds "Banana" in the fruits array and replaces it with "Mango"
function replaceElement(myfruit: string[]): void {
  let index = myfruit.indexOf("Banana");

  // Replaces "Banana" with "Mango" if found
  if (index !== -1) myfruit[index] = "Mango";
}
//Replacing "Banana" in the array
let fruitsArr: string[] = ["Apple", "Banana", "Kivi"];

replaceElement(fruitsArr);
console.log(fruitsArr);
