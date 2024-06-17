/* Day 38
Question 112: 
Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.

Explain & TIP: The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. It can be more efficient for large sets of data and when the key is not a string.*/

let countries = new Map<string, string>();

countries.set("India", "New Delhi");

countries.set("USA", "Washington DC");

countries.set("China", "Beijing");

console.log(countries);

/* Question 113:
Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

Explain & TIP: You can check for the presence of a key in a Map with the .has() method and retrieve its value with the .get() method.*/

function checkMapContains(countries: Map<string, string>): void {
  if (countries.has("Canada")) {
    console.log(
      countries.get(`The capital of Canada is ${countries.get("Canada")}`)
    );
  } else {
    console.log("Canada does not exist");
  }
}

checkMapContains(countries);

/* Question 114:
Iterate over a Map of student IDs and names, and log each pair to the console.

Explain & TIP: Iterating over a Map can be done using the .forEach() method or a for...of loop, providing access to each key-value pair.*/

// Creates a Map to store student IDs (keys) and names (values)
const students = new Map<number, string>();
students.set(1, "Ayesha");

students.set(2, "Aisha");

students.set(3, "Aishwarya");
// Iterates over the Map and logs each student ID and name
students.forEach((names, id) => {
  console.log(`Student id: ${id}  Student Name: ${names}`);
});

