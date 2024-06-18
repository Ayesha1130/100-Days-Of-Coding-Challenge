// Importing named exports:
import {name,Person} from "./main.js";

// Importing a default export:
import createAccount from "./main.js";

name()

const result = new Person("Ayesha",20);
result.greet(); 

console.log(createAccount("Ayesha",1234))