/* Day 25
Question 73: Assigning and Updating Variables: Create a function where you declare a variable using let and assign an initial value. Then, update its value within the same function and log both the initial and updated values.*/

//function shows how to assign and update variable values
function variableValue() {
  // Initially assigns the value 10
  let num = 10;

  // Print the initial value
  console.log("Initial value:", num);

  // Updates the value to 20
  num = 20;

  // print the updated value
  console.log("Updated value:", num);
}
//update it, showing how values can change.
variableValue();

/* Question 74: 
Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.*/

// function swaps the values of two variables
function swappingVariable() {
    let a = 5;
    let b = 10;   // Initially, a is 5 and b is 10
    console.log("before Swapping:", "a =" , a, "b =", b);

    // swapping the values of two variables
    let temp = a;
    a = b;
    b = temp; //  Initially, a is 10 and b is 5
    console.log("After swapping:", "a =", a, "b =",b);
    
}
swappingVariable()


/* Question 75: 
Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.*/

//function shows how to use compound assignment operators

function compoundAssignment(){
    let x = 4;
    console.log("Initial x: =",x);
    x += 2;
    console.log("After Addition : =",x);
    x -= 1;
    console.log(" After subtraction: =",x);
    x *= 3;
    console.log("After multiplication: =",x);
    x /= 2;
    console.log("After division: =",x);
    
}

compoundAssignment();


