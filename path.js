const fs = require('fs');
const path = require('path');

// Reading file 
const pathResolve = path.join('src' ,'home','file.txt');

const fileResolve = path.resolve('src' ,'home','file.txt');
console.log(fileResolve);
console.log(pathResolve);

fs.readFile(pathResolve, (error,data) =>{
    if (error){
        console.log(error);
    }
    else{
        console.log(data.toString());
    }
})