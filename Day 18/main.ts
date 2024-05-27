/*  Day 18                 Question 52:
Make a Smartphone Object: Create a simple way to keep track of a smartphone's details.
Include its brand, model, and other key features like how much storage it has, the
size of its screen, and how long its battery lasts.*/

//create a smartphone object
let smartphone = {
  brand: "samsung",
  model: "galaxcy ",
  space: {
    Storage: "128gb",
    screensize: "6.5 inches",
    bettery: "20 hours",
    price: 100000,
  },
};
//printing object
console.log(smartphone);

/* Question 53:
Pulling Apart a Nested Object: Imagine you have a list inside another list that shows
what a computer programmer knows, like coding languages, tools, and software frameworks.
Find a way to get three specific skills from this list and show them.*/

let skill = {
  language: ["C++", "Jave", "Python", "Typescript"],
  tools: ["Visual Studio", "Visual Studio", "sublime Text"],
  framework: ["Unity", "Unreal Engine"],
};

let { language, framework, tools } = skill;
console.log(skill.language[0]);
console.log(skill.framework[1]);
console.log(skill.tools[2]);

/*Question 54: 
Making Flexible Object Keys: Learn how to set up a list where you can change the name of 
each section based on what you need at that moment, like adjusting labels based on user 
choices.*/

//make a flexible list
function objKey(key: string, value: string) {
  let dynamicObj: any = {};

  //section in the list with a changeable name
  dynamicObj[key] = value;

  return dynamicObj;
}
//flexible list setup for a user's preference
let userPre = objKey("Theme", "Dark");

// printing the list
console.log(userPre);
