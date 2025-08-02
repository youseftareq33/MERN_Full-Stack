const mongoose=require('mongoose');

const UserSchema=new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
        trim:true,
        minlength:3,
        maxlength:20
    },
    password:
    {
        type:String,
        required:true,
        minlength:3
    }
});

const Users =mongoose.model("Users",UserSchema);

module.exports ={
    Users
}