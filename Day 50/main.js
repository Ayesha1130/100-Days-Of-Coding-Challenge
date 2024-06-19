/* Day 50
Question 148:
Demonstrate the use of the setTimeout() function to execute code after a delay.

Explain & TIP: setTimeout() is a built-in JavaScript function that allows you to execute a piece of code after a specified delay. It's especially useful for scheduling tasks, animations, or delaying execution without blocking the main thread.*/
setTimeout(() => {
    console.log("This message is shown after a 2-second delay.");
}, 2000);
// This showcases how to use setTimeout to delay actions in your code.
/* Question 149:
Explain the concept of the event loop in JavaScript with an example.

Explain & TIP: The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.*/
console.log("Starting");
setTimeout(() => {
    console.log("Callback: execution");
}, 0);
console.log("Ending");
// Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.
/* Question 150:
Describe how asynchronous callbacks differ from synchronous code execution.

Explain & TIP: Asynchronous callbacks allow JavaScript to perform long network requests, file operations, or set timers without blocking the main thread, enabling the continuation of code execution. Synchronous code, in contrast, runs sequentially, blocking further execution until the current operation completes.*/
console.log("Before asynchronous operation");
for (let i = 0; i < 1e9; i++) { }
;
console.log("After asynchronous operation");
console.log("Before synchronous operation");
setTimeout(() => {
    console.log("Asynchronous operation completed");
}, 1000);
console.log("After synchronous operation");
export {};
