const mongoose = require("mongoose")
/*

A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc

*/
const UserSchema = new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,require:true},
    profilePic:{type:String,default:""},
    isAdmin:{type:Boolean,default:false}
},
{timestamps:true}
)





module.exports = mongoose.model("User",UserSchema)