
// We have two ways to create a module 
// 1.Common JS Module.



// First way

// module.exports.sum = ( x , y) => {
//     return x + y;
// }

// module.exports.div = (x , y)=> { 
//     return x /y;
// }

// SEcond way
// exports.sum = ( x , y) => {
//     return x + y;
// }

// exports.div = (x , y)=> { 
//     return x /y;
// }

// module.exports =  function(x , y){
//   return  x + y;
// };

// module.exports = {
//     add : div,
// }


// // 2. ES6 Module.

// // Using ES6 Syntex , export module

export function add(a , b){
    return a + b;
}

export const num = 100;

export function div(a , b){
    return a / b;
}
