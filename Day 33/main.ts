/*  Day 33
Question 97:
Write a function that returns the current date in the format "DD-MM-YYYY".

Explain & TIP: Working with dates in JavaScript often requires formatting them in a specific way. The Date object provides methods to get the day, month, and year, which you can then assemble into any format you need.*/

// function formats the current date as DD-MM-YYYY
function currentDate() {
  const now = new Date();

  // Ensures the day is two digits
  const day = String(now.getDay()).padStart(2, "0");

  // Ensures the month is two digits
  const month = String(now.getMonth() + 1).padStart(2, "0");

  const year = now.getFullYear();

  return `${day} ${month} ${year}`;
}
// Outputs the current date in DD-MM-YYYY format
console.log(currentDate());

/* Question 98:
 
Create a JavaScript snippet that calculates and logs how many days are left until New Year.

Explain & TIP: To find the difference between two dates, you can subtract one Date object from another, which gives you the difference in milliseconds. Convert that to days to see how many days are left until a specific event.*/

// Calculates and logs how many days are left until New Year

// Calculates how many days are left until New Year's Day
function calculatesDays() {
  const now = new Date();

  const newYear = new Date(now.getFullYear() + 1, 0, 1);

  // Subtracts the current date from New Year's Day to get the difference in milliseconds.
  const difference = newYear.getTime() - now.getTime();
  const daysLeft = Math.ceil(difference / (1000 * 60 * 60 * 24));
  return daysLeft;
}
// Tells us how many days there are until the next New Year's Day.
console.log(calculatesDays() + " days until New Year.");

/* Question 99: 
Generate a date object representing your next birthday and log it to the console.

Explain & TIP: When creating a Date object for a future event like a birthday, you might need to adjust the year based on whether the birthday has already occurred this year or not.*/

// Generates a date object representing my next birthday

function getNextBirthday(month: number, day: number): Date {
  const now = new Date();
  let year = now.getFullYear();

  const birthday = new Date(year, month - 1, day);

  // If the birthday this year has already passed, use next year's date
  if (birthday < now) {
    birthday.setFullYear(year + 1);
  }
  return birthday;
}
// Replace with your birth month and day
const nextBirthday = getNextBirthday(2, 16);

console.log("Next birthday on:", nextBirthday.toLocaleDateString());
