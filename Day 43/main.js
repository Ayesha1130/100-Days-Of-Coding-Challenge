/* Day 43
Question 127:
Convert a traditional function expression to an arrow function.

Explain & TIP: Arrow functions provide a concise syntax for writing function expressions. They don't have their own bindings to this or super, and should not be used as methods.*/
let traditionalFunction = function (a, b) {
    return a + b;
};
let arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(10, 20));
console.log(arrowFunction(100, 20));
/*Question 128:
Create an arrow function that takes multiple parameters and returns the product of all parameters.

Explain & TIP: Arrow functions can take zero, one, or multiple parameters. When dealing with multiple parameters, you enclose them in parentheses.*/
let multipleParameters = (...number) => number.reduce((total, number) => total * number, 1);
console.log(multipleParameters(10, 20, 30, 40));
/* Question 129:
Explain how this behaves differently in arrow functions compared to traditional functions.

Explain & TIP: In traditional functions, this refers to the object that called the function, which can vary depending on the context. In arrow functions, this is lexically bound, meaning it uses this from the code that contains the arrow function.*/
const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: () => console.log("Arrow Function:" + "This value")
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction();
export {};
