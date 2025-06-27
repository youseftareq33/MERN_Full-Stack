// read module from existing module in node.js

const http=require("http");




 


// create server
const server=http.createServer(); // run on terminal

// run server, it takes as input (port, function (which when the server run on prev port the func. is what server do))
server.listen(5000,()=>console.log("server running on port 5000"));