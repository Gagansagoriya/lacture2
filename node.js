// console.log('hello');

// for(let i = 0; i < 10000000000; i++){

// }

// setTimeout(() => {
//     console.log('Task to be perfomed after 8 second');
// }, 8000);

// console.log('Take to be performed after loop ');

// console.log("Start");

// setTimeout(() =>{
//     console.log('Timer');
// },0);

// while(true){
//     console.log("This is  a olo[g");
// };
// console.log("End");

// const compute = () =>{
//     let sum = 0;
//     for(let i  =  0 ; i <10000000; i++){
//         sum += i;
   
//     }
//     console.log(sum);
// }
// setTimeout(compute,0);
// console.log("Done");
// let i = 0;
// setInterval(() =>{
//     i++;
//     console.log(i);
// },1000);
// console.log(i);

// Servers are responsible for handling user authentication and processing client requests.
// Servers can deliver and process data.
// Servers are located on the server side of a web application.
// Servers can be either physical machines or virtual machines. all are right staements 

// Link the file source 

// const http = require('http');

// const fs = require('fs');

// const server = http.createServer((req,res) =>{

//     res.write('I a FrontEnd and BackEnd Developer ');

//     const data = fs.readFileSync('HTMlTutorial/musicproject/index.html');

//     res.end(data);
// });


// server.listen(8800,() =>{
//     console.log('Server is Listening 8880');
// });
// module.exports = server;

// export const function_name = () =>{

// };
// // const function_name1 = () =>{

// // }
// // export function_name1;

// const function_name2 = () =>{

// }
// export {function_name2};

// export function_name3 = () =>{

// }

// Please do not change the prewritten code
// const axios = require('axios');

// const Solution = async () => {
//   // Write your code here
//   try{
//    const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');

//    const responseData = response.data;

//    console.log(responseData);
//   } catch{
//     console.log('Error fetching data:' , error.messege);
//   }
// };
// Solution();
// module.exports = Solution;



// In the digital age, blogging has become an essential medium for expressing thoughts, sharing knowledge, and connecting with a global audience.

//     Objectives
    

//   Implement the writeBlog  function to accept a file path and user's blog, saving it to the specified file.
// Implement the publishBlog function to accept a file path and return the content of the specified file.
// Utilize the readline interface to input the user's blog and store it in the file 'myblog.txt'.

//  Notes/Hints:

// Implement the module using ES6 syntax, without requiring a change in the file extension(.mjs).
// Please make sure to utilize the synchronous functions provided by the file system module in Node.js.
// Pay attention to error handling, such as file not found or read/write errors.
// Remember to export the writeBlog and publishBlog</code> functions from the blogActions.js</code> module.

// 1.Import readline
// 
// const readline = require('readline');