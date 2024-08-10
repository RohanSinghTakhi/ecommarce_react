import mongoose from "mongoose";
const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{type:String,
        require:true
    },
    email:{
        type:String,
        require: true
    },password:{
        type:String,
        require: true
    }
})
module.export = mongoose.model('User',UserSchema)