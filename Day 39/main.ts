/* Question 115:
Use a switch statement to log the days of the week based on a number (1-7).

Explain & TIP: A switch statement is a great way to select one of many code blocks to be executed. It's particularly useful for scenarios like mapping numbers to days of the week.*/

function daysOfWeek(days: number): void {
  switch (days) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Not a valid day");
      break;
  }
}

daysOfWeek(1);

/* Question 116:
Create a switch case that matches several cases to the same code block, representing seasons.

Explain & TIP: You can group multiple case statements together when they should execute the same block of code, which is handy for categorizing items into broader groups.*/

function seasons(season: string): void {
  switch (season) {
    case "spring":
    case "summer":
    case "autumn":
      console.log("It's hot");
      break;
    case "winter":
      console.log("It's cold");
      break;
    default:
      console.log("Not a valid season");
      break;
  }
}

seasons("spring");

/* Question 117:
Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

Explain & TIP: The default case in a switch statement provides a way to execute a block of code when none of the other case labels match the expression's value.*/

function defaultCase(season: string): void {
  switch (season) {
    case "spring":
    case "summer":
    case "autumn":
      console.log("It's hot");
      break;
    case "winter":
      console.log("It's cold");
      break;
    default:
      console.log("Not a valid season");
      break;
  }
}
defaultCase("winter")
