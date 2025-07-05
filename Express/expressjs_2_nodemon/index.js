
// nodemon library: automatic restart the node app when file changed

const express=require('express');


// init app
const app=express();

// get request
app.get('/hi',(request,response)=>{
    response.send("Hi from nodemon");
});

app.listen(5000,console.log("Server is running on port 5000"));


// inside package.json there is script, inside it we can create shourtcut of keywords
// ex: when we run nodemon, we write "nodemon index", in script i create "start" which equal to "nodemon index"
// which in terminal "npm start"==="nodemon index"