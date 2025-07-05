// joi library: used for validation on field

const express=require('express');
const Joi = require('joi');


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

// post

app.post("/users/add",(req,res) =>{

    /*
    if(!req.body.name){
        res.status(400).json("Please fill name !!!");
    }

    if(req.body.name.length<3){
        res.status(400).json("name must be more than 2 character !!!");
    }
    */

    const schema=Joi.object({
        name: Joi.string().required().max(20).min(3).trim()
    });

    const {error}=schema.validate(req.body);

    if(error){
        return res.status(400).json({message: error.details[0].message});
    }

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