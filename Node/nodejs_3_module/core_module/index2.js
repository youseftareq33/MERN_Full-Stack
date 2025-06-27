// read module from existing module in node.js

const http=require("http");



const Car=[
    {
        id: 1,
        name:"BMW"
    },
    {
        id: 2,
        name:"Hundai"
    },
]
 


// create server

const server=http.createServer((request,response)=> // run on browser
{
    if(request.url==="/"){// return html
        response.write('<h1>Run on Browser</h1>');
        response.end();
    }
    else if(request.url==="/car"){ // return data
        response.write(JSON.stringify(Car));
        response.end();
    }
}); 

// run server, it takes as input (port, function (which when the server run on prev port the func. is what server do))
server.listen(5000,()=>console.log("server running on port 5000"));

// set on browser: http://localhost:5000/
