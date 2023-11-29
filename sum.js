// // 1. Import readline

// const readline = require('readline');

// // 2. Configure interface to connect with terminal/command line.

//  const interface = readline.createInterface(
//    { input : process.stdin,
//      output :process.stdout
// });

// // 3. Reading value

// interface.question("Enter first Number", (num1) =>{
//     interface.question("Enter the Second number" ,(num2) =>{
//         // num1 , num2
//         const sum = num1+ num2;
//         console.log(sum);
//     })
// });
// 1. Import readline
const readline = require('readline');

// 2. Configure interface to connect with terminal/command line.
const interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 3. Reading value
interface.question("Enter first Number", (num1) => {
  interface.question("Enter the Second number", (num2) => {
    // num1 , num2
    const sum = parseInt(num1) + parseInt(num2); // Convert input to numbers
    console.log(sum);
    interface.close(); // Close the interface when done
  });
});

// In a Node.js environment, you are to create an interface using the readline module to receive two numbers from the user. 

// The task involves calculating and logging the maximum of these two numbers. 

// This problem simulates a real-world scenario where user input needs to be processed and a result needs to be computed based on that input.

//  Objectives

// Implement an interface using the readline module to receive user input.
// Extract two numbers from the user input.
// Calculate the maximum of the two numbers.
// Log the maximum value to the console.

//  Notes/Hints:
// The use of the keyword interface is not permitted, as it may function correctly on a local machine but will result in test failures on the backend.
