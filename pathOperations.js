
const fs = require('fs');

// Reading data

fs.readFile('text.txt', (error,data)=>{
 
    if(error){
        console.log("Is that errorr",error);
    }
    else{
        console.log(data.toString());
    }
});