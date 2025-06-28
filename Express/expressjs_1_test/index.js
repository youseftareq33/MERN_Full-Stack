const express=require('express');


const users=[
    {
        id:1,
        name:'yousef'
    },
    {
        id:2,
        name:'ahmad'
    }
]


// init app
const app=express();

//midllware -- to read json in post
app.use(express.json());

// get request
app.get('/',(request,response)=>{
    response.send("Express added to our project");
});

app.get('/users',(request,response)=>{
    response.json(users);
});

app.get('/users/:id',(request,response)=>{
    const user=users.find(x=>x.id===parseInt(request.params.id));

    if(user){
        response.status(200).json(user);
    }
    else{
        response.status(404).json({message:"user not found"});
    }
});


// post

app.post("/users/add",(req,res) =>{

    const user =
    {
        id : users.length+1 ,
        name : req.body.name
    }

    users.push(user);
    res.status(201).json(user);

}
)




app.listen(5000,console.log("Server is running on port 5000"));