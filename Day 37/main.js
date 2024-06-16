/* Day 37
Question 109:
Write an if statement that logs "Good Morning" if the current time is before 12 PM.

Explain & TIP: You can get the current hour using the Date object and its getHours() method. Remember, hours are in 24-hour format, so 12 PM is 12.*/
function currentHour() {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12) {
        console.log("Good Morning"); // It's morning if before 12 PM
    }
}
currentHour();
/*Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.

Explain & TIP: A common grading system assigns letter grades based on score ranges. You can use an if-else-if chain to determine the grade.*/
function studentGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(studentGrade(85));
console.log(studentGrade(90));
/* Question 111:
Use an if-else-if chain to categorize a person's age group (child, teenager, adult).

Explain & TIP: Age groups can typically be categorized by specific ranges. For instance, you might consider anyone under 13 a child, between 13 and 19 a teenager, and 20 or older an adult.*/
function ageGroup(age) {
    if (age < 13) {
        return "Child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "Adult";
    }
}
console.log(ageGroup(12)); // Child
console.log(ageGroup(18)); // Teenager
console.log(ageGroup(25)); // Adult
export {};
