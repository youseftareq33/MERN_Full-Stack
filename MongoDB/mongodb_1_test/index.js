const express=require('express');
const Joi=require('joi');
const mongoose=require('mongoose');
const {Users}=require('./Models/Users');

// init app
const app=express();

// connect to db
mongoose.connect('mongodb://localhost/test_db')
.then(()=>console.log('connected to mongodb'))
.catch((error)=>console.log('connection faild to mongodb',error))

//midllware -- to read json in post
app.use(express.json());

// get request
app.get('/',(request,response)=>{
    response.send("Hi from nodemon");
});

// post

app.post("/users/add",async (req,res) =>{

    const schema=Joi.object({
        name: Joi.string().required().max(20).min(3).trim(),
        password: Joi.string().required().min(3)
    });

    const {error}=schema.validate(req.body);

    if(error){
        return res.status(400).json({message: error.details[0].message});
    }

    try{
        const user = new Users({
        name : req.body.name,
        password: req.body.password
        });
    

        const result=await user.save();
        res.status(201).json(result);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:'something went wrong!'});
    }
    

}
)




app.listen(5000,console.log("Server is running on port 5000"));